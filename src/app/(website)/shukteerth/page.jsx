import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  TreePine,
  Landmark,
  CalendarDays,
  MapPin,
  Quote,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";
import {
  shukteerthStats,
  shukteerthTemples,
  shukteerthTravel,
} from "@/data/shukteerth.data";

export const metadata = {
  title: "शुकतीर्थ | श्री शुकदेव आश्रम",
  description:
    "शुकतीर्थ (शुकरताल), मुज़फ्फरनगर — जहाँ महर्षि शुकदेव जी ने राजा परीक्षित को श्रीमद्भागवत महापुराण सुनाया। अक्षय वट, मंदिर, इतिहास एवं यात्रा जानकारी।",
};

/* =========================================================
   1. HERO
========================================================= */
function ShukteerthHero() {
  return (
    <Section className="relative flex min-h-[65vh] items-end overflow-hidden p-0 lg:min-h-[75vh]">
      <div className="absolute inset-0">
        {/* TEMP: swap for real photo of Akshay Vat */}
        <Image
          src="/images/home/tree.jpg"
          alt="शुकतीर्थ — अक्षय वट"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_60%,rgba(0,0,0,0.55),transparent_100%)]" />
      </div>

      <Container className="relative z-10 pb-16 pt-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-black/30 px-5 py-2 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-brand-gold" />
          <span className="text-xs uppercase tracking-[0.25em] text-white">
            पावन तीर्थ स्थल
          </span>
        </div>

        <h1 className="mt-6 font-heading text-4xl tracking-tight text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl lg:text-7xl">
          शुकतीर्थ
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm tracking-[0.18em] text-brand-gold uppercase [text-shadow:0_1px_10px_rgba(0,0,0,0.6)] md:text-base">
          शुकरताल, मुज़फ्फरनगर, उत्तर प्रदेश
        </p>
      </Container>
    </Section>
  );
}

/* =========================================================
   2. STATS STRIP
========================================================= */
function ShukteerthStats() {
  return (
    <div className="relative z-20 -mt-16 md:-mt-20">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-brand-border bg-brand-border shadow-xl md:grid-cols-4">
          {shukteerthStats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-8 text-center">
              <p className="font-heading text-2xl text-brand-primary md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-brand-brown/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

/* =========================================================
   3. INTRO
========================================================= */
function ShukteerthIntro() {
  return (
    <Section className="py-20 md:py-28">
      <Container className="max-w-4xl text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-brand-primary uppercase">
          परिचय
        </span>
        <h2 className="mt-3 font-heading text-2xl text-brand-brown md:text-3xl">
          गंगा तट पर बसा एक पावन तीर्थ
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-brand-brown/70 md:text-xl md:leading-loose">
          शुकतीर्थ (शुकरताल) उत्तर प्रदेश के मुज़फ्फरनगर जनपद में, पवित्र
          गंगा नदी के तट पर स्थित एक अत्यंत प्राचीन तीर्थ स्थल है, जो
          मुज़फ्फरनगर शहर से लगभग 28 किलोमीटर की दूरी पर है। यह उत्तर
          भारत के सबसे श्रद्धेय तीर्थस्थलों में से एक माना जाता है। यहीं
          स्थित है{" "}
          <Link
            href="/about-ashram"
            className="font-semibold text-brand-primary underline decoration-brand-gold/50 underline-offset-4 transition-colors hover:text-brand-gold"
          >
            श्री शुकदेव आश्रम
          </Link>
          , जो सेवा, साधना एवं संस्कार का जीवंत केंद्र है।
        </p>
      </Container>
    </Section>
  );
}

/* =========================================================
   4. THE STORY — SHUKDEV & PARIKSHIT
========================================================= */
function ShukteerthStory() {
  return (
    <Section className="border-y border-brand-border/60 bg-brand-sand/20 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
              दिव्य कथा
            </span>
            <h2 className="font-heading text-3xl text-brand-brown md:text-4xl">
              जहाँ श्रीमद्भागवत का प्रथम श्रवण हुआ
            </h2>
            <p className="text-base leading-relaxed text-brand-brown/70 md:text-lg">
              मान्यता है कि लगभग 5000 वर्ष पूर्व यहीं महर्षि शुकदेव जी
              (महर्षि वेदव्यास जी के पुत्र) ने राजा परीक्षित को
              श्रीमद्भागवत महापुराण का सात दिवसीय दिव्य श्रवण कराया था।
              राजा परीक्षित, जिन्हें सर्पदंश से मृत्यु का शाप मिला था,
              इस कथा-श्रवण से मोक्ष को प्राप्त हुए।
            </p>
            <p className="text-base leading-relaxed text-brand-brown/70">
              इसी पावन स्मृति को जीवंत रखते हुए यह स्थल आज भी लाखों
              श्रद्धालुओं के लिए भक्ति, ज्ञान एवं मोक्ष के अमृत का
              प्रतीक बना हुआ है।
            </p>

            <div className="rounded-2xl border-l-2 border-brand-gold/40 bg-white p-6">
              <Quote className="h-5 w-5 text-brand-gold/70" />
              <p className="mt-3 font-heading text-lg leading-relaxed text-brand-brown">
                &ldquo;यहीं से भक्ति, ज्ञान और मोक्ष का अमृत प्रवाहित
                हुआ।&rdquo;
              </p>
            </div>
          </div>

          <div className="group relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl lg:aspect-square">
            <Image
              src="/images/home/bhagwat-katha.jpg"
              alt="श्रीमद्भागवत कथा"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   5. AKSHAY VAT — signature landmark, full-bleed highlight
========================================================= */
function AkshayVat() {
  return (
    <Section className="relative overflow-hidden p-0">
      {/* TEMP: swap for real photo of Akshay Vat */}
      <div
        className="relative flex min-h-[85vh] items-end bg-cover bg-center bg-fixed motion-reduce:bg-scroll"
        style={{ backgroundImage: "url('/images/home/tree.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_65%,rgba(0,0,0,0.4),transparent_100%)]" />

        <Container className="relative z-10 pb-20 pt-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-black/30 px-5 py-2 backdrop-blur-md">
            <TreePine className="h-4 w-4 text-brand-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-white">
              दिव्य विरासत
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl leading-tight text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.6)] md:text-5xl">
            5000+ वर्षों का साक्षी अक्षय वट
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)] md:text-lg">
            एक पहाड़ी पर स्थित यह विशाल वटवृक्ष उस दिव्य क्षण का साक्षी
            माना जाता है जब महर्षि शुकदेव जी ने राजा परीक्षित को भागवत
            कथा सुनाई थी। इसकी शाखाएँ पहाड़ी के चारों ओर फैली हुई हैं।
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)] md:text-lg">
            श्रद्धालुओं की मान्यता है कि यह वृक्ष कभी अपने पत्ते नहीं
            त्यागता — इसीलिए इसे &lsquo;अक्षय&rsquo; (जो कभी क्षीण न
            हो) कहा जाता है।
          </p>

          <div className="mt-10 flex flex-wrap gap-10 border-t border-white/15 pt-8">
            <div>
              <p className="font-heading text-3xl text-brand-gold">150</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">
                फीट ऊँचाई
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl text-brand-gold">5000+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">
                वर्ष प्राचीन
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl text-brand-gold">अक्षय</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">
                कभी न झड़ने वाले पत्ते
              </p>
            </div>
          </div>
        </div>
        </Container>
      </div>
    </Section>
  );
}

/* =========================================================
   6. TEMPLES
========================================================= */
function ShukteerthTemples() {
  return (
    <Section className="border-y border-brand-border/60 bg-brand-sand/20 py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
            मंदिर एवं दर्शन
          </span>
          <h2 className="mt-3 font-heading text-3xl text-brand-brown md:text-4xl">
            शुकतीर्थ के प्रमुख मंदिर
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shukteerthTemples.map((temple) => (
            <div
              key={temple.name}
              className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-brand-border/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-brand-gold/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-primary transition-colors group-hover:bg-brand-gold group-hover:text-white">
                <Landmark className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-heading text-xl text-brand-brown">
                {temple.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-brown/70">
                {temple.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   7. PILGRIMAGE / MELA
========================================================= */
function ShukteerthMela() {
  return (
    <Section className="md:py-0 relative overflow-hidden p-0">
      {/* TEMP: swap for a real photo of the Kartik Purnima crowd at Shukteerth */}
      <div
        className="relative flex min-h-[70vh] items-center bg-cover bg-center bg-fixed motion-reduce:bg-scroll"
        style={{
          backgroundImage: "url('/images/home/bhagwat-katha.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-[140px]" />

        <Container className="relative z-10 mx-auto max-w-3xl py-24 text-center text-white">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/30 bg-black/30 backdrop-blur-md">
            <CalendarDays className="h-7 w-7 text-brand-gold" />
          </div>
          <span className="mt-6 block text-xs font-semibold tracking-[0.3em] text-brand-gold uppercase">
            वार्षिक मेला
          </span>
          <h2 className="mt-3 font-heading text-3xl text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.6)] md:text-5xl">
            कार्तिक पूर्णिमा स्नान
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
            प्रतिवर्ष कार्तिक मास (अक्टूबर–नवंबर) की पूर्णिमा को यहाँ लाखों
            श्रद्धालु पवित्र गंगा स्नान हेतु एकत्रित होते हैं। यह अवसर
            शुकतीर्थ के वार्षिक कैलेंडर का सबसे महत्वपूर्ण पर्व है।
          </p>
        </Container>
      </div>
    </Section>
  );
}

/* =========================================================
   8. HOW TO REACH
========================================================= */
function ShukteerthTravel() {
  return (
    <Section className="py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
            यात्रा जानकारी
          </span>
          <h2 className="mt-3 font-heading text-3xl text-brand-brown md:text-4xl">
            शुकतीर्थ कैसे पहुँचें
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {shukteerthTravel.map((item) => (
            <div
              key={item.mode}
              className="rounded-2xl border border-brand-gold/15 bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10">
                <MapPin className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg text-brand-brown">
                {item.mode}
              </h3>
              <p className="mt-2 text-sm leading-6 text-brand-brown/70">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <ButtonLink
            href="https://maps.google.com/?q=Shri+Shukdev+Ashram+Shukteerth"
            target="_blank"
            endIcon={<ArrowRight className="h-4 w-4" />}
          >
            Google Maps पर दिशा देखें
          </ButtonLink>

          <ButtonLink
            href="/about-ashram"
            variant="secondary"
            endIcon={<ArrowRight className="h-4 w-4" />}
          >
            श्री शुकदेव आश्रम देखें
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   PAGE EXPORT
========================================================= */
export default function ShukteerthPage() {
  return (
    <main className="bg-white text-brand-brown antialiased selection:bg-brand-gold/20 selection:text-brand-primary">
      <ShukteerthHero />
      <ShukteerthStats />
      <ShukteerthIntro />
      <ShukteerthStory />
      <AkshayVat />
      <ShukteerthTemples />
      <ShukteerthMela />
      <ShukteerthTravel />
    </main>
  );
}
