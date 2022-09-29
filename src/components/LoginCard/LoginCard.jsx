import React from 'react';
import "./LoginCard.scss";

const LoginButton = (props) => {
    const {handleLogin} = props;

  return (
    <div className='login'>
        <form className='login__form' onSubmit={handleLogin} name="form">

          <div>
            <label htmlFor='emailAddress' className='login__header' >Email Address</label>
            <input type='text' className='login__inputBox' role='form'/>
          </div>

          <div>
            <label htmlFor='password' className='login__header'>Password</label>
            <input type='text' className='login__inputBox'></input>
          </div>

            <button className='login__button' onSubmit={handleLogin}>Login</button>
        </form>
        
    </div>
  )
}

export default LoginButton;