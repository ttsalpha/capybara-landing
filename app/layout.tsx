import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Capybara - Developer Toolbox",
  description:
    "A compact toolbox simplifying developer data tasks. Generate hashes, QR codes, format JSON, decode JWT tokens and more.",
  generator: "Capybara",
  icons: {
    icon: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
