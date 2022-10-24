import "./Login.scss";
import { useState } from "react";
import Button from "../Button/Button";
import LoginInputBox from "../LoginInputBox/LoginInputBox";

const Login = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    if (!email || !password) {
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
              tellus cras eleifend et in.
            </p>
          </div>
          <div>
            <LoginInputBox
              inputBoxStyle="input-box__input short"
              labelText="Email Address"
              inputType="email"
            />
            <LoginInputBox
              inputBoxStyle="input-box__input short"
              labelText="Password"
              inputType="password"
            />
            {hasError && (
              <div>
                <p className="login__alert">Sorry something went wrong </p>
              </div>
            )}
          </div>

          <Button
            style={"button login-black square-border"}
            textStyle={"text medium-text black"}
            buttonText={"Login"}
          />
        </form>
      )}
    </>
  );
};

export default Login;
