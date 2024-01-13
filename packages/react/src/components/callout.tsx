import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils";

const calloutVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm shadow-md",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-100 text-neutral-950 border-neutral-200 dark:bg-neutral-900 dark:text-neutral-50 dark:border-neutral-800",
        info: "bg-info-50 text-info-950 border-info-100 dark:bg-info-950 dark:text-info-50 dark:border-info-900",
        warning:
          "bg-warning-50 text-warning-950 border-warning-100 dark:bg-warning-950 dark:text-warning-50 dark:border-warning-900",
        danger:
          "bg-danger-50 text-danger-950 border-danger-100 dark:bg-danger-950 dark:text-danger-50 dark:border-danger-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const calloutTitleVariants = cva("mb-2 font-bold text-lg", {
  variants: {
    variant: {
      default: "text-brand-600 dark:text-brand-500",
      info: "text-info-600 dark:text-info-500",
      warning: "text-warning-600 dark:text-warning-500",
      danger: "text-danger-600 dark:text-danger-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const calloutIconVariants = cva("flex-shrink-0 w-6 pt-2", {
  variants: {
    variant: {
      default: "text-brand-600 dark:text-brand-500",
      info: "text-info-600 dark:text-info-500",
      warning: "text-warning-600 dark:text-warning-500",
      danger: "text-danger-600 dark:text-danger-500",
    },
  },
  defaultVariants: {
    variant: "default",
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
    <div role="alert" className={cn(calloutVariants({ variant, className }))}>
      <div className="flex space-x-4">
        {icon && (
          <div className={cn(calloutIconVariants({ variant, className }))}>
            {icon}
          </div>
        )}
        <div className="flex-grow">
          <p className={cn(calloutTitleVariants({ variant, className }))}>
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

// <div
//   role="alert"
//   class="relative w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm [&amp;:has(svg)]:pl-11 [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-neutral-950 dark:border-neutral-800 dark:[&amp;>svg]:text-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50 bg-neutral-100 shadow-md"
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke-width="1.5"
//     stroke="currentColor"
//     class="w-4 h-4"
//   >
//     <title>Rocket icon</title>
//     <path
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
//     ></path>
//   </svg>
//   <h5 class="mb-1 font-medium leading-none tracking-tight">
//     Workertown is coming...
//   </h5>
//   <div class="text-sm [&amp;_p]:leading-relaxed">
//     <p>
//       Our new library for building modern, scalable architectures on the edge.
//     </p>
//     <a class="underline" href="https://workertown.cloudmix.dev">
//       Take a peak at the (unfinished) docs →
//     </a>
//   </div>
// </div>;
