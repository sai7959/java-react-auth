import React from "react";
import InputFieldStyle from "./InputField.module.css";
function InputField({ placeholder }) {
  return (
    <div className={InputFieldStyle.container}>
      <label>{placeholder}</label>
      <input placeholder={placeholder} />
    </div>
  );
}

export default InputField;
