import { useState } from "react";
import { FieldInput } from "./FieldInput";
import { isEmail, hasMinLength, isNotEmpty } from "../util/validation.js";

export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    enteredEmail: "",
    enteredPassword: "",
  });
  const { enteredEmail, enteredPassword } = enteredValues;

  const [didEdit, setDidEdit] = useState({
    enteredEmail: false,
    enteredPassword: false,
  });

  const emailIsInvalid =
    didEdit.enteredEmail && !isEmail(enteredEmail) && isNotEmpty(enteredEmail);
  const passwordIsInvalid =
    didEdit.enteredPassword &&
    isNotEmpty(enteredPassword) &&
    !hasMinLength(enteredPassword, 4);

  function handleSubmit(event) {
    event.preventDefault();

    if (emailIsInvalid || passwordIsInvalid) {
      console.log("ERROR ON SUBMIT");
      return;
    }
    console.log(enteredValues);
  }

  function handleValueChange(value, identifier) {
    setDidEdit((prev) => ({ ...prev, [identifier]: false }));
    setEnteredValues((prev) => ({ ...prev, [identifier]: value }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prev) => ({ ...prev, [identifier]: true }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <FieldInput
          id="email"
          type="email"
          name="email"
          htmlForTag="email"
          onBlur={() => handleInputBlur("enteredEmail")}
          onChange={(event) =>
            handleValueChange(event.target.value, "enteredEmail")
          }
          value={enteredEmail}
          fieldIsInvalid={emailIsInvalid && "Please check the entered email"}
          label="Email"
        />

        <FieldInput
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("enteredPassword")}
          onChange={(event) =>
            handleValueChange(event.target.value, "enteredPassword")
          }
          value={enteredPassword}
          fieldIsInvalid={
            passwordIsInvalid && "Please check the entered password"
          }
          label="Password"
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
