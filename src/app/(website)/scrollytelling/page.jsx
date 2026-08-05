'use client';
import { useEffect, useRef, useState } from "react";
import { Hammer, Flame, Droplets, Sparkles, Ruler, Sword } from "lucide-react";

// ---------------------------------------------------------------------------
// Design tokens
// ---------------------------------------------------------------------------
const COLORS = {
  charcoal: "#181513",   // page / panel background
  iron: "#211C19",       // card background, slightly lighter than charcoal
  ember: "#E8592E",      // primary accent — the forge fire
  emberDim: "#8C3A22",   // low-heat ember, used for inactive states
  steel: "#7C8891",      // cool steel accent for the quench/polish stages
  bone: "#EFE8DC",       // primary light text
  ash: "#948B80",        // muted secondary text
  hairline: "rgba(239,232,220,0.10)",
};

const FONTS = {
  display: "'Oswald', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

// ---------------------------------------------------------------------------
// Stage content — the life of a katana, ore to scabbard
// ---------------------------------------------------------------------------
const STAGES = [
  {
    id: "ore",
    index: "01",
    reading: "~1,300°C",
    icon: Flame,
    title: "The Ore",
    subtitle: "Tamahagane",
    body: "Iron sand pulled from riverbeds is layered with charcoal inside a clay tatara furnace and fired for three days without pause. What comes out is a bloom of raw steel — tamahagane — uneven, half-formed, waiting to be judged.",
    details: [
      "Iron sand (satetsu) smelted for ~72 hours",
      "Bloom broken apart, sorted by fracture and color",
      "Only the highest-carbon fragments are kept",
    ],
  },
  {
    id: "fold",
    index: "02",
    reading: "×15 folds",
    icon: Hammer,
    title: "The Fold",
    subtitle: "Orikaeshi-tanren",
    body: "The smith hammers the steel flat, folds it over, and hammers it flat again — sometimes fifteen times over. Each fold halves the impurities and doubles the layers, until a single bar holds thousands of sheets, invisible to the eye.",
    details: [
      "Each fold roughly doubles the layer count",
      "Fifteen folds ≈ 32,000 laminations",
      "Removes slag, evens the carbon distribution",
    ],
  },
  {
    id: "shape",
    index: "03",
    reading: "sori curve",
    icon: Ruler,
    title: "The Shape",
    subtitle: "Sunobe",
    body: "What was a straight billet is drawn out into a blade profile, tapered from spine to edge. The curve — sori — isn't carved in; it will only appear later, born in the instant the blade meets water.",
    details: [
      "Billet drawn into rough sword shape",
      "Cross-section tapered, spine thick, edge thin",
      "Curve is not cut — it forms during quenching",
    ],
  },
  {
    id: "edge",
    index: "04",
    reading: "770°C → water",
    icon: Droplets,
    title: "The Edge",
    subtitle: "Tsuchioki & Yaki-ire",
    body: "A clay slurry is painted on thick along the spine and thin along the edge, then the blade is heated to a dull glow and plunged into water. The edge cools first and hardens; the spine cools slower and stays soft. The sword curves itself, and the hamon is born.",
    details: [
      "Differential clay coating controls cooling speed",
      "Quench hardens the edge, tempers the spine",
      "The sori curve and the hamon line appear together",
    ],
  },
  {
    id: "polish",
    index: "05",
    reading: "~120 hours",
    icon: Sparkles,
    title: "The Polish",
    subtitle: "Togi",
    body: "A separate craftsman takes over now, working through a graduated series of stones — coarse to impossibly fine — for a week or more. This is what finally reveals the hamon: not painted on, but uncovered from steel that has carried it all along.",
    details: [
      "Ten or more stones, coarsest to finest",
      "Roughly 120 hours of work per blade",
      "Hamon and grain pattern surface under the final stones",
    ],
  },
  {
    id: "mount",
    index: "06",
    reading: "koshirae",
    icon: Sword,
    title: "The Mount",
    subtitle: "Koshirae",
    body: "The finished blade is fitted with a collar, wrapped hilt, and lacquered scabbard — the koshirae. Only now does the sword leave the forge: an object built by four sets of hands, none of whom worked alone.",
    details: [
      "Habaki collar seats the blade in its saya",
      "Tsuka wrapped in silk cord over rayskin",
      "Saya lacquered last, often by a fifth artisan",
    ],
  },
];

// ---------------------------------------------------------------------------
// Stage illustrations — abstract, linework, one per forging stage
// ---------------------------------------------------------------------------
function Illustration({ id }) {
  const stroke = COLORS.bone;
  const ember = COLORS.ember;
  const steel = COLORS.steel;

  switch (id) {
    case "ore":
      return (
        <svg viewBox="0 0 360 480" className="w-full h-full">
          <defs>
            <radialGradient id="oreGlow" cx="50%" cy="70%" r="60%">
              <stop offset="0%" stopColor={ember} stopOpacity="0.55" />
              <stop offset="100%" stopColor={ember} stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="360" height="480" fill="url(#oreGlow)" />
          <path d="M90 340 Q180 260 270 340 L280 400 Q180 440 80 400 Z" fill={COLORS.iron} stroke={ember} strokeWidth="2" />
          <path d="M110 340 Q180 300 250 340" stroke={ember} strokeWidth="1.5" fill="none" opacity="0.6" />
          {[...Array(10)].map((_, i) => (
            <circle key={i} cx={100 + i * 18} cy={330 - (i % 3) * 22} r={1.5 + (i % 3)} fill={ember} opacity={0.3 + (i % 4) * 0.15} />
          ))}
          <line x1="70" y1="410" x2="290" y2="410" stroke={stroke} strokeWidth="1" opacity="0.25" />
          <text x="180" y="90" textAnchor="middle" fill={stroke} opacity="0.5" fontSize="13" fontFamily={FONTS.mono} letterSpacing="3">TATARA</text>
        </svg>
      );
    case "fold":
      return (
        <svg viewBox="0 0 360 480" className="w-full h-full">
          {[...Array(9)].map((_, i) => (
            <rect key={i} x={100} y={140 + i * 22} width="160" height="14" rx="2"
              fill={i % 2 === 0 ? COLORS.iron : "transparent"}
              stroke={ember} strokeOpacity={0.25 + (i % 3) * 0.15} strokeWidth="1.2" />
          ))}
          <path d="M180 90 L180 130 M150 100 L180 130 L210 100" stroke={ember} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <line x1="180" y1="360" x2="180" y2="400" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
          <path d="M160 400 L180 420 L200 400" stroke={stroke} strokeWidth="1.5" fill="none" opacity="0.4" />
          <text x="180" y="450" textAnchor="middle" fill={stroke} opacity="0.5" fontSize="13" fontFamily={FONTS.mono} letterSpacing="3">15 FOLDS</text>
        </svg>
      );
    case "shape":
      return (
        <svg viewBox="0 0 360 480" className="w-full h-full">
          <path d="M120 90 L150 90 L170 380 Q170 400 150 405 L130 400 Q118 395 118 378 Z"
            fill={COLORS.iron} stroke={stroke} strokeWidth="1.5" opacity="0.9" />
          <path d="M215 95 Q245 240 200 380 Q190 400 170 405" fill="none" stroke={ember} strokeWidth="1.2" strokeDasharray="4 5" opacity="0.6" />
          <line x1="90" y1="90" x2="240" y2="90" stroke={stroke} strokeWidth="1" opacity="0.25" />
          <line x1="100" y1="400" x2="220" y2="400" stroke={stroke} strokeWidth="1" opacity="0.25" />
          <text x="180" y="60" textAnchor="middle" fill={stroke} opacity="0.5" fontSize="13" fontFamily={FONTS.mono} letterSpacing="3">SORI</text>
        </svg>
      );
    case "edge":
      return (
        <svg viewBox="0 0 360 480" className="w-full h-full">
          <defs>
            <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={steel} stopOpacity="0.5" />
              <stop offset="100%" stopColor={steel} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect x="70" y="330" width="220" height="90" rx="6" fill="url(#waterGrad)" stroke={steel} strokeOpacity="0.4" />
          {[0, 1, 2].map((i) => (
            <path key={i} d={`M90 ${350 + i * 15} Q180 ${340 + i * 15} 270 ${350 + i * 15}`} stroke={steel} strokeWidth="1" fill="none" opacity={0.5 - i * 0.12} />
          ))}
          <path d="M172 80 L188 80 L184 330 L176 330 Z" fill={COLORS.iron} stroke={ember} strokeWidth="1.5" />
          <path d="M174 90 Q190 200 178 325" stroke={ember} strokeWidth="1.2" fill="none" opacity="0.7" />
          {[...Array(6)].map((_, i) => (
            <circle key={i} cx={160 + i * 8} cy={300 - i * 6} r="1.4" fill={ember} opacity="0.5" />
          ))}
          <text x="180" y="450" textAnchor="middle" fill={stroke} opacity="0.5" fontSize="13" fontFamily={FONTS.mono} letterSpacing="3">YAKI-IRE</text>
        </svg>
      );
    case "polish":
      return (
        <svg viewBox="0 0 360 480" className="w-full h-full">
          <path d="M172 70 L188 70 L182 400 L178 400 Z" fill={COLORS.iron} stroke={stroke} strokeWidth="1.5" />
          <path d="M175 80 Q195 240 179 395" stroke={ember} strokeWidth="1.6" fill="none" opacity="0.8" />
          {[100, 150, 200, 250, 300].map((y, i) => (
            <rect key={i} x={90 - i * 4} y={y} width={30 + i * 3} height="10" rx="2" fill="none" stroke={steel} strokeOpacity="0.35" />
          ))}
          <text x="180" y="440" textAnchor="middle" fill={stroke} opacity="0.5" fontSize="13" fontFamily={FONTS.mono} letterSpacing="3">TOGI</text>
        </svg>
      );
    case "mount":
      return (
        <svg viewBox="0 0 360 480" className="w-full h-full">
          <path d="M172 60 L188 60 L182 260 L178 260 Z" fill={COLORS.iron} stroke={ember} strokeWidth="1.4" />
          <rect x="165" y="258" width="30" height="14" rx="2" fill={COLORS.iron} stroke={stroke} strokeWidth="1.2" />
          {[...Array(9)].map((_, i) => (
            <path key={i} d={`M168 ${278 + i * 12} L192 ${284 + i * 12}`} stroke={stroke} strokeWidth="1.4" opacity="0.55" />
          ))}
          <rect x="163" y="385" width="34" height="12" rx="3" fill="none" stroke={stroke} strokeWidth="1.2" opacity="0.6" />
          <path d="M172 60 L188 60 L184 250 L176 250 Z" fill="none" stroke={ember} strokeOpacity="0.3" strokeWidth="1" />
          <text x="180" y="440" textAnchor="middle" fill={stroke} opacity="0.5" fontSize="13" fontFamily={FONTS.mono} letterSpacing="3">KOSHIRAE</text>
        </svg>
      );
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function ForgeScrollytelling() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const progressPct = (active / (STAGES.length - 1)) * 100;

  return (
    <div style={{ background: COLORS.charcoal, fontFamily: FONTS.body }} className="min-h-screen w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      {/* Page header */}
      <header className="px-6 sm:px-12 py-10 sm:py-14 border-b" style={{ borderColor: COLORS.hairline }}>
        <p style={{ fontFamily: FONTS.mono, color: COLORS.ember, letterSpacing: "0.2em" }} className="text-xs uppercase mb-4">
          Steel, fire, water
        </p>
        <h1 style={{ fontFamily: FONTS.display, color: COLORS.bone }} className="text-4xl sm:text-6xl font-semibold leading-none max-w-3xl">
          The Making of a Katana
        </h1>
        <p style={{ color: COLORS.ash }} className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed">
          Six stages, four craftsmen, and roughly two months separate a handful of
          iron sand from a finished blade. Scroll to follow the steel through the forge.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT COLUMN — sticky illustration panel (always first child = left column on desktop) */}
        <div className="lg:col-start-1 sticky top-0 h-72 sm:h-96 lg:h-screen z-10">
          <div className="relative w-full h-full overflow-hidden" style={{ background: COLORS.charcoal }}>
            {/* stage illustrations, cross-fading */}
            {STAGES.map((stage, i) => (
              <div
                key={stage.id}
                className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "scale(1)" : "scale(0.96)",
                }}
              >
                <div className="w-56 sm:w-72 lg:w-80">
                  <Illustration id={stage.id} />
                </div>
              </div>
            ))}

            {/* vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(120% 90% at 50% 100%, transparent 40%, ${COLORS.charcoal} 100%)` }}
            />

            {/* stage label, bottom-left */}
            <div className="absolute left-6 bottom-6 sm:left-10 sm:bottom-10 flex items-center gap-3">
              <span style={{ fontFamily: FONTS.mono, color: COLORS.ember }} className="text-xs tracking-widest">
                {STAGES[active].index} / {String(STAGES.length).padStart(2, "0")}
              </span>
              <span style={{ color: COLORS.ash }} className="text-xs tracking-widest hidden sm:inline">
                {STAGES[active].reading}
              </span>
            </div>

            {/* progress rail, right edge of image panel */}
            <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-0">
              <div className="relative w-px h-40 sm:h-56" style={{ background: COLORS.hairline }}>
                <div
                  className="absolute top-0 left-0 w-px transition-all duration-500 ease-out"
                  style={{ height: `${progressPct}%`, background: COLORS.ember }}
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 absolute" style={{ top: 0, height: "100%" }}>
                {STAGES.map((stage, i) => (
                  <span
                    key={stage.id}
                    className="block rounded-full transition-all duration-500"
                    style={{
                      width: active === i ? "8px" : "5px",
                      height: active === i ? "8px" : "5px",
                      marginTop: i === 0 ? 0 : "26px",
                      background: active === i ? COLORS.ember : COLORS.ash,
                      opacity: active === i ? 1 : 0.4,
                      marginLeft: "-3.5px",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — scrolling timeline content (always second child = right column on desktop) */}
        <div className="lg:col-start-2">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            const isActive = active === i;
            return (
              <section
                key={stage.id}
                data-index={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                className="min-h-[70vh] lg:min-h-screen flex items-center px-6 sm:px-12 py-16 border-b"
                style={{ borderColor: COLORS.hairline }}
              >
                <div className="max-w-lg">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-500"
                      style={{
                        background: isActive ? COLORS.ember : "transparent",
                        border: `1px solid ${isActive ? COLORS.ember : COLORS.hairline}`,
                      }}
                    >
                      <Icon size={16} color={isActive ? COLORS.charcoal : COLORS.ash} />
                    </span>
                    <span style={{ fontFamily: FONTS.mono, color: COLORS.ember }} className="text-xs tracking-[0.3em] uppercase">
                      {stage.index} · {stage.subtitle}
                    </span>
                  </div>

                  <h2
                    style={{ fontFamily: FONTS.display, color: COLORS.bone }}
                    className="text-3xl sm:text-4xl font-semibold mb-5 transition-opacity duration-500"
                  >
                    {stage.title}
                  </h2>

                  <p style={{ color: COLORS.ash }} className="text-base leading-relaxed mb-7">
                    {stage.body}
                  </p>

                  <ul className="space-y-3">
                    {stage.details.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: COLORS.bone }}>
                        <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: COLORS.ember }} />
                        <span style={{ opacity: 0.85 }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}

          {/* closing note */}
          <div className="px-6 sm:px-12 py-16">
            <p style={{ color: COLORS.ash, fontFamily: FONTS.mono }} className="text-xs tracking-widest">
              END — 06 / 06
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
