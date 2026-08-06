import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/_oldbutton";

export function ButtonLink({
  href,
  children,
  variant = "default",
  size = "default",
  className,
  startIcon,
  endIcon,
  ...props
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant, size }),
        className
      )}
      {...props}
    >
      {startIcon}

      <span>{children}</span>

      {endIcon && (
        <span className="transition-transform duration-300 group-hover/button:translate-x-1">
          {endIcon}
        </span>
      )}
    </Link>
  );
}