import React from 'react';
import "./LoginCard.scss";

const LoginButton = (props) => {
    const {handleLogin} = props;

  return (
    <div className='login'>
        <form className='login__form' onSubmit={handleLogin}>

            <label htmlFor='emailAddress' className='login__header'>Email Address</label>
            <input type='text' className='login__inputBox'></input>

            <label htmlFor='password' className='login__header'>Password</label>
            <input type='text' className='login__inputBox'></input>

            <button className='login__button' onSubmit={handleLogin}>Login</button>
        </form>
        
    </div>
  )
}

export default LoginButton