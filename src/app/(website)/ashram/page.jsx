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
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Quote,
} from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";

/* =========================================================
   DUMMY IMAGES — Replace with actual production paths
========================================================= */
const IMG = {
  hero: "https://picsum.photos/seed/ashram-hero/1600/700",
  story: "https://picsum.photos/seed/ashram-story/700/500",
  founder: "https://picsum.photos/seed/founder/200/200",
  pithadhiswar: "https://picsum.photos/seed/pithadhiswar/300/300",
  vatvriksh: "https://picsum.photos/seed/vatvriksh/700/500",
  gallery: [
    "https://picsum.photos/seed/gallery-1/600/600",
    "https://picsum.photos/seed/gallery-2/600/600",
    "https://picsum.photos/seed/gallery-3/600/600",
    "https://picsum.photos/seed/gallery-4/600/600",
  ],
  lineage: [
    { name: "श्री शुकदेव जी", role: "प्रथम कथाव्यास", img: "https://picsum.photos/seed/guru-1/160/160" },
    { name: "महर्षि परंपरा", role: "अखंड साधन धारा", img: "https://picsum.photos/seed/guru-2/160/160" },
    { name: "स्वामी कल्याणदेव जी", role: "संस्थापक", img: "https://picsum.photos/seed/guru-3/160/160" },
    { name: "वर्तमान पीठाधीश्वर", role: "संरक्षक व मार्गदर्शक", img: "https://picsum.photos/seed/guru-4/160/160", current: true },
  ],
  katha: "https://picsum.photos/seed/bhagwat-katha/900/650",
  acharya: [
    { name: "[आचार्य नाम]", tag: "भागवताचार्य" },
    { name: "[आचार्य नाम]", tag: "कथावाचक" },
    { name: "[आचार्य नाम]", tag: "भागवताचार्य" },
  ],
};

/* =========================================================
   1. HERO SECTION
========================================================= */
function AboutHero() {
  return (
    <Section className="relative flex min-h-[60vh] items-end overflow-hidden p-0">
      <div className="absolute inset-0 z-0">
        <Image
          src={IMG.hero}
          alt="श्री शुकदेव आश्रम परिसर"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-black/30" />
      </div>

      <Container className="relative z-10 pb-16 pt-32 text-center">
<div
  className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-brand-gold/30
    bg-black/25
    px-5
    py-2
    backdrop-blur-md
  "
>
  <Sparkles className="h-4 w-4 text-brand-gold" />

  <span className="text-xs  tracking-[0.25em] text-white uppercase">
    प्राचीन श्रीमद्भागवत पीठ
  </span>
</div>

        <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          श्री शुकदेव आश्रम
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm  tracking-[0.18em] text-brand-gold uppercase md:text-base">
          श्री शुकदेव आश्रम स्वामी कल्याणदेव सेवा ट्रस्ट
        </p>
      </Container>
    </Section>
  );
}

/* =========================================================
   2. INTRO SECTION
========================================================= */
function AboutIntro() {
  return (
    <Section className="py-20 md:py-28">
      <Container className="max-w-4xl text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-brand-gold uppercase">
          परिचय
        </span>
        <h2 className="mt-3 font-heading text-2xl font-bold text-neutral-900 md:text-3xl">
          पावन साधना एवं भागवत ज्ञान की अमर स्थली
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-neutral-600 md:text-xl md:leading-loose">
          शुकतीर्थ में स्थित <strong className="font-semibold text-neutral-900">श्री शुकदेव आश्रम</strong> एक ऐसा पावन तीर्थ है जहाँ
          भागवत ज्ञान की धारा सदियों से अखंड रूप से प्रवाहित हो रही है।
          श्री शुकदेव आश्रम स्वामी कल्याणदेव सेवा ट्रस्ट के संरक्षण में यह
          आश्रम आज भी <span className="text-brand-gold font-medium">सेवा, साधना और संस्कार</span> के उच्च मूल्यों को जीवंत रखे हुए है।
        </p>
      </Container>
    </Section>
  );
}

/* =========================================================
   3. OUR STORY
========================================================= */
function AboutStory() {
  return (
    <Section className="bg-neutral-50 py-20 md:py-28 border-y border-neutral-200/60">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
                हमारी कहानी
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
                आस्था एवं तपस्या की अखंड यात्रा
              </h2>
            </div>

            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              मान्यता है कि यही वह पावन भूमि है जहाँ महर्षि शुकदेव जी ने
              राजा परीक्षित को श्रीमद्भागवत कथा का अमर श्रवण कराया था। इसी
              पवित्र स्मृति को जीवंत रखते हुए परम पूज्य स्वामी कल्याणदेव जी महाराज ने आश्रम
              की आधारशिला रखी।
            </p>

            <p className="text-base leading-relaxed text-neutral-600">
              आज यह आश्रम एक संगठित ट्रस्ट के रूप में अध्यात्म, धर्म-प्रचार, पर्यावरण और मानव सेवा के विशाल प्रकल्पों को निरंतर आगे बढ़ा रहा है।
            </p>

            {/* Founder Card */}
            <div className="mt-8 flex items-center gap-5 rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm transition-all hover:shadow-md">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-gold/40">
                <Image
                  src={IMG.founder}
                  alt="स्वामी कल्याणदेव जी"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-neutral-900 text-lg">
                  स्वामी कल्याणदेव जी महाराज
                </h3>
                <p className="text-xs font-medium text-brand-gold tracking-wide uppercase">
                  संस्थापक एवं भारत रत्न सम्मानित
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl lg:aspect-square">
            <Image
              src={IMG.story}
              alt="आश्रम का ऐतिहासिक दृश्य"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   4. CURRENT PITHADHISWAR
========================================================= */
function AboutPithadhiswar() {
  return (
    <Section className="relative overflow-hidden bg-neutral-950 py-24 text-white">
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[140px]" />

      <Container className="relative z-10 max-w-3xl text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-brand-gold uppercase">
          वर्तमान पीठाधीश्वर
        </span>

        <div className="relative mx-auto mt-8 h-32 w-32 overflow-hidden rounded-full ring-4 ring-brand-gold/50 shadow-2xl transition-transform hover:scale-105">
          <Image
            src={IMG.pithadhiswar}
            alt="वर्तमान पीठाधीश्वर"
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>

        <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
          [पूज्य स्वामी जी का नाम]
        </h2>
        <p className="mt-1 text-sm font-medium tracking-wider text-brand-gold/90 uppercase">
          पीठाधीश्वर • श्री शुकदेव आश्रम
        </p>

        <div className="relative mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md">
          <Quote className="mx-auto h-8 w-8 text-brand-gold/40 mb-3" />
          <p className="font-heading text-lg italic leading-relaxed text-neutral-200 md:text-xl">
            &ldquo;भागवत कथा केवल एक ग्रंथ नहीं, अपितु जीवन जीने की कला और ईश्वर तक पहुँचने का सबसे सहज मार्ग है। आश्रम का ध्येय हर प्राणी में सेवा भाव जगाना है।&rdquo;
          </p>
        </div>

        <div className="mt-10">
          <ButtonLink href="/about/pithadhiswar" className="inline-flex items-center gap-2">
            पूरा जीवन परिचय पढ़ें <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   5. GURU PARAMPARA (LINEAGE)
========================================================= */
function AboutLineage() {
  return (
    <Section className="py-20 md:py-28">
      <Container>
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
            गुरु परंपरा
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
            अखंड आध्यात्मिक वंशावली
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
          {IMG.lineage.map((item) => (
            <div key={item.name} className="flex flex-col items-center text-center group">
              <div
                className={`relative h-24 w-24 overflow-hidden rounded-full transition-all duration-300 md:h-28 md:w-28 ${
                  item.current
                    ? "ring-4 ring-brand-gold shadow-lg scale-105"
                    : "ring-2 ring-neutral-200 group-hover:ring-brand-gold/60"
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="112px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3
                className={`mt-4 font-heading font-semibold text-base md:text-lg ${
                  item.current ? "text-brand-gold" : "text-neutral-900"
                }`}
              >
                {item.name}
              </h3>
              <p className="mt-1 text-xs text-neutral-500">{item.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   6. PHILOSOPHY
========================================================= */
function AboutPhilosophy() {
  const pillars = [
    {
      icon: Heart,
      title: "सेवा",
      desc: "निःस्वार्थ भाव से गौसेवा, अन्नक्षेत्र और समाज के वंचित वर्गों की सेवा।",
    },
    {
      icon: Flame,
      title: "साधना",
      desc: "नियमित सत्संग, जप, संकीर्तन और ध्यान के माध्यम से आत्म-कल्याण।",
    },
    {
      icon: BookOpen,
      title: "संस्कार",
      desc: "सनातन संस्कृति, वैदिक ज्ञान और नैतिक मूल्यों का भावी पीढ़ी में सिंचन।",
    },
  ];

  return (
    <Section className="bg-neutral-50 py-20 md:py-28 border-y border-neutral-200/60">
      <Container className="max-w-5xl text-center">
        <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
          हमारा दर्शन
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
          सेवा • साधना • संस्कार
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
          आश्रम की आधारशिला इन तीन मूल सिद्धांतों पर टिकी है। हमारा अटूट विश्वास है कि भक्ति सेवा से सिद्ध होती है और जीवन संस्कारों से महान बनता है।
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-brand-gold/40"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold transition-colors group-hover:bg-brand-gold group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-neutral-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
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
    <Section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl lg:order-2">
            <Image
              src={IMG.vatvriksh}
              alt="प्राचीन वटवृक्ष"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="space-y-6 lg:order-1">
            <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
              दिव्य विरासत
            </span>
            <h2 className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              5000+ वर्षों का साक्षी अक्षय वटवृक्ष
            </h2>
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              श्रीमद्भागवत महापुराण के अनुसार, यह पावन वटवृक्ष उस दिव्य क्षण का प्रत्यक्ष साक्षी है जब महर्षि शुकदेव जी ने राजा परीक्षित को मोक्षदायिनी भागवत कथा सुनाई थी।
            </p>
            <p className="text-base leading-relaxed text-neutral-600">
              यह विशाल वटवृक्ष आज भी हरा-भरा है और यहाँ आने वाले श्रद्धालुओं को असीम शांति, सकारात्मक ऊर्जा और आध्यात्मिक चेतना की अनुभूति कराता है।
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
      desc: "विश्व की प्रथम श्रीमद्भागवत कथा का ऐतिहासिक स्थल।",
    },
    {
      icon: TreePine,
      title: "अक्षय वटवृक्ष",
      desc: "5000 वर्ष प्राचीन वटवृक्ष जो द्वापर युग का साक्षी माना जाता है।",
    },
    {
      icon: CalendarDays,
      title: "अखंड कथा अनुष्ठान",
      desc: "वर्षभर आयोजित होने वाले भव्य कथा एवं सत्संग महोत्सव।",
    },
    {
      icon: PawPrint,
      title: "सुरभि गौशाला",
      desc: "सैकड़ों गौवंश की समर्पित भाव से सेवा एवं संरक्षण।",
    },
    {
      icon: UtensilsCrossed,
      title: "नित्य अन्नक्षेत्र",
      desc: "प्रतिदिन हजारों दर्शनार्थियों एवं साधुओं के लिए नि:शुल्क भोजन प्रसाद।",
    },
    {
      icon: Users,
      title: "अविच्छिन्न गुरु परंपरा",
      desc: "महर्षि शुकदेव से लेकर वर्तमान पीठाधीश्वर तक निरंतर ज्ञान-धारा।",
    },
  ];

  return (
    <Section className="relative overflow-hidden bg-neutral-950 py-24 text-white">
      <Container className="relative z-10">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
            मुख्य आकर्षण
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
            आश्रम की अलौकिक प्रसिद्धि के कारण
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-brand-gold/40 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-8 w-8 text-brand-gold" />
                <span className="font-heading text-xs font-bold text-white/30 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
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
   8b. DHARMIK AAYOJAN
========================================================= */
function AboutDharmikAayojan() {
  return (
    <Section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={IMG.katha}
              alt="भागवत कथा आयोजन"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <p className="flex items-center gap-2 text-sm font-medium text-white">
                <Mic2 className="h-4 w-4 text-brand-gold" />
                श्रीमद्भागवत कथा ज्ञान यज्ञ, आश्रम प्रांगण
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
              धार्मिक आयोजन
            </span>
            <h2 className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              कथा एवं धार्मिक अनुष्ठानों का केंद्र
            </h2>
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              भागवत की मूल उद्गम स्थली होने के कारण देश-विदेश के मूर्धन्य विद्वान एवं पूज्य भागवताचार्य यहाँ पधारकर कथा वाचन को परम सौभाग्य मानते हैं।
            </p>
            <p className="text-base leading-relaxed text-neutral-600">
              वर्षभर यहाँ भागवत सप्ताह, नवाह्न परायण, एवं विभिन्न आध्यात्मिक महोत्सव आयोजित होते रहते हैं।
            </p>

            <div className="pt-2">
              <ButtonLink href="/events" className="inline-flex items-center gap-2">
                आगामी कार्यक्रम देखें <ChevronRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Featured Acharyas */}
        <div className="mt-20">
          <h3 className="text-center font-heading text-xl font-bold text-neutral-900 md:text-2xl">
            आश्रम में पधारे प्रमुख कथाव्यास
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {IMG.acharya.map((a, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xl mb-4">
                    {a.name[1] || "आ"}
                  </div>
                  <h4 className="font-heading font-bold text-neutral-900 text-lg">
                    {a.name}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-brand-gold uppercase tracking-wider">
                    {a.tag}
                  </p>
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
    <Section className="bg-neutral-50 py-20 md:py-28 border-t border-neutral-200/60">
      <Container>
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
            गैलरी
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
            आश्रम की पावन झलकीयॉं
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {IMG.gallery.map((src, i) => (
            <div
              key={src}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-200 shadow-sm"
            >
              <Image
                src={src}
                alt={`आश्रम गैलरी छवि ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   10. TRUST INFO & CTA
========================================================= */
function AboutCta() {
  return (
    <Section className="py-20 md:py-28">
      <Container className="max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-3 text-xs sm:text-sm text-neutral-600 shadow-sm">
          <ShieldCheck className="h-5 w-5 text-brand-gold shrink-0" />
          <span>
            <strong className="text-neutral-900">श्री शुकदेव आश्रम स्वामी कल्याणदेव सेवा ट्रस्ट</strong> — पंजीकृत धार्मिक एवं चैरिटेबल ट्रस्ट
          </span>
        </div>

        <h2 className="mt-8 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
          आश्रम दर्शन एवं यात्रा की योजना बनाएं
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          शुकतीर्थ (मुजफ्फरनगर, उत्तर प्रदेश) में स्थित आश्रम में आपका हार्दिक स्वागत है।
        </p>

        <div className="mt-8">
          <ButtonLink href="/visit" className="inline-flex items-center gap-2 text-base px-8 py-3.5">
            दर्शन का समय एवं मार्ग देखें <ArrowRight className="h-5 w-5" />
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   PAGE EXPORT
========================================================= */
export default function AshramAboutPage() {
  return (
    <main className="bg-white text-neutral-800 antialiased selection:bg-brand-gold/20 selection:text-brand-gold">
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
    </main>
  );
}