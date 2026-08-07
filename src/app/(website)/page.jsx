import Hero from "@/components/section/hero/Hero";
import StoryTelling from "@/components/home/StoryTelling";
import AboutAshram from "@/components/home/AboutAshram";
import GuruParampara from "@/components/home/GuruParampara";
import AshramServices from "@/components/home/AshramServices";
import VisitShukteerth from "@/components/home/VisitShukteerth";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StoryTelling />
      <AboutAshram />
      <GuruParampara />
      <AshramServices />
      <VisitShukteerth />
    </>
  );
}
