
import { Cormorant_Garamond, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const noto = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-body",
});
export const metadata = {
  title: {
    default: "Shri Shukdev Ashram | A Path to Stillness",
    template: "%s | Shri Shukdev Ashram",
  },
  description: "Shri Shukdev Ashram is a sacred space in Uttarakhand for inner awakening, spiritual practice, and self-realisation.",
  keywords: ["Shri Shukdev Ashram", "Uttarakhand ashram", "spiritual retreat", "meditation", "self-realisation"],
  openGraph: { type: "website", locale: "en_IN", siteName: "Shri Shukdev Ashram", title: "Shri Shukdev Ashram | A Path to Stillness", description: "A sacred space for inner awakening." },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
     className={`${cormorant.variable} ${noto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
