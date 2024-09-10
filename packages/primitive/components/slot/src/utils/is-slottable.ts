import { ReactElement, ReactNode, isValidElement } from "react";

import { Slottable } from "../components/slottable";

export function isSlottable(child: ReactNode): child is ReactElement {
  return isValidElement(child) && child.type === Slottable;
}
