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
      text="श्रीमद्भागवत कथा • 10–17 अगस्त • ऑनलाइन पंजीकरण प्रारम्भ"
    />
    <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
