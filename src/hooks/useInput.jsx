import { useState } from "react";

function useInput(defaultValue) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  function handleValueChange(value) {
    setDidEdit(true);
    setEnteredValue(value);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {enteredValue, didEdit, handleInputBlur, handleValueChange}
}
