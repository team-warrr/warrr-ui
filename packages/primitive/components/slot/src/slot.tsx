import React, {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  forwardRef,
  isValidElement,
} from "react";

import { ComposedChild } from "./components/composed-child";
import { isSlottable } from "./utils/is-slottable";

export interface SlotProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const Slot = forwardRef<HTMLElement, SlotProps>((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);

  if (slottable) {
    const newElement = (slottable as ReactElement).props.children;

    if (isValidElement(newElement)) {
      const newChildren = childrenArray.map((child) =>
        child === slottable ? (newElement as ReactElement).props.children : child
      );

      return (
        <ComposedChild {...slotProps} ref={forwardedRef}>
          {React.cloneElement(newElement, undefined, newChildren)}
        </ComposedChild>
      );
    }
  }

  return (
    <ComposedChild {...slotProps} ref={forwardedRef}>
      {children}
    </ComposedChild>
  );
});

Slot.displayName = "WarrrUI.Slot";

export { Slot };
