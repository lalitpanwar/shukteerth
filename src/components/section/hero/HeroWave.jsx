export function HeroWave() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 z-10 overflow-hidden leading-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-20 w-full md:h-28"
      >
        <path
          fill="var(--color-brand-ivory)"
          d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
        />
      </svg>
    </div>
  );
}