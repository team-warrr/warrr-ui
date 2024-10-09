import type { ElementType, ReactNode } from "react";
import { forwardRef } from "react";

type AsProp<T extends ElementType> = {
  as?: T;
};

type PolymorphicRef<T extends ElementType> = React.ComponentPropsWithRef<T>["ref"];

type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = Record<string, never>,
> = AsProp<T> &
  React.ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>;
  };

interface _LoadingProps<E extends ElementType> {
  as?: E;
  children?: ReactNode;
}

export type LoadingProps<E extends ElementType = "div"> = PolymorphicComponentProps<
  E,
  _LoadingProps<E>
>;

const Loading = forwardRef(
  <E extends ElementType = "div">(props: LoadingProps<E>, ref: PolymorphicRef<E>["ref"]) => {
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
