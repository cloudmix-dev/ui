import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils";

const proseVariants = cva("prose dark:prose-invert", {
  variants: {
    size: {
      default: "prose-base",
      sm: "prose-sm",
      lg: "prose-lg",
      xl: "prose-xl",
      "2xl": "prose-2xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface ProseProps
  extends React.PropsWithChildren,
    VariantProps<typeof proseVariants> {
  className?: string;
  elementType?: "div" | "article" | "section" | "aside";
}

function Prose({ children, className, elementType = "div", size }: ProseProps) {
  const Component = elementType;

  return (
    <Component className={cn(proseVariants({ className, size }))}>
      {children}
    </Component>
  );
}

Prose.displayName = "Prose";

const proseSkeletonVariants = cva(
  "w-full rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse",
  {
    variants: {
      size: {
        default: "h-4",
        sm: "h-3",
        lg: "h-5",
        xl: "h-6",
        "2xl": "h-7",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface ProseSkeletonProps extends VariantProps<typeof proseVariants> {
  lines?: number;
}

Prose.Skeleton = function Skeleton({ lines = 1, size }: ProseSkeletonProps) {
  return (
    <div className="flex flex-col space-y-5 w-full">
      {new Array(lines).fill(null).map((_, i) => (
        <div
          key={`prose_skeleton_line_${i}`}
          className={cn(proseSkeletonVariants({ size }))}
        />
      ))}
    </div>
  );
};

// @ts-expect-error
Prose.Skeleton.displayName = "Prose.Skeleton";

export { Prose };
