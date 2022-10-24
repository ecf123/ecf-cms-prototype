import React from 'react'
import { useNavigate } from 'react-router-dom';
import profile from "../../assets/profile-picture.svg"

const RegisterPage = ({setLoggedIn, setUser}) => {
  const navigate = useNavigate();
  const user = {
    image: profile,
    name: "Brett Zieme",
    role: "Admin",
  };
  const handleClick = () => {
    setLoggedIn(true);
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