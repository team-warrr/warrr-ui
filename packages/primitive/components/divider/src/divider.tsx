import type { ComponentProps, ForwardedRef } from "react";
import { createElement, forwardRef } from "react";

const DEFAULT_ORIENTATION = "horizontal";

type Orientation = "horizontal" | "vertical";
type DivProps = ComponentProps<"div">;
type HrProps = ComponentProps<"hr">;
export type DividerProps = DivProps &
  HrProps & {
    orientation?: Orientation;
  };

const Divider = forwardRef<HTMLDivElement | HTMLHRElement, DividerProps>(
  ({ ...rest }, ref: ForwardedRef<HTMLDivElement | HTMLHRElement>) => {
    const { orientation: orientationProp = DEFAULT_ORIENTATION, ...restProps } = rest;
    const isVertical = orientationProp === "vertical";

    const tag = isVertical ? "div" : "hr";
    const orientation = isVertical ? "vertical" : DEFAULT_ORIENTATION;

    return createElement(tag, {
      role: "separator",
      "aria-orientation": orientation,
      ref,
      ...restProps,
    });
  }
);

Divider.displayName = "WarrrUI.Divider";
export default Divider;
