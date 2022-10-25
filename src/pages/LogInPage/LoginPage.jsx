import React, { useEffect, useState } from "react";
import Login from "../../components/Login/Login";
import profile from "../../assets/profile-picture.svg";
import "./LoginPage.scss";

const LoginPage = ({ setUser, setLogIn }) => {
  const [credential, setCredential] = useState({});

  useEffect(() => {
    const user = {
        image: profile,
        name: "Brett Zieme",
        role: "Admin",
    };
    setUser(user);
  }, [credential])
  

  return (
    <div className="loginPage">
      <Login setCredential={setCredential} setLogIn={setLogIn} />
    </div>
  );
};

export default LoginPage;
