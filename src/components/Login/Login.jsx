import "./Login.scss";
import { useState } from "react";
import Button from "../Button/Button";
import LoginInputBox from "../LoginInputBox/LoginInputBox";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = ({ setCredential, setLogIn }) => {
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
    setLogIn(true);

    const user = {
      email: email,
      password: password,
    };
    setCredential(user);
    setHasSubmitted(true);
  };

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [hasSubmitted]);

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
              Log into your account to access the CMS for the ECF Future Hub App.
            </p>
          </div>
          <div>
            <LoginInputBox
              labelText="Email Address"
              inputType="email"
              labelId="email"
            />
            <LoginInputBox
              labelText="Password"
              inputType="password"
              labelId="password"
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
