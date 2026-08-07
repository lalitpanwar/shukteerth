import Image from "next/image";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { omanandGalleryGroups } from "@/data/omanandGallery.data";

export function OmanandGallery() {
  return (
    <Section className="bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ सेवा-यात्रा की झलकियाँ ✦
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            उत्तराधिकार से आज तक
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-brown/75">
            2004 में पीठाधीश्वर का दायित्व ग्रहण करने के पश्चात शिक्षा,
            पर्यावरण एवं धार्मिक आयोजनों के माध्यम से निरंतर सेवा-कार्य
            की कुछ झलकियाँ।
          </p>
        </div>

        <div className="space-y-16">
          {omanandGalleryGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-brand-gold/20 pb-5">
                <div>
                  <h3 className="font-heading text-2xl text-brand-brown md:text-3xl">
                    {group.label}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-brand-brown/60">
                    {group.description}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-brand-gold/25 bg-brand-gold/10 px-4 py-1.5 text-sm font-semibold text-brand-primary">
                  {group.range}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
                {group.photos.map((photo) => (
                  <figure
                    key={photo.id}
                    className="group relative aspect-square overflow-hidden rounded-2xl bg-brand-sand/40 shadow-sm"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-4">
                      <span className="text-[11px] uppercase tracking-[0.14em] text-brand-gold">
                        {photo.year}
                      </span>
                      <p className="mt-1 text-sm font-medium leading-5 text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
                        {photo.caption}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
