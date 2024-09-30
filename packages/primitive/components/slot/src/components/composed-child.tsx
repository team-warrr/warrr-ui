import {
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";

import { composeRefs } from "../utils/composed-ref";
import { getElementRef } from "../utils/get-element-ref";
import { mergeProps } from "../utils/merge-props";

export interface ComposedChildProps {}

export const ComposedChild = forwardRef<HTMLElement, PropsWithChildren<ComposedChildProps>>(
  (props, ref) => {
    const { children, ...restProps } = props;

    if (isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const composedRef = ref ? composeRefs(ref, childrenRef) : childrenRef;
      const mergedProps = mergeProps(restProps, children.props);

      const { ref: _, ...mergedRestProps } = mergedProps;

      return cloneElement(children as ReactElement, {
        ...mergedRestProps,
        ref: composedRef,
      });
    }

    return Children.count(children) > 1 ? Children.only(null) : null;
  }
);

ComposedChild.displayName = "ComposedChild";
