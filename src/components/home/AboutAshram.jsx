import Image from "next/image";
import { ShieldCheck, BookOpen, Landmark, Flower2, HeartHandshake } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";

const highlights = [
  { icon: BookOpen, text: "श्रीमद्भागवत कथा की पावन परम्परा" },
  { icon: Landmark, text: "परम पूज्य स्वामी कल्याण देव जी द्वारा स्थापित" },
  { icon: Flower2, text: "गुरु परम्परा द्वारा संरक्षित" },
  { icon: HeartHandshake, text: "सेवा, साधना एवं संस्कृति का केन्द्र" },
];

const stats = [
  { value: "5000+", label: "वर्ष परम्परा" },
  { value: "2", label: "गुरु परम्परा" },
  { value: "300+", label: "सेवा संस्थान" },
];

export default function AboutAshram() {
  return (
    <Section className="relative overflow-hidden bg-white py-20 md:py-24 xl:py-28">

      {/* Background Decoration */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-gold/4 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 -right-40 h-120 w-120 rounded-full bg-brand-primary/4 blur-3xl" />

      <Container className="relative">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">

            ✦ श्री शुकदेव आश्रम ✦

          </span>

          <h2 className="mt-6 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">

            जहाँ सेवा, साधना और
            <br />
            सनातन संस्कृति आज भी जीवंत है।

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-brand-brown/75">

            पाँच हजार वर्षों की दिव्य परम्परा से जुड़ा
            श्री शुकदेव आश्रम श्रद्धा, सेवा, साधना और
            संस्कार का जीवंत केन्द्र है। यहाँ आने वाला
            प्रत्येक श्रद्धालु केवल दर्शन ही नहीं,
            बल्कि आध्यात्मिक अनुभव भी प्राप्त करता है।

          </p>

          {/* Trust badge */}

          <div className="mt-8 inline-flex items-center gap-2.5 rounded-2xl border border-brand-border bg-brand-sand/40 px-5 py-3 text-left text-sm text-brand-brown/80 shadow-sm">

            <ShieldCheck className="h-5 w-5 shrink-0 text-brand-gold" />

            <span>
              <strong className="text-brand-brown">श्री शुकदेव आश्रम स्वामी कल्याणदेव सेवा ट्रस्ट</strong> — पंजीकृत धार्मिक एवं चैरिटेबल ट्रस्ट
            </span>

          </div>

        </div>

        {/* Image */}

        <div className="mt-16">

          <div className="group overflow-hidden rounded-4xl border border-brand-gold/20 p-3">

            <div className="relative aspect-video overflow-hidden rounded-3xl">

              {/* TEMP: swap for real photo */}
              <Image
                src="/images/home/shri-shukdev-ashram-muzaffarnagar.webp"
                alt="श्री शुकदेव आश्रम"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-8">

                <p className="font-heading text-xl text-white md:text-2xl">
                  श्री शुकदेव आश्रम
                </p>

                <p className="mt-1 text-sm text-white/75">
                  शुकतीर्थ, उत्तर प्रदेश
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-14 flex items-center justify-center gap-4">

          <span className="h-px w-20 bg-brand-gold/40"></span>

          <span className="text-brand-gold">

            ✦

          </span>

          <span className="h-px w-20 bg-brand-gold/40"></span>

        </div>

        {/* Content */}

        <div className="grid gap-16 lg:grid-cols-[1.2fr_.8fr]">
                      {/* Left */}

          <div>

            <h3 className="font-heading text-3xl leading-tight text-brand-brown">

              एक जीवंत
              <br />
              आध्यात्मिक विरासत

            </h3>

            <p className="mt-8 text-lg leading-8 text-brand-brown/75">

              परम पूज्य <strong>स्वामी कल्याण देव जी महाराज</strong> द्वारा
              स्थापित श्री शुकदेव आश्रम केवल एक आश्रम नहीं,
              बल्कि सेवा, साधना, संस्कार और सनातन संस्कृति
              का जीवंत केन्द्र है।

            </p>

            <p className="mt-6 text-lg leading-8 text-brand-brown/75">

              यहाँ प्रतिदिन श्रीमद्भागवत कथा, गौ सेवा,
              गुरुकुल परम्परा, अन्नदान तथा विविध धार्मिक
              एवं सामाजिक गतिविधियों के माध्यम से भारतीय
              संस्कृति को जीवंत रखा जा रहा है।

            </p>

            <ButtonLink
              href="/about-ashram"
              variant="link"
              className="mt-10 p-0 h-auto"
            >
              आश्रम के बारे में जानें →
            </ButtonLink>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-brand-gold/15 bg-brand-sand/30 p-8">

            <h4 className="font-heading text-2xl text-brand-brown">

              विरासत की विशेषताएँ

            </h4>

            <div className="mt-8 space-y-5">

              {highlights.map(({ icon: Icon, text }) => (

                <div
                  key={text}
                  className="flex items-start gap-4"
                >

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">

                    <Icon className="h-4 w-4 text-brand-primary" />

                  </span>

                  <p className="mt-1.5 leading-7 text-brand-brown/80">

                    {text}

                  </p>

                </div>

              ))}

            </div>

            {/* Stats */}

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-brand-gold/15 pt-6">

              {stats.map((stat) => (

                <div key={stat.label} className="text-center">

                  <p className="font-heading text-xl text-brand-primary md:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[11px] uppercase tracking-widest text-brand-brown/60">
                    {stat.label}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}
