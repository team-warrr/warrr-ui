import type { ElementType, ForwardedRef, ReactNode } from "react";
import { forwardRef } from "react";

export interface LoadingProps<E extends ElementType = "div"> {
  as?: E;
  children?: ReactNode;
}

const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const defaultFallback = "로딩중입니다...";
    const { as: Component = "div", children = defaultFallback, ...restProps } = props;

    return (
      <Component ref={ref} {...restProps} role="status" aria-live="polite" aria-busy="true">
        {children}
      </Component>
    );
  }
);

Loading.displayName = "Loading";
export default Loading;
