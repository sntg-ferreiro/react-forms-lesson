import React from "react";

export const FieldInput = ({
  label,
  htmlForTag,
  fieldIsInvalid,
  ...props
}) => {
  return (
    <div className="control no-margin">
      <label htmlFor={htmlForTag}>{label}</label>
      <input {...props} />
      <div className="control-error">
        {fieldIsInvalid && <p>{fieldIsInvalid}</p>}
      </div>
    </div>
  );
};
