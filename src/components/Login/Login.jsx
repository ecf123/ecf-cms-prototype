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
      {!hasError && hasSubmitted && (
        <div>
          <p data-testid="success" className="login__success">
            Thank you for submitting! We will be in touch
          </p>
        </div>
      )}
      {!hasSubmitted && (
        <form
          data-testid="form"
          onSubmit={handleSubmit}
          name="form"
          className="login"
        >
          <div className="login__title">
            <h1 className="login__title--heading">Welcome Back</h1>
            <p className="login__title--text">
              Feugiat magna viverra pellentesque habitant. Libero id amet nisl,
              tellus cras eleifend et in.{" "}
            </p>
          </div>
          <div>
            <LoginInputBox
              inputBoxStyle="input-box__input short"
              labelText="Email Address"
            />
            <LoginInputBox
              inputBoxStyle="input-box__input short"
              labelText="Password"
            />
          </div>
          <Button
            style={"button login-black square-border"}
            textStyle={"text medium-text black"}
            buttonText={"Login"}
          />
          {hasError && (
            <div className="login__alert">
              <p>Sorry something went wrong </p>{" "}
            </div>
          )}
        </form>
      )}
    </>
  );
};

export default Login;
