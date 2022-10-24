import "./HeaderProfile.scss";
import { Link } from "react-router-dom";
import arrow from "../../assets/upside-down-arrow-grey.svg";

const HeaderProfile = ({
  profileImg,
  name,
  role,
  toggle,
  displayed,
  arrowClass,
}) => {
  return (
    <div className="dropdown">
      <div className="header-profile" onClick={toggle}>
        <img
          className="header-profile__image"
          src={profileImg}
          alt="user avatar"
        />
        <div className="header-profile__text">
          <h2 className="header-profile__name">{name}</h2>
          <p className="header-profile__role">{role}</p>
        </div>
          <img src={arrow} alt="toggle" className={arrowClass} />
      </div>
      {displayed && (
        <div className="dropdown__items">
          <p className="dropdown__item-blank"></p>
          <Link className="dropdown__link" to={'/*'}><p className="dropdown__item">change profile</p></Link>
          <Link className="dropdown__link" to={'/*2'}><p className="dropdown__item">Log out</p></Link>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
