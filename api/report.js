// Receives bug / feature reports from the AI tutor and delivers them to the developers.
// Configure delivery with EITHER:
//   REPORT_WEBHOOK_URL  - a Discord / Slack / Formspree / Zapier / generic JSON webhook, OR
//   GITHUB_TOKEN + GITHUB_REPO ("owner/name")  - to open a GitHub issue.
// With neither set it just logs to the function console (visible in Vercel logs).

export async function handleReport(body, env = process.env) {
  const kind = body.kind === "bug" ? "bug" : "feature";
  const summary = String(body.summary || "").slice(0, 200);
  const message = String(body.message || "").slice(0, 4000);
  const page = String(body.page || "");
  const subject = String(body.subject || "");
  const title = `[${kind}] ${summary || message.slice(0, 80) || "report"}`.slice(0, 120);
  const text = `New ${kind} report from Exam Quest\n\nSummary: ${summary || "(none)"}\nSubject: ${subject || "-"}\nPage: ${page || "-"}\n\nMessage:\n${message || "(none)"}`;

  let delivered = "logged";
  try {
    if (env.REPORT_WEBHOOK_URL) {
      // include the field names Discord (content), Slack (text) and generic webhooks expect
      await fetch(env.REPORT_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ content: text, text, title, kind, summary, message, page, subject }),
      });
      delivered = "webhook";
    } else if (env.GITHUB_TOKEN && env.GITHUB_REPO) {
      const r = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/issues`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${env.GITHUB_TOKEN}`,
          "content-type": "application/json",
          "user-agent": "exam-quest",
          accept: "application/vnd.github+json",
        },
        body: JSON.stringify({ title, body: text, labels: [kind === "bug" ? "bug" : "enhancement", "from-tutor"] }),
      });
      if (r.ok) delivered = "github";
    }
  } catch (e) {
    console.error("[report] delivery failed:", e?.message || e);
    delivered = "error";
  }
  console.log("[report]", kind, "-", summary || message.slice(0, 80));
  return { ok: true, delivered };
}

export default async function handler(req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "POST only" }); return; }
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const out = await handleReport(body, process.env);
    res.status(200).json(out);
  } catch (e) {
    res.status(500).json({ error: String(e?.message || e) });
  }
}
