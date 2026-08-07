import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";

export const metadata = {
  title: "गुरु परम्परा | श्री शुकदेव आश्रम",
  description:
    "श्री शुकदेव आश्रम, शुकतीर्थ की गुरु परम्परा — संस्थापक स्वामी कल्याण देव जी महाराज एवं वर्तमान पीठाधीश्वर स्वामी ओमानन्द जी महाराज का परिचय।",
};

const gurus = [
  {
    href: "/guru-parampara/swami-kalyan-dev",
    image: "/images/home/guru-parampara.webp",
    badge: "संस्थापक",
    title: "स्वामी कल्याण देव जी महाराज",
    years: "1876 — 2004",
    description:
      "शिक्षा, सेवा और समरसता को जीवन-व्रत बनाकर श्री शुकदेव आश्रम, शुकतीर्थ की स्थापना करने वाले संत।",
  },
  {
    href: "/guru-parampara/swami-omanand",
    image: "/images/home/swami-omanand.webp",
    badge: "वर्तमान पीठाधीश्वर",
    title: "स्वामी ओमानन्द जी महाराज",
    years: "2004 — वर्तमान",
    description:
      "स्वामी कल्याण देव जी के उत्तराधिकारी, जो आश्रम की सेवा-परम्परा को निरंतर आगे बढ़ा रहे हैं।",
  },
];

export default function GuruParamparaIndexPage() {
  return (
    <Section className="bg-brand-ivory py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ गुरु परम्परा ✦
          </span>
          <h1 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            एक गुरु, एक आशीर्वाद, एक अखंड परम्परा
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-brown/75">
            श्री शुकदेव आश्रम की स्थापना से आज तक, इस पावन परम्परा को
            आगे बढ़ाने वाले संतों का परिचय।
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {gurus.map((guru) => (
            <article
              key={guru.href}
              className="overflow-hidden rounded-3xl border border-brand-gold/15 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={guru.image}
                  alt={guru.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="inline-flex rounded-full border border-brand-gold/25 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-brand-primary">
                  {guru.badge}
                </span>

                <h2 className="mt-5 font-heading text-2xl text-brand-brown">
                  {guru.title}
                </h2>

                <p className="mt-1 text-sm tracking-wide text-brand-brown/60">
                  {guru.years}
                </p>

                <p className="mt-4 leading-7 text-brand-brown/70">
                  {guru.description}
                </p>

                <ButtonLink
                  href={guru.href}
                  variant="link"
                  endIcon={<ArrowRight className="h-4 w-4" />}
                  className="mt-6 h-auto p-0"
                >
                  पूरा परिचय पढ़ें
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
