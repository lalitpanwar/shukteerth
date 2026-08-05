import { cn } from "@/lib/utils";

export default function Container({
  as: Component = "div",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-(--container-width) px-4 sm:px-6 lg:px-8 xl:px-10",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}