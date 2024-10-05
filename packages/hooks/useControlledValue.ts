import { ChangeEvent, useState } from "react";

const useControlledValue = <
  T,
  E extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
>(
  valueProp?: T,
  defaultValue?: T,
  onChange?: (e: ChangeEvent<E>) => void
) => {
  const isControlled = valueProp !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const value = isControlled ? valueProp : internalValue;

  const handleChange = (e: ChangeEvent<E>) => {
    if (isControlled) {
      onChange?.(e);
      return;
    }

    setInternalValue(e.target.value);
  };

  return { value, onChange: handleChange };
};

export default useControlledValue;
