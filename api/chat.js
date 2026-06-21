// Vercel serverless function: proxies the doubt-solver chat to Gemini 2.5 Flash.
// The API key stays server-side (set GEMINI_API_KEY in the Vercel project env vars).
// In local dev this route is handled by vite-gemini.js instead; this file runs in production.
import { TUTOR_SYSTEM_PROMPT } from "../src/data/teachPrompt.js";

const MODEL = "gemini-2.5-flash";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "POST only" });
    return;
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "GEMINI_API_KEY missing on server" });
    return;
  }
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const { messages = [], context = "" } = body;

    const system = TUTOR_SYSTEM_PROMPT +
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
    if (!r.ok) {
      res.status(r.status).json({ error: data?.error?.message || "Gemini error" });
      return;
    }
    const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") || "(no response)";
    res.status(200).json({ text });
  } catch (e) {
    res.status(500).json({ error: String(e?.message || e) });
  }
}
