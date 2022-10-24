import React from 'react'
import { useNavigate } from 'react-router-dom';
import profile from "../../assets/profile-picture.svg"

const LoginPage = ({setLoggedIn, setUser}) => {
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
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default LoginPage