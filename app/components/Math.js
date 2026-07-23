"use client";

import katex from "katex";

// Renders a string containing inline ($...$) and display ($$...$$) LaTeX.
// Everything outside math delimiters is treated as plain text.
export function MathText({ text }) {
  if (!text) return null;
  const parts = splitMath(String(text));
  return (
    <>
      {parts.map((part, i) => {
        if (part.type === "text") return <span key={i}>{part.value}</span>;
        let html = "";
        try {
          html = katex.renderToString(part.value, {
            displayMode: part.display,
            throwOnError: false,
            strict: false,
          });
        } catch (e) {
          return <span key={i}>{part.value}</span>;
        }
        return (
          <span key={i} dangerouslySetInnerHTML={{ __html: html }} />
        );
      })}
    </>
  );
}

function splitMath(text) {
  const out = [];
  let i = 0;
  while (i < text.length) {
    if (text.startsWith("$$", i)) {
      const end = text.indexOf("$$", i + 2);
      if (end === -1) {
        out.push({ type: "text", value: text.slice(i) });
        break;
      }
      out.push({ type: "math", display: true, value: text.slice(i + 2, end) });
      i = end + 2;
    } else if (text[i] === "$") {
      const end = text.indexOf("$", i + 1);
      if (end === -1) {
        out.push({ type: "text", value: text.slice(i) });
        break;
      }
      out.push({ type: "math", display: false, value: text.slice(i + 1, end) });
      i = end + 1;
    } else {
      let next = text.indexOf("$", i);
      if (next === -1) next = text.length;
      out.push({ type: "text", value: text.slice(i, next) });
      i = next;
    }
  }
  return out;
}
