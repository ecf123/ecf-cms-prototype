import "./HeaderProfile.scss";
import Button from "../../components/Button/Button"
import arrow from "../../assets/upside-down-arrow-grey.svg";

const HeaderProfile = ({ profileImg, name, role, toggle ,displayed}) => {
  return (
    <div>
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
      <button  onClick={toggle}>
        <img src={arrow} alt="toggle" className="drop-down__arrow" />
      </button>
      </div>
      {displayed &&<Button
          className="profile__log-out"
          style={"button white rounded-square-border border modal"}
          textStyle={"text modal-text white"}
          buttonText={"Log out"}
        />}
    </div>
  );
};

export default HeaderProfile;
