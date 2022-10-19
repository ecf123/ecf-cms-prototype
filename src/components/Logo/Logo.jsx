import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
import logo from "../../assets/ECFP-company-logo.svg";

const Logo = ({ getCurrentPage }) => {
  const handleClick = () => {
    getCurrentPage("Dashboard");
  };
  return (
    <Link to="/" className="link">
      <div className="logo" onClick={handleClick}>
        <div className="logo__box">
          <img src={logo} alt="The Future Hub Logo" className="logo__image" />
        </div>
        <p className="logo__top-title">THE</p>
        <h3 className="logo__title">FUTURE HUB</h3>
      </div>
    </Link>
  );
};

export default Logo;
