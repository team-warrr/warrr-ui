import type { ComponentProps, ForwardedRef } from "react";
import { forwardRef } from "react";

const DEFAULT_ORIENTATION = "horizontal";

type Orientation = "horizontal" | "vertical";
export interface DividerProps extends ComponentProps<"div"> {
  orientation?: Orientation;
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ ...rest }, ref: ForwardedRef<HTMLDivElement>) => {
    const { orientation: orientaionProp = DEFAULT_ORIENTATION, ...restProps } = rest;
    const orientaion = orientaionProp === "vertical" ? "vertical" : DEFAULT_ORIENTATION;

    return <div role="separator" aria-orientation={orientaion} ref={ref} {...restProps} />;
  }
);

Divider.displayName = "Divider";
export default Divider;
