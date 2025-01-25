import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import AuthStyles from "../Auth.module.css";

import ReactIcon from "../../../images/react.svg";
import SpringIcon from "../../../images/spring.svg";

import InputField from "../../../components/InputField";
import Button from "../../../components/Button";

function SignupPage() {
  const [isButtonsDisabled, setIsButtonDisabled] = useState(false);
  let inputRef = useRef(null);

  const inputFieldData = [
    { id: 1, placeholder: "Enter your email" },
    { id: 2, placeholder: "Enter your password" },
    { id: 3, placeholder: "Re-enter your password" },
  ];
  const buttonOptions = [
    {
      placeholder: "Signup with JWT",
      type: "primary",
      onClick: () => handleSignup("JWT"),
      className: "btn-primary",
    },
    {
      placeholder: "Signup with cookies",
      type: "secondary",
      onClick: () => handleSignup("cookies"),
      className: "btn-secondary",
    },
    {
      placeholder: "Signup with OAuth",
      type: "tertiary",
      onClick: () => handleSignup("OAuth"),
      className: "btn-tertiary",
    },
  ];

  return (
    <div className={AuthStyles.container}>
      <div className={AuthStyles.form}>
        <h1>
          Auth with <img src={ReactIcon} />+<img src={SpringIcon} />
        </h1>
        <form>
          {inputFieldData.map((element) => {
            return <InputField placeholder={element.placeholder} />;
          })}
          <div className={AuthStyles.buttons_container}>
            {buttonOptions.map((element) => {
              return <Button placeholder={element.placeholder} />;
            })}
          </div>
        </form>
        <span>
          Old user? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default SignupPage;
