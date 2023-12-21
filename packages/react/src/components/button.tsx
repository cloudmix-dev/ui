import { type VariantProps, cva } from "class-variance-authority";
import cn from "classnames";
import {
  Button as AriaButton,
  type ButtonProps as BaseButtonProps,
} from "react-aria-components";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-900",
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-900 text-neutral-100 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200",
        secondary:
          "bg-neutral-200 text-neutral-900 hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900",
        brand: "bg-brand-600 text-brand-100 hover:bg-brand-500",
        danger: "bg-danger-600 text-danger-100 hover:bg-danger-500",
        outline: "border border-input bg-transparent hover:bg-neutral-900/10",
        ghost: "hover:bg-neutral-200 dark:hover:bg-neutral-800",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends BaseButtonProps,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <AriaButton
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    />
  );
}

Button.displayName = "Button";

export { Button };
