import type { ComponentProps, ForwardedRef } from "react";
import { forwardRef } from "react";

const DEFAULT_ORIENTATION = "horizontal";

type Orientation = "horizontal" | "vertical";
type DivProps = ComponentProps<"div">;
type HrProps = ComponentProps<"hr">;
export type DividerProps = DivProps &
  HrProps & {
    orientation?: Orientation;
  };

const Divider = forwardRef<HTMLDivElement | HTMLHRElement, DividerProps>(
  ({ ...rest }, ref: unknown) => {
    const { orientation: orientationProp = DEFAULT_ORIENTATION, ...restProps } = rest;
    const isVertical = orientationProp === "vertical";

    const Component = isVertical ? "div" : "hr";
    const orientation = isVertical ? "vertical" : DEFAULT_ORIENTATION;
    const refProp = ref as ForwardedRef<
      typeof orientation extends "vertical" ? HTMLDivElement : HTMLHRElement
    >;

    return (
      <Component role="separator" aria-orientation={orientation} ref={refProp} {...restProps} />
    );
  }
);

Divider.displayName = "WarrrUI.Divider";
export default Divider;
