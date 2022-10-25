import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const SignOut = ({setLogIn, setUser}) => {
  const navigate = useNavigate();

  useEffect(() => {
    setLogIn(false);
    setUser({})
    navigate("/")
  }, [])
  
  return (
    <></>
  )
}

export default SignOut