import React from 'react';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import Short from '../../components/Short/Short'
import "./LoginContainer.scss";

const LoginContainer = () => {
    //const { handleLogin } = props
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleSubmit = e => {
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
            <div>
              <label htmlFor="email-input">Email Address</label>
              <input id="email-input" type="text" />
      
            </div>
            <div>
              <label htmlFor="password-input">Password</label>
              <input id="password-input" type="text"/>

            </div>
            < Button style={"button login-black square-border"}  textStyle={"text small-text black"} buttonText={"Login"}/>
            {hasError && <div className="alert">Sorry something went wrong</div>}
          </form>
        ) : (
          <div>
            <p className="success">Thank you for submitting! We will be in touch</p>
          </div>
        )}
      </>
    );
  };
  
export default LoginContainer