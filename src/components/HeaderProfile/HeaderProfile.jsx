import "./HeaderProfile.scss";
import Arrow from "../../assets/upside-down-arrow-grey.svg"

const HeaderProfile = ({ children, name, role, toggle }) => {

  return (
    <div className="header-profile">
      <div className="header-profile__image">{children}</div>
      <div className="header-profile__text">
        <h2 className="header-profile__name">{name}</h2>
        <p className="header-profile__role">{role}</p>
      </div>
      <button className="header-profile__arrow" onClick={toggle}>
        <img src={Arrow} alt="toggle" />
      </button>
    </div>
  );
};

export default HeaderProfile;
