import { type VariantProps, cva } from "class-variance-authority";
import cn from "classnames";
import { Text, type TextProps } from "react-aria-components";

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

export type ProseItemProps = TextProps;

Prose.P = function P({ children, className }: ProseItemProps) {
  return (
    <Text elementType="p" className={className}>
      {children}
    </Text>
  );
};

// @ts-expect-error
Prose.P.displayName = "Prose.P";

Prose.Strong = function Strong({ children, className }: ProseItemProps) {
  return (
    <Text elementType="strong" className={className}>
      {children}
    </Text>
  );
};

// @ts-expect-error
Prose.Strong.displayName = "Prose.Strong";

Prose.Em = function Em({ children, className }: ProseItemProps) {
  return (
    <Text elementType="em" className={className}>
      {children}
    </Text>
  );
};

// @ts-expect-error
Prose.Em.displayName = "Prose.Em";

Prose.H1 = function H1({ children, className }: ProseItemProps) {
  return (
    <Text elementType="h1" className={className}>
      {children}
    </Text>
  );
};

// @ts-expect-error
Prose.H1.displayName = "Prose.H1";

Prose.H2 = function H2({ children, className }: ProseItemProps) {
  return (
    <Text elementType="h2" className={className}>
      {children}
    </Text>
  );
};

// @ts-expect-error
Prose.H2.displayName = "Prose.H2";

Prose.H3 = function H3({ children, className }: ProseItemProps) {
  return (
    <Text elementType="h3" className={className}>
      {children}
    </Text>
  );
};

// @ts-expect-error
Prose.H3.displayName = "Prose.H3";

Prose.H4 = function H4({ children, className }: ProseItemProps) {
  return (
    <Text elementType="h4" className={className}>
      {children}
    </Text>
  );
};

// @ts-expect-error
Prose.H4.displayName = "Prose.H4";

Prose.UL = function UL({ children, className }: ProseItemProps) {
  return <ul className={className}>{children}</ul>;
};

// @ts-expect-error
Prose.UL.displayName = "Prose.UL";

Prose.OL = function OL({ children, className }: ProseItemProps) {
  return <ol className={className}>{children}</ol>;
};

// @ts-expect-error
Prose.OL.displayName = "Prose.OL";

Prose.LI = function LI({ children, className }: ProseItemProps) {
  return (
    <Text elementType="li" className={className}>
      {children}
    </Text>
  );
};

// @ts-expect-error
Prose.LI.displayName = "Prose.LI";

Prose.Blockquote = function Blockquote({
  children,
  className,
}: ProseItemProps) {
  return (
    <blockquote className={className}>
      <Text elementType="p">{children}</Text>
    </blockquote>
  );
};

// @ts-expect-error
Prose.Blockquote.displayName = "Prose.Blockquote";

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
