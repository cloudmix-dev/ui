import { type VariantProps, cva } from "class-variance-authority";
import cn from "classnames";
import { Text } from "react-aria-components";

const logoVariants = cva("font-display font-black uppercase leading-none", {
  variants: {
    size: {
      default: "text-4xl sm:text-6xl xl:text-7xl",
      sm: "text-2xl sm:text-3xl",
      lg: "text-6xl sm:text-8xl xl:text-9xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
  elementType?: string;
  footer?: boolean;
  footerClassName?: string;
  text?: string;
}

export function Logo({
  className,
  elementType,
  footer,
  text,
  size,
}: LogoProps) {
  return (
    <div
      className={cn(
        "inline-flex flex-col items-end relative overflow-hidden",
        className,
      )}
    >
      <Text
        elementType={elementType}
        className={cn(logoVariants({ size, className }))}
      >
        <span className="bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-800 bg-clip-text text-transparent dark:from-neutral-50 dark:via-neutral-50 dark:to-neutral-400">
          {text}
        </span>
      </Text>
      {size !== "sm" && (
        <>
          {footer && (
            <span className="uppercase leading-none text-neutral-950 sm:text-lg xl:text-xl dark:text-neutral-50">
              from &nbsp;
              <span className="font-display font-black">Cloudmix</span>
            </span>
          )}
          <div className="absolute inset-y-0 left-[25%] w-full bg-gradient-to-r from-transparent via-transparent to-neutral-50 z-5 dark:to-neutral-950" />
        </>
      )}
    </div>
  );
}
