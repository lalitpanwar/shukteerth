"use client";

import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";

export function AshramHero() {
  return (
    <Section className="relative flex min-h-[70vh] items-end overflow-hidden p-0 lg:min-h-[75vh]">

      {/* ===================================
          Background
      ==================================== */}

      <div className="absolute inset-0">

        <Image
          src="/images/ashram/about/about-hero.webp"
          alt="Shri Shukdev Ashram"
          fill
          priority
          className="object-cover object-center"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/25
            via-black/45
            to-black/75
          "
        />

      </div>

      {/* Golden Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brand-gold/10
          blur-[140px]
        "
      />

      {/* ===================================
          Content
      ==================================== */}

      <Container className="relative z-10 pb-24">

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2.5
              backdrop-blur-md
            "
          >

            <Sparkles className="h-4 w-4 text-brand-gold" />

            <span className="text-sm tracking-[0.20em] text-white uppercase">
              प्राचीन श्रीमद्भागवत पीठ
            </span>

          </div>

          {/* Heading */}

          <h1
            className="
              mt-8
              font-heading
              text-5xl
              leading-none
              text-white
              md:text-7xl
            "
          >
            श्री शुकदेव आश्रम
          </h1>

          {/* Subtitle */}

          <p
            className="
              mt-6
              text-lg
              tracking-[0.35em]
              text-brand-gold
              uppercase
            "
          >
            सेवा • साधना • संस्कार
          </p>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-white/85
              md:text-xl
            "
          >
            जहाँ भगवान श्री शुकदेव जी की दिव्य परम्परा आज भी
            श्रीमद्भागवत कथा, गौसेवा, अन्नदान एवं
            सनातन संस्कृति के संरक्षण के माध्यम से
            निरंतर प्रवाहित हो रही है।
          </p>
                    {/* ===============================
              CTA
          =============================== */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <ButtonLink
              href="#about-introduction"
              size="lg"
              className="
                h-14
                rounded-full
                px-8
                shadow-button
              "
            >
              आश्रम का परिचय
            </ButtonLink>

            <ButtonLink
              href="/visit"
              variant="secondary"
              size="lg"
              className="
                h-14
                rounded-full
                border-white/20
                bg-white/10
                px-8
                text-white
                backdrop-blur-md
                hover:bg-white
                hover:text-brand-brown
              "
            >
              दर्शन करें
            </ButtonLink>

          </div>

        </div>

      </Container>

      {/* ===================================
          Heritage Strip
      ==================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          border-t
          border-white/10
          bg-black/30
          backdrop-blur-md
        "
      >

        <Container>

          <div
            className="
              grid
              grid-cols-1
              divide-y
              divide-white/10
              md:grid-cols-3
              md:divide-x
              md:divide-y-0
            "
          >

            {/* Item */}

            <div className="py-7 text-center">

              <p className="font-heading text-4xl text-brand-gold">
                5000+
              </p>

              <p className="mt-2 text-sm tracking-[0.25em] text-white/70 uppercase">
                वर्षों की परम्परा
              </p>

            </div>

            {/* Item */}

            <div className="py-7 text-center">

              <p className="font-heading text-4xl text-brand-gold">
                🌳
              </p>

              <p className="mt-2 text-sm tracking-[0.25em] text-white/70 uppercase">
                प्राचीन वटवृक्ष
              </p>

            </div>

            {/* Item */}

            <div className="py-7 text-center">

              <p className="font-heading text-4xl text-brand-gold">
                📖
              </p>

              <p className="mt-2 text-sm tracking-[0.25em] text-white/70 uppercase">
                श्रीमद्भागवत व्यासपीठ
              </p>

            </div>

          </div>

        </Container>

      </div>

      {/* ===================================
          Scroll Indicator
      ==================================== */}

      <div
        className="
          absolute
          bottom-36
          left-1/2
          hidden
          -translate-x-1/2
          lg:flex
          flex-col
          items-center
        "
      >

        <span className="mb-3 text-xs tracking-[0.30em] text-white/60 uppercase">
          Scroll
        </span>

        <div
          className="
            flex
            h-12
            w-7
            items-start
            justify-center
            rounded-full
            border
            border-white/30
            p-1
          "
        >

          <ChevronDown
            className="
              h-4
              w-4
              animate-bounce
              text-white
            "
          />

        </div>

      </div>

    </Section>

  );
}