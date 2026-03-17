import { NavbarSection } from "./components/ui/Navbar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://austinmander.com"),
  title: "Austin Mander — AI Engineer & Builder",
  description:
    "Austin Mander is a UK-based AI engineer and builder shipping production systems, AI agents, and enterprise tools at solo-founder speed.",
  openGraph: {
    title: "Austin Mander — AI Engineer & Builder",
    description:
      "I build things that actually ship. AI agents, full-stack apps, and enterprise systems built fast and built for production.",
    url: "https://austinmander.com",
    siteName: "Austin Mander",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Mander — AI Engineer & Builder",
    description:
      "21-year-old developer shipping production systems that most teams need 10 people for.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarSection />
        {children}
      </body>
    </html>
  );
}
