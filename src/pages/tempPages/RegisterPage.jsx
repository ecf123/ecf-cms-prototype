import React from 'react'
import { useNavigate } from 'react-router-dom';
import profile from "../../assets/profile-picture.svg"

const RegisterPage = ({setLogIn, setUser}) => {
  const navigate = useNavigate();
  const user = {
    image: profile,
    name: "Brett Zieme",
    role: "Admin",
  };
  const handleClick = () => {
    setLogIn(true);
    setUser(user)
    navigate("/")
  }
  return (
    <div>
      <button onClick={handleClick}>Register</button>
    </div>
  )
}

export default RegisterPage