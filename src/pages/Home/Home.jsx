import React from 'react';
import "./Home.scss";
import LoginContainer from '../../Container/LoginContainer/LoginContainer';


import { useState } from "react";



const Home = () => {

  const [info, setInfo] = useState({
    emailAddress: "",
    password: "",
  })

  const handleLogin = event => {
    const char = "@";
    event.preventDefault();
    let emailAddress = event.target[0].value;
    let password = event.target[1].value;


    if(!emailAddress.includes(char)) {
      alert("Please input valid email address.")
    } 
    else if(password.length <= 10) {
      alert("The password length should be longer than 10.")
    } 
    else if(emailAddress.length > 10 && password.length < 10) {
      alert("The password length should be longer than 10.")
    }
    else {
      alert("Wlecome!")
      setInfo({emailAddress, password})
    }
  }

  
  return (
    <div className='home'>
      
      <LoginContainer emailAddress = {info.emailAddress} password = {info.password} handleLogin = {handleLogin}/>
     
    </div>
  )
}

export default Home

