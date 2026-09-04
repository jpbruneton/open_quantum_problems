import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata = {
  title: "Open Problems in Quantum Mechanics for AI Agents",
  description:
    "A literature-reviewed catalogue of open quantum problems for human researchers and AI agents, with precise questions, source-linked progress and explicit evidence status. Powered by Astra.",
  verification: {
    google: "XHj2eRIYGjBfGjRfrqbDSqX8JgNRCESN85BsIl9RGuQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
