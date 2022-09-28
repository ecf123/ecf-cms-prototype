import React from 'react';
import "./LoginContainer.scss";
import Title from '../../components/Title/Title';

import LoginCard from '../../components/LoginCard/LoginCard';


const LoginContainer = (props) => {
    const { handleLogin } = props;
    
  return (
    <div className='container'>

        <Title />
        <LoginCard handleLogin = {handleLogin}/>
        
    </div>
  )
}

export default LoginContainer