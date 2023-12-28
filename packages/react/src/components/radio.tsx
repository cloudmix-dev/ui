import {
  Radio as BaseRadio,
  RadioGroup as BaseRadioGroup,
  type RadioGroupProps as BaseRadioGroupProps,
  type RadioProps as BaseRadioProps,
} from "react-aria-components";

import { cn } from "../utils";

export interface RadioProps extends Omit<BaseRadioProps, "children"> {
  label: string;
}

function Radio({ label, className, ...props }: RadioProps) {
  return (
    <BaseRadio
      {...props}
      className={(...args) => {
        const classNameResult =
          typeof className === "function" ? className(...args) : className;

        return cn("group data-[disabled=true]:opacity-50", classNameResult);
      }}
    >
      <span className="flex items-center space-x-2">
        <span className="flex justify-center items-center h-5 w-5 shrink-0 border border-neutral-200 bg-neutral-100 rounded-full text-neutral-950 ring-offset-neutral-50 cursor-pointer group-hover:bg-neutral-200 group-data-[focus-visible=true]:outline-none group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-brand-500 group-data-[focus-visible=true]:ring-offset-2 group-data-[disabled=true]:cursor-not-allowed group-data-[selected=true]:bg-brand-500 group-data-[selected=true]:text-brand-50 group-data-[selected=true]:border-brand-500 dark:bg-neutral-900 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:group-hover:bg-neutral-700 dark:group-data-[selected=true]:bg-brand-500 dark:group-data-[selected=true]:text-brand-50 dark:group-data-[selected=true]:border-brand-500">
          <span className="hidden h-1.5 w-1.5 bg-brand-50 rounded-full group-data-[selected=true]:block" />
        </span>
        <span className="text-neutral-950 text-sm cursor-pointer group-data-[disabled=true]:cursor-not-allowed dark:text-neutral-50">
          {label}
        </span>
      </span>
    </BaseRadio>
  );
}

Radio.displayName = "Radio";

export interface RadioGroupProps extends BaseRadioGroupProps {
  label: string;
}

Radio.Group = function RadioGroup({
  children,
  className,
  label,
  isRequired,
  ...props
}: RadioGroupProps) {
  return (
    <div className="flex flex-col space-y-2">
      <span className="text-neutral-950 text-sm dark:text-neutral-50">
        {label}
        {isRequired && (
          <>
            <span
              aria-hidden="true"
              className="ml-1 text-danger-500 pointer-events-none"
            >
              *
            </span>
            <span className="sr-only">(required)</span>
          </>
        )}
      </span>
      <BaseRadioGroup
        {...props}
        className={(...args) => {
          const classNameResult =
            typeof className === "function" ? className(...args) : className;

          return cn("flex flex-col space-y-2", classNameResult);
        }}
      >
        {children}
      </BaseRadioGroup>
    </div>
  );
};

// @ts-expect-error
Radio.Group.displayName = "Radio.Group";

export { Radio };
