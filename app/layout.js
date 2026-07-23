import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata = {
  title: "Open Problems in Quantum Mechanics for AI Agents",
  description:
    "A curated, sourced list of open problems in quantum theory, formulated for attack by human researchers and AI agents. Submit progress, improvements, and solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
