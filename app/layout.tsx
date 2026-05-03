import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abandoned Checkout Optimizer – Turn Lost Sales into Revenue",
  description: "AI-powered Shopify abandoned checkout recovery. Analyze patterns, send perfectly-timed emails, and win back customers automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="601db1eb-093a-4462-9cbc-228efb43285f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
