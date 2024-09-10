/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, Ref } from "react";

export function getElementRef(element: ReactElement): Ref<any> | null {
  if (element == null || typeof element !== "object") {
    return null;
  }

  if ("ref" in element) {
    return (element as any).ref;
  }

  if ("props" in element && element.props && "ref" in element.props) {
    return element.props.ref;
  }

  return null;
}
