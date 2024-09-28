import { ChangeEvent, useEffect, useState } from "react";

const useControlledValue = <
  T,
  E extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
>(
  valueProp?: T,
  defaultValue?: T,
  onChange?: (e: ChangeEvent<E>) => void
) => {
  const [value, setValue] = useState<T | string>(valueProp ?? defaultValue ?? "");

  const isControlled = valueProp !== undefined;

  useEffect(() => {
    if (isControlled) {
      setValue(valueProp);
    }
  }, [isControlled, valueProp]);

  const handleChange = (e: ChangeEvent<E>) => {
    const newValue = e.target.value;

    if (isControlled) {
      onChange?.(e);
      return;
    }

    setValue(newValue);
  };

  return { value, onChange: handleChange };
};

export default useControlledValue;
