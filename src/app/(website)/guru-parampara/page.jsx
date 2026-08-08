import { Fragment } from "react";
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
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ गुरु परम्परा ✦
          </span>
          <h1 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            एक गुरु, एक आशीर्वाद, एक अखंड परम्परा
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-brown/75">
            श्री शुकदेव आश्रम की स्थापना से आज तक, इस पावन परम्परा को
            आगे बढ़ाने वाले संतों का परिचय — गुरु से शिष्य तक, एक अटूट श्रृंखला।
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-stretch sm:justify-center sm:gap-0">
          {gurus.map((guru, index) => (
            <Fragment key={guru.href}>
              <article className="relative mt-16 w-full max-w-sm rounded-3xl bg-linear-to-b from-brand-primary to-[#3a1414] pt-16 pb-9 text-center shadow-xl">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-brand-ivory shadow-lg ring-4 ring-brand-gold/70">
                    <Image
                      src={guru.image}
                      alt={guru.title}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-ivory bg-brand-gold text-sm font-bold text-brand-brown shadow">
                    {index + 1}
                  </span>
                </div>

                <div className="px-7">
                  <span className="inline-flex rounded-full border border-brand-gold/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-brand-gold uppercase">
                    {guru.badge}
                  </span>

                  <h2 className="mt-4 font-heading text-xl text-white">
                    {guru.title}
                  </h2>

                  <p className="mt-1 text-xs tracking-wide text-white/50">
                    {guru.years}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-white/75">
                    {guru.description}
                  </p>

                  <ButtonLink
                    href={guru.href}
                    variant="link"
                    endIcon={<ArrowRight className="h-4 w-4" />}
                    className="mt-5 h-auto p-0 text-brand-gold hover:text-brand-gold/80"
                  >
                    पूरा परिचय पढ़ें
                  </ButtonLink>
                </div>
              </article>

              {index < gurus.length - 1 && (
                <div className="flex items-center justify-center py-2 sm:px-6 sm:py-0">
                  <div className="flex h-11 w-11 rotate-90 items-center justify-center rounded-full bg-brand-gold text-brand-brown shadow-md sm:rotate-0">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </Section>
  );
}
