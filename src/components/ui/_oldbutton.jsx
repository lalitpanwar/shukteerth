import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva} from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex touch-manipulation items-center justify-center gap-2.5 whitespace-nowrap rounded-[7px] border font-medium transition-all duration-300 ease-out outline-none select-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-brand-primary bg-brand-primary text-brand-gold-light shadow-[0_8px_24px_rgba(107,31,31,.22)] hover:bg-brand-primary-dark hover:-translate-y-[2px] hover:shadow-[0_14px_32px_rgba(107,31,31,.32)] active:translate-y-0",
        gold: "border border-brand-gold bg-brand-gold text-brand-primary shadow-[0_8px_24px_rgba(198,161,91,.25)] hover:bg-brand-gold-light hover:-translate-y-[2px] hover:shadow-[0_14px_30px_rgba(198,161,91,.35)] active:translate-y-0",
        outline:
          "border border-white/35 bg-transparent text-white hover:bg-white hover:text-brand-primary hover:border-white hover:-translate-y-[2px] hover:shadow-lg active:translate-y-0",
        ghost:
          "border-transparent bg-transparent text-brand-primary hover:bg-brand-sand",
        secondary:
          "border-brand-border bg-brand-sand text-brand-brown hover:bg-brand-ivory",
        link: "border-transparent bg-transparent text-brand-primary underline-offset-4 hover:text-brand-gold hover:underline",
        destructive: "border-red-600 bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        xs: "h-9 px-3 text-xs",
        sm: "h-10 px-4 text-sm",
        default: "h-11 px-7 py-2 text-sm",
        lg: "h-14 px-9 text-base",
        icon: "size-12",
        "icon-xs": "size-9",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);



const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <ButtonPrimitive
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
