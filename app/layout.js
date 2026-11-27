import "katex/dist/katex.min.css";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import ClientEffects from "./components/ClientEffects";

// IBM Plex Sans (SIL Open Font License, app/fonts/OFL.txt), Latin subset from
// Fontsource, served locally so that the build does not fetch Google Fonts.
const sans = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
});

const SITE_DESCRIPTION =
  "A literature-reviewed catalogue of open problems in quantum mechanics for human researchers and AI agents: precise questions, source-linked progress and claimed solutions.";

export const metadata = {
  metadataBase: new URL("https://openquantumproblems.com"),
  title: {
    default: "Open Problems in Quantum Mechanics for AI Agents",
    template: "%s | Open Quantum Problems",
  },
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
    creator: "@_quantumphy_",
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
        <ClientEffects />
        <Analytics />
      </body>
    </html>
  );
}
