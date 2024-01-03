import { type VariantProps, cva } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";
import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
} from "react-aria-components";

import { cn } from "../utils";
import { Slot } from "./slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950",
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-800 text-neutral-50 hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-neutral-300",
        secondary:
          "bg-neutral-200 text-neutral-950 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700",
        brand: "bg-brand-600 text-brand-50 hover:bg-brand-500",
        danger: "bg-danger-600 text-danger-50 hover:bg-danger-500",
        outline:
          "text-neutral-950 border border-neutral-950 bg-transparent hover:bg-neutral-200 dark:text-neutral-50 dark:border-neutral-50 dark:hover:bg-neutral-700",
        ghost:
          "text-neutral-950 hover:bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-800",
        link: "text-neutral-950 underline-offset-4 hover:underline dark:text-neutral-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
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

const Button = forwardRef<HTMLElement, ButtonProps>(
  ({ asChild, children, className, variant, size, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : BaseButton;

    return (
      <Comp
        {...props}
        // biome-ignore lint/suspicious/noExplicitAny: the forwardedRef can be for any React component
        ref={forwardedRef as any}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children as ReactNode}
      </Comp>
    );
  },
);

Button.displayName = "Button";

const buttonSkeletonVariants = cva(
  "inline-block rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse",
  {
    variants: {
      size: {
        default: "h-10 w-32",
        sm: "h-9 w-28",
        lg: "h-11 w-36",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface ButtonSkeletonProps
  extends VariantProps<typeof buttonSkeletonVariants> {
  className?: string;
}

function ButtonSkeleton({ size, className }: ButtonSkeletonProps) {
  return <div className={cn(buttonSkeletonVariants({ size, className }))} />;
}

// @ts-expect-error
Button.Skeleton = ButtonSkeleton;

// @ts-expect-error
Button.Skeleton.displayName = "Button.Skeleton";

const TypedButton = Button as React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLElement>
> & {
  Skeleton: typeof ButtonSkeleton;
};

export { TypedButton as Button };
