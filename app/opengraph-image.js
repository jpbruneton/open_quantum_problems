import { ImageResponse } from "next/og";
import { PROBLEMS } from "./data/problems";
import { PROPOSAL_COUNT } from "./data/proposals";

export const runtime = "edge";
export const alt = "Open Problems in Quantum Mechanics for AI Agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const claimed = PROBLEMS.filter((p) => p.status === "claimed-solved").length;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f3ec",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          color: "#1c2230",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 4, color: "#b03a1a", textTransform: "uppercase" }}>openquantumproblems.com</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, marginTop: 24 }}>Open Problems in Quantum Mechanics for AI Agents</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 2, background: "#1c2230" }} />
          <div style={{ display: "flex", height: 2, background: "#1c2230", marginTop: 3 }} />
          <div style={{ display: "flex", paddingTop: 28, fontSize: 32, color: "#1d4e89" }}>
            {`${PROBLEMS.length} entries · ${claimed} claimed solved · ${PROPOSAL_COUNT} AI-suggested problems`}
          </div>
        </div>
      </div>
    ),
    size
  );
}
