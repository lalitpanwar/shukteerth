"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Flower2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa6";
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

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-[#241B15]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(0,0,0,0.55),transparent_100%)]" />

        <Container className="relative z-10 flex h-full items-center justify-center">

          <div className="max-w-4xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-black/30 px-5 py-2 backdrop-blur">
              <Flower2 className="h-4 w-4 text-brand-gold" />
              <span className="text-sm uppercase tracking-[0.15em] text-white">
                श्री शुकदेव आश्रम
              </span>
            </div>

            <h2 className="mt-8 font-heading text-4xl leading-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.6)] md:text-6xl">
              यत्र भागवत कथा प्रवहति,
              <br />
              तत्र स्वयं भगवान का निवास होता है।
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
              आइए, इस दिव्य परम्परा का हिस्सा बनें और
              श्रीमद्भागवत कथा, सेवा एवं दर्शन के माध्यम से
              अपने जीवन को आध्यात्मिक प्रकाश से आलोकित करें।
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <ButtonLink
                href="/contact"
                className="rounded-full px-8 py-6"
              >
                कथा हेतु संपर्क करें
              </ButtonLink>

              <ButtonLink
                href="/contact"
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

      {/* Ambient Decoration */}
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-brand-gold/6 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-gold/5 blur-3xl" />

      <Container className="relative py-20">
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

              {/* Verified: facebook.com/shukteerth */}
              <Link
                href="https://www.facebook.com/shukteerth/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook पर श्री शुकदेव आश्रम"
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
                  hover:text-brand-brown
                "
              >
                <FaFacebookF className="h-5 w-5" />
              </Link>

            </div>

          </div>

          {/* ===================================
              Column 2
          ==================================== */}

          <div>

            <h3 className="inline-block border-b-2 border-brand-gold/40 pb-2 font-heading text-2xl text-white">
              त्वरित लिंक
            </h3>

            <ul className="mt-8 space-y-5">

              <li><Link href="/" className="transition-colors hover:text-brand-gold">मुखपृष्ठ</Link></li>

              <li><Link href="/about-ashram" className="transition-colors hover:text-brand-gold">आश्रम परिचय</Link></li>

              <li><Link href="/shukteerth" className="transition-colors hover:text-brand-gold">शुकतीर्थ</Link></li>

              <li><Link href="/guru-parampara" className="transition-colors hover:text-brand-gold">गुरु परम्परा</Link></li>

              <li><Link href="/gallery" className="transition-colors hover:text-brand-gold">गैलरी</Link></li>

              <li><Link href="/contact" className="transition-colors hover:text-brand-gold">संपर्क</Link></li>

            </ul>

          </div>

          {/* ===================================
              Column 3
          ==================================== */}

          <div>

            <h3 className="inline-block border-b-2 border-brand-gold/40 pb-2 font-heading text-2xl text-white">
              सेवाएँ
            </h3>

            <ul className="mt-8 space-y-5">

              <li><Link href="/contact" className="transition-colors hover:text-brand-gold">श्रीमद्भागवत कथा हेतु संपर्क</Link></li>

              <li><Link href="/shukteerth" className="transition-colors hover:text-brand-gold">शुकतीर्थ पधारें</Link></li>

              <li><Link href="/contact" className="transition-colors hover:text-brand-gold">दान एवं सेवा</Link></li>

              <li><Link href="/#faq" className="transition-colors hover:text-brand-gold">प्रश्नोत्तर</Link></li>

            </ul>

          </div>

          {/* ===================================
              Column 4
          ==================================== */}

          <div>

            <h3 className="inline-block border-b-2 border-brand-gold/40 pb-2 font-heading text-2xl text-white">
              संपर्क करें
            </h3>

            <div className="mt-8 space-y-7">

              <div className="flex gap-4">

                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-gold" />

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

                <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-gold" />

                <Link href="tel:+919917488885" className="transition-colors hover:text-brand-gold">
                  +91 99174 88885
                </Link>

              </div>

              <div className="flex gap-4">

                <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-gold" />

                <Link href="mailto:info@shukdevashram.org" className="transition-colors hover:text-brand-gold">
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
