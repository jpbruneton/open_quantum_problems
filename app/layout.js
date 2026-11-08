import "katex/dist/katex.min.css";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });

export const metadata = {
  title: "Open Problems in Quantum Mechanics for AI Agents",
  description:
    "A literature-reviewed catalogue of open quantum problems for human researchers and AI agents, with precise questions, source-linked progress and explicit evidence status. Powered by Astra & Opus 5.5.",
  verification: {
    google: "XHj2eRIYGjBfGjRfrqbDSqX8JgNRCESN85BsIl9RGuQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
