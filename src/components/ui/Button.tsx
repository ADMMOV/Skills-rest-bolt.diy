import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border border-white/10 hover:bg-primary/80 shadow-[0_2px_16px_0_rgba(255,255,255,0.08)] hover:shadow-[0_2px_24px_0_rgba(255,255,255,0.16)]",
        destructive:
          "bg-destructive text-destructive-foreground border border-red-800 hover:bg-destructive/90",
        outline:
          "border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white shadow-none",
        secondary:
          "bg-secondary text-secondary-foreground border border-white/10 hover:bg-secondary/80 shadow-none",
        ghost: "text-white hover:bg-white/10 hover:text-white border border-transparent",
        link: "text-primary underline-offset-4 hover:underline border-none bg-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
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
