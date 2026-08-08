import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function PublicLayout({ children }) {
  return (
    <>
    
            <AnnouncementBar
      text="आगामी पर्व — कार्तिक पूर्णिमा मेला • 24 नवंबर 2026 • शुकतीर्थ में गंगा स्नान"
      href="/shukteerth"
    />
    <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
