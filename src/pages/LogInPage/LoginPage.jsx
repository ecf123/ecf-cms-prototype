import React, { useState } from "react";
import Login from "../../components/Login/Login";
import profile from "../../assets/profile-picture.svg";
import "./LoginPage.scss";

const LoginPage = ({ setUser, setLogIn }) => {
  const [credential, setCredential] = useState({});

  if (Object.keys(credential).length != 0) {
    const user = {
      image: profile,
      name: "Brett Zieme",
      role: "Admin",
    };
    setUser(user);
  }

  return (
    <div className="loginPage">
      <Login setCredential={setCredential} setLogIn={setLogIn} />
    </div>
  );
};

export default LoginPage;
