import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] hover:bg-white/90 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 ease-out border border-white/20",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]",
        outline:
          "border border-white/15 bg-white/5 backdrop-blur-[12px] text-white hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_25px_-5px_rgba(255,255,255,0.1)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-white/5 hover:text-white transition-colors duration-300",
        link: "text-white underline-offset-4 hover:underline decoration-white/30",
      },
      size: {
        default: "h-11 px-6 py-2 has-[>svg]:px-4 text-[15px]",
        sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-14 rounded-full px-8 text-base has-[>svg]:px-6",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
