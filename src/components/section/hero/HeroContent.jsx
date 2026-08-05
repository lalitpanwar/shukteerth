import { HeroActions, HeroDivider, HeroHeading } from ".";
import { heroContent } from "@/data/hero.data";
export function HeroContent() {
  return (
<div className="mx-auto w-full max-w-6xl px-6">
  <HeroHeading
    badge={heroContent.badge}
    title={heroContent.title}
    description={heroContent.description}
  />

  <HeroDivider className="my-12" />

  <HeroActions
    primary={heroContent.primaryAction}
    secondary={heroContent.secondaryAction}
  />
</div>
  );
}