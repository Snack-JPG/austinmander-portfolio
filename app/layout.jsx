import { MobileNav } from "./components/ui/MobileNav";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://austinmander.com"),
  title: "Austin Mander — AI Engineer & Builder",
  applicationName: "Austin Mander Portfolio",
  description:
    "Austin Mander is a UK-based AI engineer and builder shipping production systems, AI agents, and enterprise tools at solo-founder speed.",
  keywords: [
    "Austin Mander",
    "AI engineer",
    "AI agents",
    "automation consultant",
    "Next.js portfolio",
    "full-stack engineer",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  openGraph: {
    title: "Austin Mander — AI Engineer & Builder",
    description:
      "I build things that actually ship. AI agents, full-stack apps, and enterprise systems built fast and built for production.",
    url: "https://austinmander.com",
    siteName: "Austin Mander",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Austin Mander portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Mander — AI Engineer & Builder",
    description:
      "UK-based developer shipping production AI systems, enterprise tools, and full-stack applications.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to content
        </a>
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
