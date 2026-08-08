import Image from "next/image";
import Link from "next/link";
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
  ShieldCheck,
  Quote,
  Landmark,
} from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";

export const metadata = {
  title: "आश्रम परिचय | श्री शुकदेव आश्रम",
  description:
    "श्री शुकदेव आश्रम, शुकतीर्थ का परिचय — इतिहास, गुरु परम्परा, दर्शन, अक्षय वटवृक्ष एवं सेवा-कार्य।",
};

/* =========================================================
   1. HERO SECTION
========================================================= */
function AboutHero() {
  return (
    <Section className="relative flex min-h-[65vh] items-end overflow-hidden p-0 lg:min-h-[75vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/home/shri-shukdev-ashram-muzaffarnagar.webp"
          alt="श्री शुकदेव आश्रम परिसर"
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
            प्राचीन श्रीमद्भागवत पीठ
          </span>
        </div>

        <h1 className="mt-6 font-heading text-4xl tracking-tight text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl lg:text-7xl">
          श्री शुकदेव आश्रम
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm tracking-[0.18em] text-brand-gold uppercase [text-shadow:0_1px_10px_rgba(0,0,0,0.6)] md:text-base">
          श्री शुकदेव आश्रम स्वामी कल्याणदेव सेवा ट्रस्ट
        </p>
      </Container>
    </Section>
  );
}

/* =========================================================
   1b. STATS STRIP
========================================================= */
function AboutStats() {
  const stats = [
    { value: "5000+", label: "वर्ष परम्परा" },
    { value: "2", label: "गुरु परम्परा" },
    { value: "300+", label: "सेवा संस्थान" },
    { value: "1", label: "अक्षय वटवृक्ष" },
  ];

  return (
    <div className="relative z-20 -mt-16 md:-mt-20">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-brand-border bg-brand-border shadow-xl md:grid-cols-4">
          {stats.map((stat) => (
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
   2. INTRO SECTION
========================================================= */
function AboutIntro() {
  return (
    <Section className="py-20 md:py-28">
      <Container className="max-w-4xl text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-brand-primary uppercase">
          परिचय
        </span>
        <h2 className="mt-3 font-heading text-2xl text-brand-brown md:text-3xl">
          पावन साधना एवं भागवत ज्ञान की अमर स्थली
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-brand-brown/70 md:text-xl md:leading-loose">
          शुकतीर्थ में स्थित <strong className="font-semibold text-brand-brown">श्री शुकदेव आश्रम</strong> एक ऐसा पावन तीर्थ है जहाँ
          भागवत ज्ञान की धारा सदियों से अखंड रूप से प्रवाहित हो रही है।
          श्री शुकदेव आश्रम स्वामी कल्याणदेव सेवा ट्रस्ट के संरक्षण में यह
          आश्रम आज भी <span className="font-medium text-brand-primary">सेवा, साधना और संस्कार</span> के उच्च मूल्यों को जीवंत रखे हुए है।
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
    <Section className="border-y border-brand-border/60 bg-brand-sand/20 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
                हमारी कहानी
              </span>
              <h2 className="mt-2 font-heading text-3xl text-brand-brown md:text-4xl">
                आस्था एवं तपस्या की अखंड यात्रा
              </h2>
            </div>

            <p className="text-base leading-relaxed text-brand-brown/70 md:text-lg">
              मान्यता है कि यही वह पावन भूमि है जहाँ महर्षि शुकदेव जी ने
              राजा परीक्षित को श्रीमद्भागवत कथा का अमर श्रवण कराया था। इसी
              पवित्र स्मृति को जीवंत रखते हुए परम पूज्य स्वामी कल्याण देव जी महाराज ने आश्रम
              की आधारशिला रखी।
            </p>

            <p className="text-base leading-relaxed text-brand-brown/70">
              आज यह आश्रम एक संगठित ट्रस्ट के रूप में अध्यात्म, धर्म-प्रचार, पर्यावरण और मानव सेवा के विशाल प्रकल्पों को निरंतर आगे बढ़ा रहा है।
            </p>

            {/* Founder Card */}
            <Link
              href="/guru-parampara/swami-kalyan-dev"
              className="mt-8 flex items-center gap-5 rounded-2xl border border-brand-gold/15 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-md"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 ring-2 ring-brand-gold/30">
                <Landmark className="h-7 w-7 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-brand-brown">
                  स्वामी कल्याण देव जी महाराज
                </h3>
                <p className="text-xs font-medium tracking-wide text-brand-primary uppercase">
                  संस्थापक • पद्म भूषण सम्मानित
                </p>
              </div>
            </Link>
          </div>

          <div className="group relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl lg:aspect-square">
            {/* TEMP: swap for real photo */}
            <Image
              src="/images/home/gurukul.jpg"
              alt="आश्रम की परम्परा"
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
   4. CURRENT PITHADHISWAR
========================================================= */
function AboutPithadhiswar() {
  return (
    <Section className="relative overflow-hidden bg-brand-primary py-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-[140px]" />

      <Container className="relative z-10 max-w-3xl text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-brand-gold uppercase">
          वर्तमान पीठाधीश्वर
        </span>

        <div className="relative mx-auto mt-8 h-32 w-32 overflow-hidden rounded-full shadow-2xl ring-4 ring-brand-gold/50">
          <Image
            src="/images/home/swami-omanand.webp"
            alt="स्वामी ओमानन्द जी महाराज"
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>

        <h2 className="mt-6 font-heading text-3xl tracking-tight text-white md:text-4xl">
          परम पूज्य स्वामी ओमानन्द जी महाराज
        </h2>
        <p className="mt-1 text-sm font-medium tracking-wider text-brand-gold/90 uppercase">
          पीठाधीश्वर • श्री शुकदेव आश्रम • 2004 – वर्तमान
        </p>

        <div className="relative mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/3 p-8 backdrop-blur-md">
          <Quote className="mx-auto mb-3 h-8 w-8 text-brand-gold/40" />
          <p className="font-heading text-lg italic leading-relaxed text-white/90 md:text-xl">
            &ldquo;गुरुदेव की साधना ने शुकतीर्थ धाम को जाग्रत कर उसे
            अंतरराष्ट्रीय पहचान एवं विश्व-कल्याण के प्रमुख केंद्र के रूप
            में स्थापित किया।&rdquo;
          </p>
        </div>

        <div className="mt-10">
          <ButtonLink
            href="/guru-parampara/swami-omanand"
            variant="gold"
            className="inline-flex items-center gap-2"
            endIcon={<ArrowRight className="h-4 w-4" />}
          >
            पूरा जीवन परिचय पढ़ें
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
  const lineage = [
    { icon: BookOpen, name: "श्री शुकदेव जी", role: "आदि कथाव्यास" },
    { icon: Flame, name: "गुरु परम्परा", role: "अखंड ज्ञान-धारा" },
    {
      icon: Landmark,
      name: "स्वामी कल्याण देव जी",
      role: "संस्थापक",
      href: "/guru-parampara/swami-kalyan-dev",
    },
    {
      image: "/images/home/swami-omanand.webp",
      name: "स्वामी ओमानन्द जी",
      role: "वर्तमान पीठाधीश्वर",
      current: true,
      href: "/guru-parampara/swami-omanand",
    },
  ];

  return (
    <Section className="py-20 md:py-28">
      <Container>
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
            गुरु परंपरा
          </span>
          <h2 className="mt-3 font-heading text-3xl text-brand-brown md:text-4xl">
            अखंड आध्यात्मिक वंशावली
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
          {lineage.map((item) => {
            const content = (
              <div className="group flex flex-col items-center text-center">
                <div
                  className={`relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full transition-all duration-300 md:h-28 md:w-28 ${
                    item.current
                      ? "scale-105 bg-brand-gold/10 shadow-lg ring-4 ring-brand-gold"
                      : "bg-brand-gold/10 ring-2 ring-brand-border group-hover:ring-brand-gold/60"
                  }`}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <item.icon className="h-9 w-9 text-brand-primary" />
                  )}
                </div>
                <h3
                  className={`mt-4 font-heading text-base md:text-lg ${
                    item.current ? "text-brand-primary" : "text-brand-brown"
                  }`}
                >
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-brand-brown/60">{item.role}</p>
              </div>
            );

            return item.href ? (
              <Link key={item.name} href={item.href}>
                {content}
              </Link>
            ) : (
              <div key={item.name}>{content}</div>
            );
          })}
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
    <Section className="border-y border-brand-border/60 bg-brand-sand/20 py-20 md:py-28">
      <Container className="max-w-5xl text-center">
        <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
          हमारा दर्शन
        </span>
        <h2 className="mt-3 font-heading text-3xl text-brand-brown md:text-4xl">
          सेवा • साधना • संस्कार
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-brown/70">
          आश्रम की आधारशिला इन तीन मूल सिद्धांतों पर टिकी है। हमारा अटूट विश्वास है कि भक्ति सेवा से सिद्ध होती है और जीवन संस्कारों से महान बनता है।
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-brand-border/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-brand-gold/40"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-primary transition-colors group-hover:bg-brand-gold group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-heading text-xl text-brand-brown">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-brown/70">
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
          <div className="group relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl lg:order-2">
            {/* TEMP: swap for real photo */}
            <Image
              src="/images/home/tree.jpg"
              alt="प्राचीन वटवृक्ष"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6 lg:order-1">
            <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
              दिव्य विरासत
            </span>
            <h2 className="font-heading text-3xl text-brand-brown md:text-4xl">
              5000+ वर्षों का साक्षी अक्षय वटवृक्ष
            </h2>
            <p className="text-base leading-relaxed text-brand-brown/70 md:text-lg">
              श्रीमद्भागवत महापुराण के अनुसार, यह पावन वटवृक्ष उस दिव्य क्षण का प्रत्यक्ष साक्षी है जब महर्षि शुकदेव जी ने राजा परीक्षित को मोक्षदायिनी भागवत कथा सुनाई थी।
            </p>
            <p className="text-base leading-relaxed text-brand-brown/70">
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
      desc: "मान्यतानुसार यहीं महर्षि शुकदेव जी ने राजा परीक्षित को कथा सुनाई थी।",
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
      title: "गौशाला एवं गौसेवा",
      desc: "गौवंश की समर्पित भाव से सेवा एवं संरक्षण।",
    },
    {
      icon: UtensilsCrossed,
      title: "नित्य अन्नक्षेत्र",
      desc: "प्रतिदिन दर्शनार्थियों एवं साधुओं के लिए नि:शुल्क भोजन प्रसाद।",
    },
    {
      icon: Users,
      title: "अविच्छिन्न गुरु परंपरा",
      desc: "महर्षि शुकदेव से लेकर वर्तमान पीठाधीश्वर तक निरंतर ज्ञान-धारा।",
    },
  ];

  return (
    <Section className="relative overflow-hidden bg-brand-primary py-24 text-white">
      <Container className="relative z-10">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
            मुख्य आकर्षण
          </span>
          <h2 className="mt-3 font-heading text-3xl text-white md:text-4xl">
            आश्रम की अलौकिक प्रसिद्धि के कारण
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-sm transition-all duration-300 hover:border-brand-gold/40 hover:bg-white/6"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-8 w-8 text-brand-gold" />
                <span className="font-heading text-xs font-bold text-white/30 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
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
   9. DHARMIK AAYOJAN
========================================================= */
function AboutDharmikAayojan() {
  return (
    <Section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="group relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/home/bhagwat-katha.jpg"
              alt="भागवत कथा आयोजन"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <p className="flex items-center gap-2 text-sm font-medium text-white">
                <Mic2 className="h-4 w-4 text-brand-gold" />
                श्रीमद्भागवत कथा ज्ञान यज्ञ, आश्रम प्रांगण
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
              धार्मिक आयोजन
            </span>
            <h2 className="font-heading text-3xl text-brand-brown md:text-4xl">
              कथा एवं धार्मिक अनुष्ठानों का केंद्र
            </h2>
            <p className="text-base leading-relaxed text-brand-brown/70 md:text-lg">
              भागवत की मूल उद्गम स्थली होने के कारण देश-विदेश के विद्वान एवं भागवताचार्य यहाँ पधारकर कथा वाचन को परम सौभाग्य मानते हैं।
            </p>
            <p className="text-base leading-relaxed text-brand-brown/70">
              वर्षभर यहाँ भागवत सप्ताह, नवाह्न परायण, एवं विभिन्न आध्यात्मिक महोत्सव आयोजित होते रहते हैं — जिनमें स्वामी कल्याण देव जी की पुण्यतिथि (14 जुलाई) पर आयोजित होने वाली सप्ताहव्यापी भागवत कथा प्रमुख है।
            </p>

            <div className="pt-2">
              <ButtonLink
                href="/#services"
                className="inline-flex items-center gap-2"
                endIcon={<ArrowRight className="h-4 w-4" />}
              >
                आश्रम की सेवाएँ देखें
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================
   10. GALLERY
========================================================= */
function AboutGallery() {
  const gallery = [
    { src: "/images/home/bhagwat-katha.jpg", alt: "श्रीमद्भागवत कथा" },
    { src: "/images/home/gau-seva.jpg", alt: "गौ संरक्षण" },
    { src: "/images/home/gurukul.jpg", alt: "गुरुकुल" },
    { src: "/images/home/annadan.jpg", alt: "अन्नदान" },
    { src: "/images/home/tree.jpg", alt: "वृक्षारोपण" },
    { src: "/images/home/events.jpg", alt: "धार्मिक आयोजन" },
    { src: "/images/home/guru-parampara.webp", alt: "गुरु परम्परा" },
    { src: "/images/home/shri-shukdev-ashram-muzaffarnagar.webp", alt: "आश्रम परिसर" },
  ];

  return (
    <Section className="border-t border-brand-border/60 bg-brand-sand/20 py-20 md:py-28">
      <Container>
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
            गैलरी
          </span>
          <h2 className="mt-3 font-heading text-3xl text-brand-brown md:text-4xl">
            आश्रम की पावन झलकियाँ
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {gallery.map((item) => (
            <div
              key={item.src + item.alt}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-brand-sand shadow-sm"
            >
              <Image
                src={item.src}
                alt={item.alt}
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
   11. TRUST INFO & CTA
========================================================= */
function AboutCta() {
  return (
    <Section className="py-20 md:py-28">
      <Container className="max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-2xl border border-brand-border bg-brand-sand/40 px-5 py-3 text-xs text-brand-brown/80 shadow-sm sm:text-sm">
          <ShieldCheck className="h-5 w-5 shrink-0 text-brand-gold" />
          <span>
            <strong className="text-brand-brown">श्री शुकदेव आश्रम स्वामी कल्याणदेव सेवा ट्रस्ट</strong> — पंजीकृत धार्मिक एवं चैरिटेबल ट्रस्ट
          </span>
        </div>

        <h2 className="mt-8 font-heading text-3xl text-brand-brown md:text-4xl">
          आश्रम दर्शन एवं यात्रा की योजना बनाएं
        </h2>
        <p className="mt-4 text-base text-brand-brown/70">
          शुकतीर्थ (मुजफ्फरनगर, उत्तर प्रदेश) में स्थित आश्रम में आपका हार्दिक स्वागत है।
        </p>

        <div className="mt-8">
          <ButtonLink
            href="/#visit"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base"
            endIcon={<ArrowRight className="h-5 w-5" />}
          >
            दर्शन का समय एवं मार्ग देखें
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
    <main className="bg-white text-brand-brown antialiased selection:bg-brand-gold/20 selection:text-brand-primary">
      <AboutHero />
      <AboutStats />
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
