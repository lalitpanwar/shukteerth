"use client";

import Image from "next/image";
import {
  Heart,
  Flame,
  BookOpen,
  ArrowRight,
  TreePine,
  CalendarDays,
  PawPrint,
  UtensilsCrossed,
  Users,
  Mic2,
} from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";

/* =========================================================
   DUMMY IMAGES — replace these with real assets under
   /public/images/ashram/... once available.
   Using picsum.photos as placeholders.
   NOTE: if you use next/image (as below), add picsum.photos
   to images.remotePatterns in next.config.js:

   images: {
     remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
   }
========================================================= */

const IMG = {
  hero: "https://picsum.photos/seed/ashram-hero/1600/700",
  story: "https://picsum.photos/seed/ashram-story/700/500",
  founder: "https://picsum.photos/seed/founder/200/200",
  pithadhiswar: "https://picsum.photos/seed/pithadhiswar/300/300",
  vatvriksh: "https://picsum.photos/seed/vatvriksh/700/500",
  gallery: [
    "https://picsum.photos/seed/gallery-1/400/400",
    "https://picsum.photos/seed/gallery-2/400/400",
    "https://picsum.photos/seed/gallery-3/400/400",
    "https://picsum.photos/seed/gallery-4/400/400",
  ],
  lineage: [
    "https://picsum.photos/seed/guru-1/120/120",
    "https://picsum.photos/seed/guru-2/120/120",
    "https://picsum.photos/seed/guru-3/120/120",
    "https://picsum.photos/seed/guru-4/120/120",
  ],
  katha: "https://picsum.photos/seed/bhagwat-katha/900/650",
  acharya: [
    "https://picsum.photos/seed/acharya-1/240/240",
    "https://picsum.photos/seed/acharya-2/240/240",
    "https://picsum.photos/seed/acharya-3/240/240",
  ],
};

/* =========================================================
   1. MINI HERO
========================================================= */

function AboutHero() {
  return (
    <Section className="relative flex min-h-[55vh] items-end overflow-hidden p-0">
      <div className="absolute inset-0">
        <Image
          src={IMG.hero}
          alt="श्री शुकदेव आश्रम परिसर"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
      </div>

      <Container className="relative z-10 pb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-white/70 uppercase">
          Home / About
        </p>
        <h1 className="mt-4 font-heading text-4xl text-white md:text-6xl">
          श्री शुकदेव आश्रम के बारे में
        </h1>
        <p className="mt-3 text-sm tracking-[0.15em] text-brand-gold uppercase">
          श्री शुकदेव आश्रम स्वामी कल्याणदेव सेवा ट्रस्ट
        </p>
      </Container>
    </Section>
  );
}

/* =========================================================
   2. INTRO PARAGRAPH
========================================================= */

function AboutIntro() {
  return (
    <Section className="py-16">
      <Container className="max-w-3xl text-center">
        <p className="text-xs font-medium tracking-[0.25em] text-brand-gold uppercase">
          परिचय
        </p>
        <p className="mt-5 text-lg leading-9 text-neutral-700 md:text-xl">
          शुकतीर्थ में स्थित श्री शुकदेव आश्रम एक ऐसा पावन स्थल है जहाँ
          भागवत ज्ञान की परम्परा सदियों से अखंड रूप से प्रवाहित हो रही है।
          श्री शुकदेव आश्रम स्वामी कल्याणदेव सेवा ट्रस्ट के संरक्षण में यह
          आश्रम आज भी सेवा, साधना और संस्कार के मूल्यों को जीवंत रखे हुए है।
        </p>
      </Container>
    </Section>
  );
}

/* =========================================================
   3. OUR STORY + FOUNDER
========================================================= */

function AboutStory() {
  return (
    <Section className="bg-neutral-50 py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-brand-gold uppercase">
              हमारी कहानी
            </p>
            <h2 className="mt-3 font-heading text-3xl text-neutral-900 md:text-4xl">
              आस्था की एक अखंड यात्रा
            </h2>
            <p className="mt-5 leading-8 text-neutral-600">
              मान्यता है कि यही वह पावन भूमि है जहाँ महर्षि शुकदेव जी ने
              राजा परीक्षित को श्रीमद्भागवत कथा का श्रवण कराया था। इसी
              स्मृति को जीवंत रखते हुए स्वामी कल्याणदेव जी महाराज ने आश्रम
              की स्थापना की, जो आज एक ट्रस्ट के रूप में सेवा, साधना और
              धर्म-प्रचार के कार्यों को आगे बढ़ा रहा है।
            </p>

            {/* Founder strip */}
            <div className="mt-8 flex items-center gap-4 border-t border-neutral-200 pt-6">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={IMG.founder}
                  alt="स्वामी कल्याणदेव जी"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-neutral-900">
                  स्वामी कल्याणदेव जी
                </p>
                <p className="text-sm text-neutral-500">संस्थापक</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={IMG.story}
              alt="आश्रम का ऐतिहासिक दृश्य"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   4. CURRENT PITHADHISWAR — featured
========================================================= */

function AboutPithadhiswar() {
  return (
    <Section className="bg-neutral-900 py-20">
      <Container className="max-w-2xl text-center">
        <p className="text-xs font-medium tracking-[0.25em] text-brand-gold uppercase">
          वर्तमान पीठाधीश्वर
        </p>

        <div className="relative mx-auto mt-8 h-28 w-28 overflow-hidden rounded-full ring-2 ring-brand-gold/40">
          <Image
            src={IMG.pithadhiswar}
            alt="वर्तमान पीठाधीश्वर"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="mt-6 font-heading text-3xl text-white">[नाम]</h2>
        <p className="mt-1 text-sm tracking-wide text-white/60">
          उपाधि / पदवी
        </p>

        <p className="mx-auto mt-6 max-w-lg font-heading text-lg italic leading-8 text-white/80">
          &ldquo;संक्षिप्त आशीर्वचन यहाँ आएगा — एक या दो पंक्तियों का
          संदेश।&rdquo;
        </p>

        <ButtonLink href="/about/pithadhiswar" className="mt-8">
          पूरा परिचय पढ़ें <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </Container>
    </Section>
  );
}

/* =========================================================
   5. GURU PARAMPARA — lineage strip
========================================================= */

function AboutLineage() {
  const lineage = [
    { name: "श्री शुकदेव जी", img: IMG.lineage[0] },
    { name: "गुरु परंपरा", img: IMG.lineage[1] },
    { name: "स्वामी कल्याणदेव जी", img: IMG.lineage[2] },
    { name: "वर्तमान", img: IMG.lineage[3], current: true },
  ];

  return (
    <Section className="py-20">
      <Container>
        <p className="text-center text-xs font-medium tracking-[0.25em] text-brand-gold uppercase">
          गुरु परंपरा
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl text-neutral-900">
          अखंड आध्यात्मिक वंशावली
        </h2>

        <div className="mt-12 flex items-center justify-between gap-2 overflow-x-auto pb-2">
          {lineage.map((g, i) => (
            <div key={g.name} className="flex items-center">
              <div className="flex w-24 shrink-0 flex-col items-center text-center">
                <div
                  className={`relative h-16 w-16 overflow-hidden rounded-full ${
                    g.current ? "ring-2 ring-brand-gold" : ""
                  }`}
                >
                  <Image src={g.img} alt={g.name} fill className="object-cover" />
                </div>
                <p
                  className={`mt-2 text-xs ${
                    g.current
                      ? "font-medium text-brand-gold"
                      : "text-neutral-500"
                  }`}
                >
                  {g.name}
                </p>
              </div>
              {i < lineage.length - 1 && (
                <div className="mx-2 h-px w-8 shrink-0 bg-neutral-300 md:w-16" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   6. PHILOSOPHY — Seva / Sadhna / Sanskar
========================================================= */

function AboutPhilosophy() {
  const pillars = [
    {
      icon: Heart,
      title: "सेवा",
      desc: "निःस्वार्थ भाव से गौसेवा, अन्नदान और जनकल्याण के कार्य।",
    },
    {
      icon: Flame,
      title: "साधना",
      desc: "नियमित सत्संग एवं आध्यात्मिक अभ्यास के माध्यम से आत्म-उन्नति।",
    },
    {
      icon: BookOpen,
      title: "संस्कार",
      desc: "सनातन परम्परा एवं मूल्यों का संरक्षण व नई पीढ़ी को हस्तांतरण।",
    },
  ];

  return (
    <Section className="bg-neutral-50 py-20">
      <Container className="max-w-3xl text-center">
        <p className="text-xs font-medium tracking-[0.25em] text-brand-gold uppercase">
          दर्शन
        </p>
        <h2 className="mt-3 font-heading text-3xl text-neutral-900 md:text-4xl">
          सेवा • साधना • संस्कार
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-600">
          आश्रम की आधारशिला इन तीन मूल सिद्धांतों पर टिकी है — हमारा मानना
          है कि सच्ची भक्ति निःस्वार्थ सेवा से प्रकट होती है, आत्म-कल्याण
          साधना से संभव है, और समाज का उत्थान संस्कारों के संरक्षण से होता है।
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100"
            >
              <Icon className="mx-auto h-6 w-6 text-brand-gold" />
              <h3 className="mt-4 font-heading text-lg text-neutral-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   7. HERITAGE
========================================================= */

function AboutHeritage() {
  return (
    <Section className="py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:order-2">
            <Image
              src={IMG.vatvriksh}
              alt="प्राचीन वटवृक्ष"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <p className="text-xs font-medium tracking-[0.25em] text-brand-gold uppercase">
              विरासत
            </p>
            <h2 className="mt-3 font-heading text-3xl text-neutral-900 md:text-4xl">
              5000+ वर्षों की परम्परा
            </h2>
            <p className="mt-5 leading-8 text-neutral-600">
              श्रीमद्भागवत महापुराण में उल्लेखित इस पावन भूमि पर स्थित
              प्राचीन वटवृक्ष उस काल का साक्षी माना जाता है जब यहाँ प्रथम
              भागवत कथा का श्रवण हुआ था। आज भी यह वृक्ष एवं आश्रम परिसर
              श्रद्धालुओं के लिए दिव्य ऊर्जा एवं आस्था का प्रतीक है।
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   8. WHY FAMOUS
========================================================= */

function AboutWhyFamous() {
  const points = [
    {
      icon: BookOpen,
      title: "भागवत कथा की जन्मस्थली",
      desc: "मान्यतानुसार यहीं शुकदेव जी ने राजा परीक्षित को कथा सुनाई थी।",
    },
    {
      icon: TreePine,
      title: "प्राचीन वटवृक्ष",
      desc: "हजारों वर्ष पुराना, प्रथम कथा-श्रवण का साक्षी।",
    },
    {
      icon: CalendarDays,
      title: "नियमित भागवत सप्ताह",
      desc: "वर्षभर आयोजित होने वाले कथा एवं सत्संग कार्यक्रम।",
    },
    {
      icon: PawPrint,
      title: "गौशाला एवं गौसेवा",
      desc: "सैकड़ों गौवंश की नियमित देखभाल एवं सेवा।",
    },
    {
      icon: UtensilsCrossed,
      title: "प्रतिदिन अन्नक्षेत्र",
      desc: "प्रतिदिन भंडारे में हजारों श्रद्धालुओं को भोजन।",
    },
    {
      icon: Users,
      title: "अखंड गुरु परंपरा",
      desc: "शुकदेव जी से वर्तमान पीठाधीश्वर तक निरंतर परंपरा।",
    },
  ];

  return (
    <Section className="relative overflow-hidden bg-neutral-900 py-20">
      {/* subtle glow accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-gold/10 blur-[120px]" />

      <Container className="relative">
        <p className="text-center text-xs font-medium tracking-[0.25em] text-brand-gold uppercase">
          पहचान
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl text-white md:text-4xl">
          आश्रम क्यों प्रसिद्ध है
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-gold/30 hover:bg-white/[0.06]"
            >
              <span className="font-heading text-sm text-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className="mt-4 h-6 w-6 text-brand-gold" />
              <h3 className="mt-4 font-heading text-lg text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   8b. DHARMIK AAYOJAN — Bhagwatacharya / religious events
========================================================= */

function AboutDharmikAayojan() {
  const acharyas = [
    { name: "[आचार्य नाम]", tag: "भागवताचार्य" },
    { name: "[आचार्य नाम]", tag: "कथावाचक" },
    { name: "[आचार्य नाम]", tag: "भागवताचार्य" },
  ];

  return (
    <Section className="py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={IMG.katha}
              alt="भागवत कथा आयोजन"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
              <p className="flex items-center gap-2 text-sm text-white/90">
                <Mic2 className="h-4 w-4 text-brand-gold" />
                श्रीमद्भागवत कथा, आश्रम प्रांगण
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-brand-gold uppercase">
              धार्मिक आयोजन
            </p>
            <h2 className="mt-3 font-heading text-3xl text-neutral-900 md:text-4xl">
              भागवत की जन्मस्थली पर कथा-वैभव
            </h2>
            <p className="mt-5 leading-8 text-neutral-600">
              श्री शुकदेव आश्रम भागवत कथा की जन्मस्थली माना जाता है, और
              इसी कारण देश के अनेक प्रतिष्ठित भागवताचार्य यहाँ पधार कर
              श्रीमद्भागवत कथा का वाचन करते हैं। वर्षभर भागवत सप्ताह,
              सत्संग एवं धार्मिक अनुष्ठानों का आयोजन होता है, जिनमें
              देश-विदेश से हजारों श्रद्धालु सम्मिलित होते हैं।
            </p>

            <ButtonLink href="/events" className="mt-8">
              आगामी आयोजन देखें <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>

        {/* Featured acharyas */}
        <div className="mt-16">
          <p className="text-sm font-medium text-neutral-500">
            आश्रम में पधारे प्रमुख भागवताचार्य
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {acharyas.map((a, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-neutral-100 shadow-sm"
              >
                <div className="relative aspect-square">
                  <Image
                    src={IMG.acharya[i]}
                    alt={a.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium text-neutral-900">{a.name}</p>
                  <p className="text-xs text-neutral-500">{a.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   9. GALLERY
========================================================= */

function AboutGallery() {
  return (
    <Section className="py-20">
      <Container>
        <p className="text-center text-xs font-medium tracking-[0.25em] text-brand-gold uppercase">
          गैलरी
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl text-neutral-900">
          आश्रम की झलकियाँ
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {IMG.gallery.map((src, i) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={`आश्रम गैलरी छवि ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   10. TRUST INFO + CTA
========================================================= */

function AboutCta() {
  return (
    <Section className="bg-neutral-50 py-20">
      <Container className="max-w-2xl text-center">
        <div className="rounded-xl border border-neutral-200 bg-white px-6 py-4 text-sm text-neutral-500">
          <span className="font-medium text-neutral-700">
            श्री शुकदेव आश्रम स्वामी कल्याणदेव सेवा ट्रस्ट
          </span>{" "}
          — रजि. नं. / पारदर्शिता विवरण यहाँ जोड़ें
        </div>

        <h2 className="mt-10 font-heading text-3xl text-neutral-900">
          दर्शन का समय • पता
        </h2>
        <ButtonLink href="/visit" className="mt-6">
          यात्रा की योजना बनाएं <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </Container>
    </Section>
  );
}

/* =========================================================
   PAGE EXPORT
========================================================= */

export default function AshramAboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutPithadhiswar />
      <AboutLineage />
      <AboutPhilosophy />
      <AboutHeritage />
      <AboutWhyFamous />
      <AboutDharmikAayojan />
      <AboutGallery />
      <AboutCta />
    </>
  );
}