import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";
import { getGalleryImages } from "@/lib/gallery";

const ROW_ANIMATION = [
  "animate-[marquee-ltr_36s_linear_infinite]",
  "animate-[marquee-rtl_42s_linear_infinite]",
  "animate-[marquee-ltr_50s_linear_infinite]",
];

export default function GalleryMarquee() {
  const images = getGalleryImages();

  if (images.length === 0) return null;

  const rows = [[], [], []];
  images.forEach((src, index) => rows[index % 3].push(src));

  return (
    <Section className="overflow-hidden py-20 md:py-28  border-y border-brand-border/60 bg-brand-ivory/20">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
            ✦ गैलरी ✦
          </span>
          <h2 className="mt-3 font-heading text-3xl text-brand-brown md:text-4xl">
            आश्रम के जीवंत क्षण
          </h2>
          <p className="mx-auto mt-4 text-brand-brown/70">
            सेवा, साधना, कथा एवं आश्रम जीवन की कुछ झलकियाँ।
          </p>
        </div>
      </Container>

      <div className="space-y-4">
        {rows.map((row, rowIndex) => {
          if (row.length === 0) return null;
          const track = [...row, ...row];

          return (
            <div key={rowIndex} className="group overflow-hidden">
              <div
                className={`flex w-max gap-4 motion-reduce:animate-none ${ROW_ANIMATION[rowIndex % ROW_ANIMATION.length]} group-hover:[animation-play-state:paused]`}
              >
                {track.map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className="relative aspect-video h-40 shrink-0 overflow-hidden rounded-xl border border-brand-gold/15 md:h-48"
                  >
                    <Image
                      src={src}
                      alt="आश्रम की झलक"
                      fill
                      sizes="(max-width: 768px) 45vw, 320px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Container className="mt-14 text-center">
        <ButtonLink
          href="/gallery"
          variant="gold"
          endIcon={<ArrowRight className="h-4 w-4" />}
        >
          पूरी गैलरी देखें
        </ButtonLink>
      </Container>
    </Section>
  );
}
