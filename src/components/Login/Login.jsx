import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import LoginInputBox from "../LoginInputBox/LoginInputBox";
import "./Login.scss";

const Login = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    if (!email || !password || !email.includes("@")) {
      setHasError(true);
      return;
    }

    setHasError(false);
    setHasSubmitted(true);
  };

  return (
    <>
      {!hasSubmitted ? (
        <form onSubmit={handleSubmit} name="form">
          <div className="title">
            <h1 className="title__heading">Welcome Back</h1>
            <p className='title__text'>Feugiat magna viverra pellentesque habitant. Libero id amet nisl, tellus cras eleifend et in. </p>
          </div>
          <div className="input">
            <LoginInputBox className="input__email" labelText={"Email Address"} />
            <LoginInputBox className="input__password" labelText={"Password"}/>
          </div>
          <Button
            style={"button login-black square-border"}
            textStyle={"text small-text black"}
            buttonText={"Login"}
          />
          {hasError && <div className="alert">Sorry something went wrong</div>}
        </form>
      ) : (
        <div>
          <p className="success">
            Thank you for submitting! We will be in touch
          </p>
        </div>
      )}
    </>
  );
};

export default Login;
