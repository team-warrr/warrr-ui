import { ChangeEvent, useState } from "react";

const useControlledValue = <
  T,
  E extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
>(
  valueProp?: T,
  defaultValue?: T,
  onChangeProp?: (e: ChangeEvent<E>) => void
) => {
  const isControlled = valueProp !== undefined;
  const [unControlledValue, setUnControlledValue] = useState(defaultValue ?? "");

  const handleChangeControlledValue = (e: ChangeEvent<E>) => {
    onChangeProp?.(e);
  };

  const handleChangeUnControlledValue = (e: ChangeEvent<E>) => {
    setUnControlledValue(e.target.value);
  };

  const value = isControlled ? valueProp : unControlledValue;
  const onChange = isControlled ? handleChangeControlledValue : handleChangeUnControlledValue;

  return { value, onChange };
};

export default useControlledValue;
