import { FieldInput } from "./FieldInput";
import { isEmail, hasMinLength, isNotEmpty } from "../util/validation.js";
import { useInput } from "../hooks/useInput.jsx";

export default function StateLogin() {
  // const { enteredEmail, enteredPassword } = enteredValues;
  const {
    value: enteredEmail,
    handleValueChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    valueIsInvalid: emailIsInvalid,
  } = useInput("", (e) => !isEmail(e) && isNotEmpty(e));

  const {
    value: enteredPassword,
    handleValueChange: handlePassChange,
    handleInputBlur: handlePassBlur,
    valueIsInvalid: passwordIsInvalid
  } = useInput(
    "",
    (p) => !hasMinLength(p, 4)
  );

    function handleSubmit(event) {
      event.preventDefault();

      if (emailIsInvalid || passwordIsInvalid) {
        console.log("ERROR ON SUBMIT");
        return;
      }
      const enteredValues = { enteredEmail, enteredPassword };
      console.log(enteredValues);
    };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <FieldInput
          id="email"
          type="email"
          name="email"
          htmlForTag="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={enteredEmail}
          fieldIsInvalid={emailIsInvalid && "Please check the entered email"}
          label="Email"
        />

        <FieldInput
          id="password"
          type="password"
          name="password"
          onBlur={handlePassBlur}
          onChange={handlePassChange}
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
