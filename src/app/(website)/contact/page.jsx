import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight, Sparkles } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "संपर्क करें | श्री शुकदेव आश्रम",
  description:
    "श्री शुकदेव आश्रम, शुकतीर्थ से संपर्क करें — पता, फ़ोन, ईमेल एवं दर्शन का समय।",
};

const contactCards = [
  {
    icon: MapPin,
    title: "पता",
    lines: [
      "श्री शुकदेव आश्रम, शुकतीर्थ बांगर",
      "शुकरताल, मुज़फ्फरनगर,",
      "उत्तर प्रदेश — 251316",
    ],
  },
  {
    icon: Phone,
    title: "फ़ोन",
    lines: ["+91 99174 88885"],
    href: "tel:+919917488885",
  },
  {
    icon: Mail,
    title: "ईमेल",
    lines: ["info@shukdevashram.org"],
    href: "mailto:info@shukdevashram.org",
  },
  {
    icon: Clock,
    title: "दर्शन समय",
    lines: ["प्रतिदिन प्रातः 5:00 बजे", "से रात्रि 9:00 बजे तक"],
  },
];

function ContactHero() {
  return (
    <Section className="relative flex min-h-[45vh] items-end overflow-hidden p-0 lg:min-h-[55vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/home/shri-shukdev-ashram-muzaffarnagar.webp"
          alt="श्री शुकदेव आश्रम"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_60%,rgba(0,0,0,0.55),transparent_100%)]" />
      </div>

      <Container className="relative z-10 pb-14 pt-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-black/30 px-5 py-2 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-brand-gold" />
          <span className="text-xs uppercase tracking-[0.25em] text-white">
            हम आपकी सेवा में हैं
          </span>
        </div>

        <h1 className="mt-6 font-heading text-4xl tracking-tight text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl">
          संपर्क करें
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-white/85 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
          यात्रा, आवास, दर्शन या सेवा से संबंधित किसी भी जानकारी के लिए
          हमसे जुड़ें।
        </p>
      </Container>
    </Section>
  );
}

function ContactInfo() {
  return (
    <Section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map(({ icon: Icon, title, lines, href }) => {
            const content = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10">
                  <Icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="mt-5 font-heading text-lg text-brand-brown">
                  {title}
                </h3>
                <div className="mt-2 text-sm leading-6 text-brand-brown/70">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </>
            );

            const cardClass =
              "rounded-2xl border border-brand-gold/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/30 hover:shadow-md";

            return href ? (
              <Link key={title} href={href} className={cardClass}>
                {content}
              </Link>
            ) : (
              <div key={title} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function ContactFormSection() {
  return (
    <Section className="border-y border-brand-border/60 bg-brand-sand/20 py-20 md:py-28">
      <Container className="max-w-2xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
            संदेश भेजें
          </span>
          <h2 className="mt-3 font-heading text-3xl text-brand-brown md:text-4xl">
            हमें लिखें
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-brown/70">
            नीचे दिया गया फॉर्म भरें — हमारी टीम शीघ्र ही आपसे संपर्क
            करेगी।
          </p>
        </div>

        <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-sm sm:p-10">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}

function ContactMapCta() {
  return (
    <Section className="py-20 md:py-28">
      <Container className="max-w-3xl text-center">
        <h2 className="font-heading text-3xl text-brand-brown md:text-4xl">
          आश्रम तक पहुँचने का मार्ग
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-brown/70">
          शुकतीर्थ, मुज़फ्फरनगर से मात्र 28 किलोमीटर की दूरी पर स्थित है।
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <ButtonLink
            href="https://maps.google.com/?q=Shri+Shukdev+Ashram+Shukteerth"
            target="_blank"
            endIcon={<ArrowRight className="h-4 w-4" />}
          >
            Google Maps पर दिशा देखें
          </ButtonLink>

          <ButtonLink
            href="/shukteerth"
            variant="secondary"
            endIcon={<ArrowRight className="h-4 w-4" />}
          >
            शुकतीर्थ के बारे में जानें
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-white text-brand-brown antialiased selection:bg-brand-gold/20 selection:text-brand-primary">
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactMapCta />
    </main>
  );
}
