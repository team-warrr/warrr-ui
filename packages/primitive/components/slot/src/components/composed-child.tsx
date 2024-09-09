import {
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";

import { composeRefs } from "../utils/composedRef";
import { getElementRef } from "../utils/getElementRef";
import { mergeProps } from "../utils/mergeProps";

export interface SlotCloneProps {}

const ComposedChild = forwardRef<HTMLElement, PropsWithChildren<SlotCloneProps>>(
  (props, forwardedRef) => {
    const { children, ...slotProps } = props;

    if (isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const composedRef = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      const mergedProps = mergeProps(slotProps, children.props);

      const { ref: _, ...restProps } = mergedProps;

      return cloneElement(children as ReactElement, {
        ...restProps,
        ref: composedRef,
      });
    }

    return Children.count(children) > 1 ? Children.only(null) : null;
  }
);

ComposedChild.displayName = "ComposedChild";

export { ComposedChild };