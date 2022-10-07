import React from "react";
import "./HeaderProfile.scss";

const HeaderProfile = ({ children, name, role, toggle }) => {
  React.Children.toArray(children);
  let profile = children[0];
  let arrow = children[1];

  return (
    <div className="header-profile" data-testid="header-profile">
      <div className="header-profile__image">{profile}</div>
      <div className="header-profile__text">
        <h2 className="header-profile__name">{name}</h2>
        <p className="header-profile__role">{role}</p>
      </div>
      <div className="header-profile__arrow" onClick={toggle}>
        {arrow}
      </div>
    </div>
  );
};

export default HeaderProfile;
