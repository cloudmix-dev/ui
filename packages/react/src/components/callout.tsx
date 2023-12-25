import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils";

const calloutVariants = cva("", {
  variants: {
    variant: {
      info: "text-info-500",
      warning: "text-warning-500",
      danger: "text-danger-500",
      brand: "text-brand-500",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export interface CalloutProps
  extends React.PropsWithChildren,
    VariantProps<typeof calloutVariants> {
  className?: string;
  icon?: React.ReactNode | React.ReactNode[];
  title: string;
}

function Callout({ children, className, icon, title, variant }: CalloutProps) {
  return (
    <div className="relative p-4 bg-neutral-900 rounded-lg ring-1 ring-neutral-700">
      <div className="flex space-x-4">
        {icon && (
          <div
            className={cn(
              "flex-shrink-0 w-32",
              calloutVariants({ variant, className }),
            )}
          >
            {icon}
          </div>
        )}
        <div className="flex-grow">
          <p
            className={cn(
              "mb-2 font-bold text-lg",
              calloutVariants({ variant, className }),
            )}
          >
            {title}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}

Callout.displayName = "Callout";

export { Callout };
