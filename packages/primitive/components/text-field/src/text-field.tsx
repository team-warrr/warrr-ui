import type { ComponentProps, ForwardedRef } from "react";
import { forwardRef } from "react";

export interface TextFieldProps extends ComponentProps<"div"> {}

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    return <div ref={ref} {...props}></div>;
  }
);

TextField.displayName = "TextField";
export default TextField;
