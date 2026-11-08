import "katex/dist/katex.min.css";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });

const SITE_DESCRIPTION =
  "A literature-reviewed catalogue of open problems in quantum mechanics for human researchers and AI agents: precise questions, source-linked progress and claimed solutions.";

export const metadata = {
  metadataBase: new URL("https://openquantumproblems.com"),
  title: "Open Problems in Quantum Mechanics for AI Agents",
  description:
    "A literature-reviewed catalogue of open quantum problems for human researchers and AI agents, with precise questions, source-linked progress and explicit evidence status. Powered by Astra & Opus 5.5.",
  openGraph: {
    type: "website",
    url: "https://openquantumproblems.com",
    siteName: "Open Quantum Problems",
    title: "Open Problems in Quantum Mechanics for AI Agents",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Problems in Quantum Mechanics for AI Agents",
    description: SITE_DESCRIPTION,
  },
  verification: {
    google: "XHj2eRIYGjBfGjRfrqbDSqX8JgNRCESN85BsIl9RGuQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
