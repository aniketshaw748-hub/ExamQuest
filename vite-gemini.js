// Dev-server middleware: proxies chat requests to Gemini 2.5 Flash.
// The API key stays server-side (never shipped to the browser).
import { TEACH_SYSTEM_PROMPT } from "./src/data/teachPrompt.js";

const MODEL = "gemini-2.5-flash";

export function geminiPlugin(apiKey) {
  return {
    name: "gemini-doubt-solver",
    configureServer(server) {
      server.middlewares.use("/api/chat", async (req, res) => {
        if (req.method !== "POST") { res.statusCode = 405; return res.end("POST only"); }
        try {
          const body = await readJson(req);
          const { messages = [], context = "" } = body;
          if (!apiKey) { res.statusCode = 500; return json(res, { error: "GEMINI_API_KEY missing on server" }); }

          const system = TEACH_SYSTEM_PROMPT +
            (context ? `\n\nCURRENT LEARNING CONTEXT (ground every answer in this; if the question is unrelated, gently steer back): ${context}` : "");

          const contents = messages.slice(-12).map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.text }],
          }));

          const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;
          const r = await fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              systemInstruction: { parts: [{ text: system }] },
              contents,
              generationConfig: { temperature: 0.6, maxOutputTokens: 1400, topP: 0.95 },
            }),
          });
          const data = await r.json();
          if (!r.ok) { res.statusCode = r.status; return json(res, { error: data?.error?.message || "Gemini error" }); }
          const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") || "(no response)";
          json(res, { text });
        } catch (e) {
          res.statusCode = 500;
          json(res, { error: String(e?.message || e) });
        }
      });
    },
  };
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let b = "";
    req.on("data", (c) => (b += c));
    req.on("end", () => { try { resolve(b ? JSON.parse(b) : {}); } catch (e) { reject(e); } });
    req.on("error", reject);
  });
}
function json(res, obj) { res.setHeader("content-type", "application/json"); res.end(JSON.stringify(obj)); }
