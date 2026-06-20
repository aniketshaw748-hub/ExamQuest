import MarkdownIt from "markdown-it";
import katex from "katex";

const md = new MarkdownIt({ html: false, linkify: true, breaks: false });

// protect math spans, render markdown, then re-inject KaTeX
export function renderRich(src, inline = false) {
  if (!src) return "";
  const math = [];
  let t = src
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, x) => (math.push({ d: true, tex: x }), `@@M${math.length - 1}@@`))
    .replace(/\$([^$\n]+?)\$/g, (_, x) => (math.push({ d: false, tex: x }), `@@M${math.length - 1}@@`));
  let html = inline ? md.renderInline(t) : md.render(t);
  html = html.replace(/@@M(\d+)@@/g, (_, i) => {
    const o = math[+i];
    try { return katex.renderToString(o.tex, { displayMode: o.d, throwOnError: false }); }
    catch { return o.tex; }
  });
  return html;
}

// inline -> <span> (renderInline, no block <p>); block -> <div>. Prevents div-in-p / span-in-div.
export function Rich({ children, className = "", inline = false }) {
  const html = { __html: renderRich(children, inline) };
  return inline
    ? <span className={className} dangerouslySetInnerHTML={html} />
    : <div className={className} dangerouslySetInnerHTML={html} />;
}

export function Tex({ children, display = false }) {
  let html = "";
  try { html = katex.renderToString(children, { displayMode: display, throwOnError: false }); }
  catch { html = children; }
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
