"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,

  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube,  } from "react-icons/fa6";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#241B15] text-white">

      {/* ===========================
          Spiritual Banner
      =========================== */}

      <div className="relative h-[520px] overflow-hidden">

        {/* TEMP: swap for real photo */}
        <Image
          src="/images/home/shri-shukdev-ashram-muzaffarnagar.webp"
          alt="Shri Shukdev Ashram"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#241B15]" />

        <Container className="relative z-10 flex h-full items-center justify-center">

          <div className="max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur">
              🌸 श्री शुकदेव आश्रम
            </span>

            <h2 className="mt-8 font-heading text-4xl leading-tight text-white md:text-6xl">
              यत्र भागवत कथा प्रवहति,
              <br />
              तत्र स्वयं भगवान का निवास होता है।
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/80">
              आइए, इस दिव्य परम्परा का हिस्सा बनें और
              श्रीमद्भागवत कथा, सेवा एवं दर्शन के माध्यम से
              अपने जीवन को आध्यात्मिक प्रकाश से आलोकित करें।
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <ButtonLink
                href="/bhagwat-katha"
                className="rounded-full px-8 py-6"
              >
                कथा हेतु संपर्क करें
              </ButtonLink>

              <ButtonLink
                href="/donate"
                variant="outline"
                className="rounded-full border-white/30 px-8 py-6 text-white hover:bg-white hover:text-black"
              >
                सेवा में सहयोग करें
              </ButtonLink>

            </div>

          </div>

        </Container>

      </div>

      {/* Main Footer Start */}

      <Container className="py-20">
                {/* ==========================================
            Footer Grid
        =========================================== */}

        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">

          {/* ===================================
              Column 1
          ==================================== */}

          <div>

            <div className="flex items-center gap-3">
              <div className="size-14 shrink-0 rounded-full bg-brand-gold" />
              <div>
                <p className="font-heading text-xl font-semibold text-white">
                  Shri Shukdev Ashram
                </p>
                <p className="text-xs text-white/60">Shukteerth</p>
              </div>
            </div>

            <p className="mt-8 max-w-sm leading-8 text-white/70">
              श्री शुकदेव आश्रम, शुकतीर्थ की प्राचीन
              आध्यात्मिक परम्परा को समर्पित।
              कथा, सेवा, संस्कार एवं मानव कल्याण के
              माध्यम से समाज को आध्यात्मिक दिशा प्रदान
              करना ही हमारा उद्देश्य है।
            </p>

            {/* Social */}

            <div className="mt-10 flex gap-4">

              <Link
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  transition
                  hover:bg-brand-gold
                  hover:text-black
                "
              >
                <FaFacebookF className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  transition
                  hover:bg-brand-gold
                  hover:text-black
                "
              >
                <FaInstagram className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  transition
                  hover:bg-brand-gold
                  hover:text-black
                "
              >
                <FaYoutube className="h-5 w-5" />
              </Link>

            </div>

          </div>

          {/* ===================================
              Column 2
          ==================================== */}

          <div>

            <h3 className="font-heading text-2xl text-white">
              त्वरित लिंक
            </h3>

            <ul className="mt-8 space-y-5">

              <li><Link href="/">मुखपृष्ठ</Link></li>

              <li><Link href="/about">आश्रम परिचय</Link></li>

              <li><Link href="/guru-parampara">गुरु परम्परा</Link></li>

              <li><Link href="/ashram-life">आश्रम जीवन</Link></li>

              <li><Link href="/gallery">गैलरी</Link></li>

              <li><Link href="/contact">संपर्क</Link></li>

            </ul>

          </div>

          {/* ===================================
              Column 3
          ==================================== */}

          <div>

            <h3 className="font-heading text-2xl text-white">
              सेवाएँ
            </h3>

            <ul className="mt-8 space-y-5">

              <li><Link href="/bhagwat-katha">श्रीमद्भागवत कथा</Link></li>

              <li><Link href="/visit">शुकतीर्थ पधारें</Link></li>

              <li><Link href="/donate">दान एवं सेवा</Link></li>

              <li><Link href="/events">आयोजन</Link></li>

              <li><Link href="/blogs">आध्यात्मिक लेख</Link></li>

              <li><Link href="/faq">प्रश्नोत्तर</Link></li>

            </ul>

          </div>

          {/* ===================================
              Column 4
          ==================================== */}

          <div>

            <h3 className="font-heading text-2xl text-white">
              संपर्क करें
            </h3>

            <div className="mt-8 space-y-7">

              <div className="flex gap-4">

                <MapPin className="mt-1 h-5 w-5 text-brand-gold" />

                <p className="leading-8 text-white/70">
                  श्री शुकदेव आश्रम,
                  <br />
                  शुकतीर्थ (शुकताल),
                  <br />
                  मुज़फ्फरनगर,
                  उत्तर प्रदेश
                </p>

              </div>

              <div className="flex gap-4">

                <Phone className="mt-1 h-5 w-5 text-brand-gold" />

                <Link href="tel:+919999999999">
                  +91 99999 99999
                </Link>

              </div>

              <div className="flex gap-4">

                <Mail className="mt-1 h-5 w-5 text-brand-gold" />

                <Link href="mailto:info@shukdevashram.org">
                  info@shukdevashram.org
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-16 h-px bg-white/10" />
        {/* ==========================================
            Bottom Bar
        =========================================== */}

        <div className="flex flex-col gap-8 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div>

            <p className="text-sm leading-7 text-white/60">
              © {new Date().getFullYear()} श्री शुकदेव आश्रम, शुकतीर्थ।
              सर्वाधिकार सुरक्षित।
            </p>

            <p className="mt-2 text-sm text-white/40">
              5000+ वर्षों की आध्यात्मिक विरासत • श्रीमद्भागवत परम्परा
            </p>

          </div>

          {/* Center */}

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">

            <Link
              href="/privacy-policy"
              className="text-white/60 transition hover:text-brand-gold"
            >
              गोपनीयता नीति
            </Link>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <Link
              href="/terms"
              className="text-white/60 transition hover:text-brand-gold"
            >
              नियम एवं शर्तें
            </Link>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <Link
              href="/sitemap"
              className="text-white/60 transition hover:text-brand-gold"
            >
              साइटमैप
            </Link>

          </div>

          {/* Right */}

          <div className="flex items-center gap-3">

            <span className="text-sm text-white/50">
              विकसित किया गया
            </span>

            <Link
              href="https://betterokay.com"
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                px-4
                py-2
                text-sm
                transition
                hover:border-brand-gold/40
                hover:bg-white/5
              "
            >
              <span className="text-brand-gold">♥</span>

              Shri Shukdev Ashram 
            </Link>

          </div>

        </div>

      </Container>

      {/* ==========================================
          Back To Top
      =========================================== */}

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed
          bottom-8
          right-8
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-brand-primary
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-brand-gold
          hover:text-brand-brown
        "
        aria-label="Back to top"
      >
        <ArrowRight className="-rotate-90 h-5 w-5" />
      </button>

    </footer>
  );
}
