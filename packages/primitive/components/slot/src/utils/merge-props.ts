/* eslint-disable @typescript-eslint/no-explicit-any */
type AnyProps = Record<string, any>;

function isEventProp(name: string): boolean {
  return name.startsWith("on") && name[2] === name[2].toUpperCase();
}

function chainFunctions(...callbacks: any[]) {
  return (...args: any[]) => {
    callbacks.forEach((callback) => {
      if (typeof callback === "function") {
        callback(...args);
      }
    });
  };
}

function mergeClassNames(...classNames: any[]): string {
  return classNames.filter(Boolean).join(" ");
}

export function mergeProps(parentProps: AnyProps, childProps: AnyProps): AnyProps {
  const result = { ...parentProps };

  for (const propName in childProps) {
    const parentValue = parentProps[propName];
    const childValue = childProps[propName];

    if (isEventProp(propName)) {
      result[propName] = chainFunctions(parentValue, childValue);
    } else if (propName === "style") {
      result.style = { ...parentValue, ...childValue };
    } else if (propName === "className") {
      console.log(mergeClassNames(parentValue, childValue));
      result.className = mergeClassNames(parentValue, childValue);
    } else {
      result[propName] = childValue;
    }
  }

  return result;
}
