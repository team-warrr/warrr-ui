import type { ComponentProps, ForwardedRef } from "react";
import { forwardRef } from "react";

export interface DividerProps extends ComponentProps<"div"> {}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ ...rest }, ref: ForwardedRef<HTMLDivElement>) => {
    return <div ref={ref} {...rest}></div>;
  }
);

Divider.displayName = "Divider";
export default Divider;
