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

const Divider = forwardRef<HTMLDivElement | HTMLHRElement, DividerProps>((props, ref) => {
  const {
    orientation: orientationProp = DEFAULT_ORIENTATION,
    style: styleProp,
    ...restProps
  } = props;
  const isVertical = orientationProp === "vertical";

  const Component = isVertical ? "div" : "hr";
  const orientation = isVertical ? "vertical" : DEFAULT_ORIENTATION;
  const style = isVertical
    ? styleProp
    : {
        marginInline: 0,
        marginBlock: 0,
        border: "none",
        height: 0,
        color: "transparent",
        backgroundColor: "transparent",
        ...styleProp,
      };

  const typedRef = ref as ForwardedRef<
    typeof orientation extends "vertical" ? HTMLDivElement : HTMLHRElement
  >;

  return (
    <Component
      role="separator"
      aria-orientation={orientation}
      ref={typedRef}
      style={style}
      {...restProps}
    />
  );
});

Divider.displayName = "WarrrUI.Divider";
export default Divider;
