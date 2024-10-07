import type { ComponentProps, ForwardedRef } from "react";
import { forwardRef } from "react";

export interface LoadingProps extends ComponentProps<"div"> {}

const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    return <div ref={ref} {...props}></div>;
  }
);

Loading.displayName = "Loading";
export default Loading;
