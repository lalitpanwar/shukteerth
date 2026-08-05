import { cn } from "@/lib/utils";

export function HeroHeading({
  badge,
  title,
  description,
  className,
}) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-5xl flex-col items-center text-center",
        className
      )}
    >
      {/* Badge */}
      {badge && (
        <div className="mb-8 flex items-center gap-5">
          <span className="h-px w-12 bg-brand-gold/50" />

          <p className="text-sm font-medium tracking-[0.35em] text-brand-gold">
            {badge}
          </p>

          <span className="h-px w-12 bg-brand-gold/50" />
        </div>
      )}

      {/* Heading */}
      {title && (
        <h1
          id="hero-title"
          className="
            max-w-4xl
            font-heading
            text-balance
            text-white
            font-semibold
            tracking-tight
            leading-[1.1]

            text-[2.75rem]

            sm:text-[3.5rem]

            lg:text-[4.75rem]

            xl:text-[5.5rem]

            drop-shadow-[0_8px_30px_rgba(0,0,0,.45)]
          "
        >
          {title}
        </h1>
      )}

      {/* Description */}
      {description && (
        <p
          className="
            mt-8
            max-w-2xl
            text-pretty
            text-lg
            leading-8
            text-white/85
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}