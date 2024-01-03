import { cloneElement, forwardRef, isValidElement } from "react";

import { combinedRef, mergeReactProps } from "../utils";

export interface SlotProps {
  children?: React.ReactNode;
}

export const Slot = forwardRef<HTMLElement, SlotProps>(
  (props, forwardedRef) => {
    const { children, ...slotProps } = props;

    if (!isValidElement(children)) {
      return null;
    }

    return cloneElement(children, {
      ...mergeReactProps(slotProps, children.props),
      // biome-ignore lint/suspicious/noExplicitAny: children can be any React component
      ref: combinedRef([forwardedRef, (children as any).ref]),
      // biome-ignore lint/suspicious/noExplicitAny: element can be any React component
    } as any);
  },
);
