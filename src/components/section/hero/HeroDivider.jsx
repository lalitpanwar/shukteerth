import { cn } from "@/lib/utils";

export function HeroDivider({ className }) {
  return (
    <div
      className={cn(
        "my-10 flex items-center justify-center gap-5",
        className
      )}
    >
      <span className="h-px w-14 bg-brand-gold/40 md:w-20" />

      <div className="flex size-2 rounded-full bg-brand-gold shadow-[0_0_12px_rgba(212,175,55,.6)]" />

      <span className="h-px w-14 bg-brand-gold/40 md:w-20" />
    </div>
  );
}