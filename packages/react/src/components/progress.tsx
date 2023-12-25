import {
  Label,
  ProgressBar,
  type ProgressBarProps,
} from "react-aria-components";

export interface ProgressProps extends ProgressBarProps {
  label?: string;
}

function Progress({ label, ...props }: ProgressProps) {
  return (
    <ProgressBar {...props}>
      {({ percentage, valueText }) => (
        <div>
          <div className="flex justify-between mb-2">
            {label ? (
              <Label className="text-sm text-neutral-950 dark:text-neutral-50">
                {label}
              </Label>
            ) : (
              <div />
            )}
            <span className="text-sm text-neutral-950 dark:text-neutral-50">
              {valueText}
            </span>
          </div>
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div
              className="h-full w-full flex-1 bg-brand-500 transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      )}
    </ProgressBar>
  );
}

Progress.displayName = "Progress";

export { Progress };
