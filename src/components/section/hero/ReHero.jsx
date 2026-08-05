import Image from "next/image";

export default function ReHero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden bg-[#1b120d]"
    >
      {/* =========================
          Background Image
      ========================== */}

      <Image
      src="/images/hero/hero-desktop.jpg"
    
        alt="Shri Shukdev Ashram"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/70" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#140d09] via-[#140d09]/60 to-transparent" />

      {/* Warm Golden Glow */}
      <div
        className="
        absolute
        left-[8%]
        top-[48%]
        h-[420px]
        w-[420px]
        rounded-full
        bg-[#C9A227]/20
        blur-[120px]
      "
      />

      {/* Radial Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,.55) 100%)",
        }}
      />

      {/* =========================
          Main Layout
      ========================== */}

      <div
        className="
        relative
        z-20

        grid

        min-h-screen

        grid-rows-[1fr_auto_170px]
      "
      >
        {/* =========================
            Hero Content
        ========================== */}

        <div className="flex items-center justify-center px-6 pt-28">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            {/* Ornament */}

            <div className="mb-8 flex items-center gap-5">
              <span className="h-px w-20 bg-[#C9A227]/70" />

              <svg
                width="34"
                height="34"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M50 15
                     C58 28 68 38 84 43
                     C68 48 58 60 50 78
                     C42 60 32 48 16 43
                     C32 38 42 28 50 15Z"
                  fill="#C9A227"
                />
              </svg>

              <span className="h-px w-20 bg-[#C9A227]/70" />
            </div>

            {/* Small Label */}

            <p
              className="
              mb-6

              uppercase

              tracking-[0.45em]

              text-[#E5C86B]

              text-sm
            "
            >
              पावन शुकतीर्थ
            </p>

            {/* Heading */}

            <h1
              className="
              font-devanagari

              text-[#FAF5EC]

              font-medium

              leading-[1.15]

              tracking-tight

              drop-shadow-[0_10px_40px_rgba(0,0,0,.55)]

              text-[clamp(2.8rem,7vw,5.8rem)]
            "
            >
              जहाँ श्रीमद्भागवत महापुराण की
              <br />
              अमर कथा का दिव्य प्रवाह
              <br />
              प्रारम्भ हुआ
            </h1>

            {/* Description */}

            <p
              className="
              mt-8

              max-w-3xl

              text-[18px]

              leading-8

              text-[#F5ECDD]/90
            "
            >
              श्री शुकदेव जी की तपोभूमि, जहाँ हजारों वर्षों से
              ज्ञान, साधना, सेवा और श्रीमद्भागवत की दिव्य परम्परा
              आज भी निरंतर प्रवाहित हो रही है।
            </p>

            {/* Divider */}

            <div className="my-10 flex items-center gap-4">
              <span className="h-px w-20 bg-[#C9A227]/70" />

              <div className="h-2 w-2 rounded-full bg-[#C9A227]" />

              <span className="h-px w-20 bg-[#C9A227]/70" />
            </div>

            {/* Buttons */}

            <div className="flex flex-col gap-5 sm:flex-row">
              <a
                href="/about"
                className="
                group

                inline-flex

                items-center

                gap-3

                rounded-full

                border

                border-[#D4B15B]

                bg-gradient-to-b

                from-[#D9B85F]

                to-[#B98D2B]

                px-9

                py-4

                font-semibold

                text-[#2E1C08]

                shadow-[0_15px_40px_rgba(201,162,39,.35)]

                transition-all

                duration-300

                hover:-translate-y-1

                hover:shadow-[0_20px_45px_rgba(201,162,39,.45)]
              "
              >
                आश्रम परिचय

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/booking"
                className="
                group

                inline-flex

                items-center

                gap-3

                rounded-full

                border

                border-[#C9A227]/60

                bg-white/10

                backdrop-blur-xl

                px-9

                py-4

                font-semibold

                text-white

                transition-all

                duration-300

                hover:-translate-y-1

                hover:bg-white/15
              "
              >
                भागवत कथा बुक करें

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
                {/* =========================
            Scroll Indicator
        ========================== */}

        <div className="relative flex items-end justify-center">
          <div className="absolute bottom-24 flex flex-col items-center">
            <span
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#E5C86B]/80
              "
            >
              Scroll
            </span>

            <div
              className="
                relative
                flex
                h-16
                w-9
                justify-center
                rounded-full
                border
                border-[#C9A227]/60
                bg-black/20
                backdrop-blur-md
              "
            >
              <span
                className="
                  absolute
                  top-3
                  h-3
                  w-1
                  rounded-full
                  bg-[#E5C86B]
                  animate-[heroScroll_2s_ease-in-out_infinite]
                "
              />
            </div>
          </div>
        </div>

        {/* =========================
            Bottom Wave
        ========================== */}

        <div className="relative h-[170px]">
          <svg
            className="absolute bottom-0 block h-auto w-full"
            viewBox="0 0 1440 170"
            preserveAspectRatio="none"
          >
            <path
              fill="#FBF6EC"
              d="
                M0,80
                C180,130 360,150 540,125
                C720,100 900,35 1080,55
                C1230,70 1340,110 1440,85
                L1440,170
                L0,170
                Z
              "
            />
          </svg>

          {/* Center Lotus */}

          <div
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border-4
                border-[#FBF6EC]
                bg-[#6F1D1B]
                shadow-xl
              "
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="
                    M50 15
                    C58 28 68 38 84 43
                    C68 48 58 60 50 78
                    C42 60 32 48 16 43
                    C32 38 42 28 50 15
                    Z
                  "
                  fill="#D7B45A"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
