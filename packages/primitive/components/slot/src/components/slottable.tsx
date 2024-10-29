import { PropsWithChildren } from "react";

export interface SlottableProps {}

const Slottable = ({ children }: PropsWithChildren<SlottableProps>) => {
  return <>{children}</>;
};

Slottable.displayName = "Slottable";

export { Slottable };
