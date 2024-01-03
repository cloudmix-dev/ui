import { type ClassValue, clsx } from "clsx";
import { useCallback } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// biome-ignore lint/suspicious/noExplicitAny: props can be of any shape
type AnyProps = Record<string, any>;

// Lifted from: https://github.com/ally-ui/ally-ui/blob/main/packages/common/react/lib/mergeReactProps.ts
export function mergeReactProps(parentProps: AnyProps, childProps: AnyProps) {
  // All child props should override.
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const parentPropValue = parentProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    // If it's a handler, modify the override by composing the base handler.
    if (isHandler) {
      // Only compose the handlers if both exist.
      if (childPropValue && parentPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue?.(...args);
          parentPropValue?.(...args);
        };
        // Otherwise, avoid creating an unnecessary callback.
      } else if (parentPropValue) {
        overrideProps[propName] = parentPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...parentPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [parentPropValue, childPropValue]
        .filter(Boolean)
        .join(" ");
    }
  }

  return { ...parentProps, ...overrideProps };
}

// Lifted from: https://github.com/ally-ui/ally-ui/blob/main/packages/common/react/lib/useMultipleRefs.react.tsx
/**
 * Handles setting callback refs and MutableRefObjects.
 * @param ref The ref to use for the instance.
 * @param instance The instance being set.
 */
function setRef<TInstance>(ref: React.Ref<TInstance>, instance: TInstance) {
  if (ref instanceof Function) {
    ref(instance);
  } else if (ref != null) {
    (ref as React.MutableRefObject<TInstance>).current = instance;
  }
}

export function combinedRef<TInstance>(refs: React.Ref<TInstance>[]) {
  return (instance: TInstance | null) => {
    for (const ref of refs) {
      setRef(ref, instance);
    }
  };
}

// CREDIT https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/composeRefs.tsx
/**
 * Create a ref that passes its instance to multiple refs.
 * @param refs The refs that should receive the instance.
 * @returns The combined ref.
 */
export function useMultipleRefs<TInstance>(...refs: React.Ref<TInstance>[]) {
  return useCallback(combinedRef(refs), refs);
}
