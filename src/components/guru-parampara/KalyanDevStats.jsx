import Container from "@/components/shared/container";
import { kalyanDevStats } from "@/data/kalyanDev.data";

export function KalyanDevStats() {
  return (
    <div className="relative z-20 -mt-16 md:-mt-20">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-brand-border bg-brand-border shadow-xl md:grid-cols-4">
          {kalyanDevStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white px-6 py-8 text-center"
            >
              <p className="font-heading text-3xl text-brand-primary md:text-4xl">
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
