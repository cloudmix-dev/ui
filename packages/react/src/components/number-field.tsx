import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import {
  Button,
  FieldError,
  Group,
  Input,
  type InputProps as BaseInputProps,
  Label,
  NumberField as BaseNumberField,
  type NumberFieldProps as BaseNumberFieldProps,
  Text,
} from "react-aria-components";

import { cn } from "../utils";

export interface NumberFieldProps
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
      | "value"
    >,
    BaseNumberFieldProps {
  description?: string;
  label?: string;
}

function NumberField({
  className,
  description,
  label,
  isRequired,
  ...props
}: NumberFieldProps) {
  return (
    <BaseNumberField
      {...props}
      className={(...args) => {
        const classNameResult =
          typeof className === "function" ? className(...args) : className;

        return cn("group flex flex-col space-y-2", classNameResult);
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
      <Group className="flex h-10 w-full text-neutral-950 rounded-md border border-neutral-200 bg-neutral-100 ring-offset-neutral-50 focus-within:ring-2 focus-within:ring-brand-500 focus-within:ring-offset-2 group-disabled:cursor-not-allowed group-disabled:opacity-50 dark:bg-neutral-900 dark:text-neutral-50 dark:border-neutral-800 dark:ring-offset-neutral-950">
        <Input className="flex-grow h-full px-3 py-2 bg-transparent text-sm placeholder:text-neutral-500 focus:outline-none group-disabled:cursor-not-allowed dark:placeholder:text-neutral-400" />
        <div className="shrink-0 flex flex-col">
          <Button
            slot="increment"
            className="flex justify-center items-center h-5 w-5 border-l border-b border-neutral-200 hover:bg-neutral-200 focus:outline-none group-disabled:cursor-not-allowed dark:border-neutral-800 dark:hover:bg-neutral-800"
          >
            <PlusIcon className="h-3 w-3" />
          </Button>
          <Button
            slot="decrement"
            className="flex justify-center items-center h-5 w-5 border-l border-b border-neutral-200 hover:bg-neutral-200 focus:outline-none group-disabled:cursor-not-allowed dark:border-neutral-800 dark:hover:bg-neutral-800"
          >
            <MinusIcon className="h-3 w-3" />
          </Button>
        </div>
      </Group>
      {description && (
        <Text
          slot="description"
          className="text-xs text-neutral-500 dark:text-neutral-400"
        >
          {description}
        </Text>
      )}
      <FieldError className="text-xs text-red-500" />
    </BaseNumberField>
  );
}

NumberField.displayName = "NumberField";

export interface NumberFieldSkeletonProps {
  description?: boolean;
  label?: boolean;
}

NumberField.Skeleton = function NumberFieldSkeleton({
  description,
  label,
}: NumberFieldSkeletonProps) {
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
NumberField.Skeleton.displayName = "NumberField.Skeleton";

export { NumberField };
