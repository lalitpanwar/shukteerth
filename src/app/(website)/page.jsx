import Hero from "@/components/section/hero/Hero";
import StoryTelling from "@/components/home/StoryTelling";
import AboutAshram from "@/components/home/AboutAshram";
import GuruParampara from "@/components/home/GuruParampara";
import AshramServices from "@/components/home/AshramServices";
import GalleryMarquee from "@/components/home/GalleryMarquee";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import VisitShukteerth from "@/components/home/VisitShukteerth";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StoryTelling />
      <AboutAshram />
      <GuruParampara />
      <AshramServices />
      <GalleryMarquee />
      <UpcomingEvents />
      <VisitShukteerth />
      <FAQ />
    </>
  );
}
