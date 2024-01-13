import {
  FieldError,
  Input,
  type InputProps as BaseInputProps,
  Label,
  Text,
  TextField as BaseTextField,
  type TextFieldProps as BaseTextFieldProps,
} from "react-aria-components";

import { cn } from "../utils";

export interface TextFieldProps
  extends Omit<
      BaseInputProps,
      | "children"
      | "className"
      | "defaultValue"
      | "onBlur"
      | "onChange"
      | "onFocus"
      | "onKeyDown"
      | "onKeyUp"
      | "slot"
      | "step"
      | "style"
      | "type"
      | "value"
    >,
    BaseTextFieldProps {
  description?: string;
  label?: string;
}

function TextField({
  className,
  description,
  label,
  isRequired,
  ...props
}: TextFieldProps) {
  return (
    <BaseTextField
      {...props}
      className={(...args) => {
        const classNameResult =
          typeof className === "function" ? className(...args) : className;

        return cn("flex flex-col space-y-2", classNameResult);
      }}
      isRequired={isRequired}
    >
      {label && (
        <Label className="text-sm text-neutral-950 dark:text-neutral-50">
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
        </Label>
      )}
      <Input className="flex h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-3 py-2 text-sm ring-offset-neutral-50 placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400" />
      {description && (
        <Text
          slot="description"
          className="text-xs text-neutral-500 dark:text-neutral-400"
        >
          {description}
        </Text>
      )}
      <FieldError className="text-xs text-red-500" />
    </BaseTextField>
  );
}

TextField.displayName = "TextField";

export interface TextFieldSkeletonProps {
  description?: boolean;
  label?: boolean;
}

TextField.Skeleton = function TextFieldSkeleton({
  description,
  label,
}: TextFieldSkeletonProps) {
  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <div className="h-4 w-28 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      )}
      <div className="inline-block h-10 w-48 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse" />

      {description && (
        <div className="h-3 w-40 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      )}
    </div>
  );
};

// @ts-expect-error
TextField.Skeleton.displayName = "TextField.Skeleton";

export { TextField };
