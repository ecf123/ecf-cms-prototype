import "./HeaderProfile.scss";
import arrow from "../../assets/upside-down-arrow-grey.svg";

const HeaderProfile = ({ profileImg, name, role, toggle }) => {
  return (
    <div className="header-profile">
      <img
        className="header-profile__image"
        src={profileImg}
        alt="user avatar"
      />
      <div className="header-profile__text">
        <h2 className="header-profile__name">{name}</h2>
        <p className="header-profile__role">{role}</p>
      </div>
      <button className="header-profile__arrow" onClick={toggle}>
        <img src={arrow} alt="toggle" />
      </button>
    </div>
  );
};

export default HeaderProfile;
