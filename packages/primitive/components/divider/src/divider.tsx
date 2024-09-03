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
    const { orientation: orientaionProp = DEFAULT_ORIENTATION, ...restProps } = rest;
    const isVertical = orientaionProp === "vertical";

    const tag = isVertical ? "div" : "hr";
    const orientaion = isVertical ? "vertical" : DEFAULT_ORIENTATION;

    return createElement(tag, {
      role: "separator",
      "aria-orientaion": orientaion,
      ref,
      ...restProps,
    });
  }
);

Divider.displayName = "WarrrUI.Divider";
export default Divider;
