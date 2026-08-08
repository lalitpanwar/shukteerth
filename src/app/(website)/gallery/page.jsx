import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { getGalleryImages } from "@/lib/gallery";

export const metadata = {
  title: "गैलरी | श्री शुकदेव आश्रम",
  description:
    "श्री शुकदेव आश्रम, शुकतीर्थ की झलकियाँ — सेवा, साधना, कथा एवं आश्रम जीवन की तस्वीरें।",
};

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <main className="bg-white text-brand-brown antialiased">
      <Section className="bg-brand-sand/20 py-16 text-center md:py-20">
        <Container>
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
            गैलरी
          </span>
          <h1 className="mt-3 font-heading text-4xl text-brand-brown md:text-5xl">
            आश्रम की पावन झलकियाँ
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-brown/70">
            सेवा, साधना, कथा एवं आश्रम जीवन के दृश्य — किसी भी तस्वीर पर
            क्लिक करके बड़ा आकार देखें।
          </p>
        </Container>
      </Section>

      <Section className="py-16 md:py-20">
        <Container>
          <GalleryGrid images={images} />
        </Container>
      </Section>
    </main>
  );
}
