import { useState } from "react";

export function useInput(defaultValue, validator) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsInvalid = didEdit && validator(enteredValue)

  function handleValueChange(event) {
    setDidEdit(false);
    setEnteredValue(event.target.value);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {value: enteredValue, handleInputBlur, handleValueChange, valueIsInvalid}
}
