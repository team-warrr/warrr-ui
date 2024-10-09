import type { ComponentProps, ForwardedRef, ReactNode } from "react";
import { createContext, forwardRef } from "react";

import useControlledValue from "../../../../hooks/useControlledValue";
import useSafeContext from "../../../../hooks/useSafeContext";

interface TextFieldContextProps {
  isInvalid: boolean;
}

const TextFieldContext = createContext<TextFieldContextProps | null>(null);

export interface TextFieldProps {
  children: ReactNode;
  isInvalid?: boolean;
}

const TextFieldRoot = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const { children, isInvalid = false } = props;
    const contextValue = { isInvalid };

    return (
      <TextFieldContext.Provider value={contextValue}>
        <div ref={ref}>{children}</div>
      </TextFieldContext.Provider>
    );
  }
);

const Label = (props: ComponentProps<"label">) => {
  const { children, ...restProps } = props;

  return <label {...restProps}>{children}</label>;
};

const Description = (props: ComponentProps<"div">) => {
  const { children, ...restProps } = props;

  return (
    <div role="note" {...restProps}>
      {children}
    </div>
  );
};

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>((props, ref) => {
  const {
    onChange: onChangeProp,
    value: valueProp,
    defaultValue,
    type = "text",
    ...restProps
  } = props;

  const { isInvalid } = useSafeContext(TextFieldContext, "TextFieldContext");
  const { value, onChange } = useControlledValue(valueProp, defaultValue, onChangeProp);

  return (
    <input
      ref={ref}
      value={value}
      type={type}
      onChange={onChange}
      aria-invalid={isInvalid}
      {...restProps}
    />
  );
});

const ErrorMessage = (props: ComponentProps<"div">) => {
  const { children, ...restProps } = props;
  const { isInvalid } = useSafeContext(TextFieldContext, "TextFieldContext");

  return isInvalid ? (
    <div role="alert" {...restProps}>
      {children}
    </div>
  ) : null;
};

const LeftContent = (props: ComponentProps<"span">) => {
  const { children, ...restProps } = props;

  return <span {...restProps}>{children}</span>;
};

const RightContent = (props: ComponentProps<"span">) => {
  const { children, ...restProps } = props;

  return <span {...restProps}>{children}</span>;
};

const TextField = Object.assign(TextFieldRoot, {
  Label,
  Description,
  Input,
  ErrorMessage,
  LeftContent,
  RightContent,
});

export default TextField;

TextFieldRoot.displayName = "WarrrUI.TextFieldRoot";
Label.displayName = "WarrrUI.TextFieldLabel";
Description.displayName = "WarrrUI.TextFieldDescription";
Input.displayName = "WarrrUI.TextFieldInput";
ErrorMessage.displayName = "WarrrUI.TextFieldErrorMessage";
LeftContent.displayName = "WarrrUI.TextFieldLeftContent";
RightContent.displayName = "WarrrUI.TextFieldRightContent";
