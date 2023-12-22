import cn from "classnames";
import {
  FieldError,
  Input,
  Label,
  Text,
  TextField as BaseTextField,
  type TextFieldProps as BaseTextFieldProps,
} from "react-aria-components";

export interface TextFieldProps extends BaseTextFieldProps {
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
    <BaseTextField {...props} isRequired={isRequired}>
      {label && (
        <Label className="mb-2 text-sm text-neutral-950 dark:text-neutral-50">
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
      <Input
        className={cn(
          "flex h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-3 py-2 text-sm ring-offset-neutral-50 placeholder:text-neutral-500 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400",
          className as string,
        )}
      />
      {description && (
        <Text
          slot="description"
          className="mt-2 text-xs text-neutral-500 dark:text-neutral-400"
        >
          {description}
        </Text>
      )}
      <FieldError className="mt-2 text-xs text-red-500" />
    </BaseTextField>
  );
}

TextField.displayName = "TextField";

export { TextField };
