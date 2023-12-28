import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils";

const avatarVariants = cva(
  "rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden",
  {
    variants: {
      size: {
        default: "h-8 w-8",
        sm: "h-6 w-6",
        lg: "h-10 w-10",
        xl: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
  alt?: string;
  className?: string;
  indicator?: "neutral" | "success" | "error";
  src?: string;
}

function Avatar({
  alt,
  className,
  indicator,
  size,
  src,
  ...props
}: AvatarProps) {
  let indicatorClassName =
    "absolute right-0 bottom-0 block h-2 w-2 rounded-full ring-2 ring-neutral-50 dark:ring-neutral-900";

  if (indicator === "neutral") {
    indicatorClassName = `${indicatorClassName} bg-neutral-300 dark:bg-neutral-600`;
  } else if (indicator === "success") {
    indicatorClassName = `${indicatorClassName} bg-success-500`;
  } else if (indicator === "error") {
    indicatorClassName = `${indicatorClassName} bg-danger-500`;
  }

  return (
    <span className="relative inline-block" title={alt} {...props}>
      <img
        className={cn(avatarVariants({ size, className }))}
        src={src}
        alt={alt}
      />
      {indicator && <span className={indicatorClassName} />}
    </span>
  );
}

Avatar.displayName = "Avatar";

export interface AvatarGroupProps extends React.PropsWithChildren {
  className?: string;
}

Avatar.Group = function AvatarGroup({ children, className }: AvatarGroupProps) {
  return (
    <div className={cn("flex -space-x-1 overflow-hidden", className)}>
      {children}
    </div>
  );
};

// @ts-expect-error
Avatar.Group.displayName = "Avatar.Group";

export { Avatar };
