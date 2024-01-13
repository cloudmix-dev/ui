import {} from "@heroicons/react/16/solid";
import { Toaster as BaseToaster, toast } from "sonner";

export function useToast() {
  return { toast };
}

type ToasterProps = Omit<
  React.ComponentProps<typeof BaseToaster>,
  "toastOptions"
>;

function Toaster({ closeButton = true, gap = 8, ...props }: ToasterProps) {
  return (
    <BaseToaster
      gap={gap}
      closeButton={closeButton}
      loadingIcon={
        <div role="status">
          <svg
            className="animate-spin -ml-1 mr-3 h-4 w-4 text-brand-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <title>Loading...</title>
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={4}
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      }
      {...props}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex items-center space-x-2 w-full p-4 bg-neutral-50 border border-neutral-100 rounded-lg shadow-md dark:bg-neutral-950 dark:border-neutral-800 text-sm text-neutral-950 dark:text-neutral-50",
          title: "font-semibold",
          actionButton:
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-neutral-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 h-9 px-3 bg-neutral-800 text-neutral-50 hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-neutral-300",
          cancelButton:
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-neutral-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 h-9 px-3 bg-neutral-200 text-neutral-950 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700",
          closeButton: "",
          loader: "",
        },
      }}
    />
  );
}

Toaster.displayName = "Toaster";

export { Toaster };
