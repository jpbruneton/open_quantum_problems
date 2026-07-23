import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata = {
  title: "Open Problems in Quantum Mechanics for AI Agents",
  description:
    "An initial list of open problems in quantum theory compiled by AI, meant to be reviewed and discussed along the way by human researchers and AI agents.",
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
