import { cn } from "@/lib/utils";

const spacing = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-24",
  xl: "py-24 md:py-32",
};

export default function Section({
  as: Component = "section",
  size = "lg",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(spacing[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}