import { CheckIcon } from "@heroicons/react/16/solid";
import cn from "classnames";
import {
  Checkbox as BaseCheckbox,
  CheckboxGroup as BaseCheckboxGroup,
  type CheckboxGroupProps as BaseCheckboxGroupProps,
  type CheckboxProps as BaseCheckboxProps,
} from "react-aria-components";

export interface CheckboxProps extends Omit<BaseCheckboxProps, "children"> {
  label: string;
}

function Checkbox({ label, className, isRequired, ...props }: CheckboxProps) {
  return (
    <BaseCheckbox
      {...props}
      className={(...args) => {
        const classNameResult =
          typeof className === "function" ? className(...args) : className;

        return cn("group data-[disabled=true]:opacity-50", classNameResult);
      }}
    >
      <span className="flex items-center space-x-2">
        <span className="flex justify-center items-center h-5 w-5 shrink-0 border border-neutral-200 bg-neutral-100 rounded-md text-neutral-950 ring-offset-neutral-50 cursor-pointer group-hover:bg-neutral-200 group-data-[focus-visible=true]:outline-none group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-brand-500 group-data-[focus-visible=true]:ring-offset-2 group-data-[disabled=true]:cursor-not-allowed group-data-[selected=true]:bg-brand-500 group-data-[selected=true]:text-brand-50 group-data-[selected=true]:border-brand-500 dark:bg-neutral-800 dark:border-neutral-700 dark:ring-offset-neutral-950 dark:group-hover:bg-neutral-700 dark:group-data-[selected=true]:bg-brand-500 dark:group-data-[selected=true]:text-brand-50 dark:group-data-[selected=true]:border-brand-500">
          <CheckIcon className="hidden h-4 w-4 group-data-[selected=true]:block" />
        </span>
        <span className="text-neutral-950 text-sm cursor-pointer group-data-[disabled=true]:cursor-not-allowed dark:text-neutral-50">
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
      </span>
    </BaseCheckbox>
  );
}

Checkbox.displayName = "Checkbox";

export interface CheckboxGroupProps extends BaseCheckboxGroupProps {
  label: string;
}

Checkbox.Group = function CheckboxGroup({
  children,
  className,
  label,
  isRequired,
  ...props
}: CheckboxGroupProps) {
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
      <BaseCheckboxGroup
        {...props}
        className={(...args) => {
          const classNameResult =
            typeof className === "function" ? className(...args) : className;

          return cn("flex flex-col space-y-2", classNameResult);
        }}
      >
        {children}
      </BaseCheckboxGroup>
    </div>
  );
};

// @ts-expect-error
Checkbox.Group.displayName = "Checkbox.Group";

export { Checkbox };
