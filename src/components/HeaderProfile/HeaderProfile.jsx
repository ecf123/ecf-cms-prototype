import "./HeaderProfile.scss";
import Button from "../../components/Button/Button";
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
    <div>
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
        <button>
          <img src={arrow} alt="toggle" className={arrowClass} />
        </button>
      </div>
      {displayed && (
        <div className="dropdown__items">
          <Button
            className="profile__log-out"
            style={"button white rounded-square-border border modal"}
            textStyle={"text modal-text white"}
            buttonText={"Log out"}
          />
          <Button
            className="profile__log-out"
            style={"button red rounded-square-border border modal"}
            textStyle={"text modal-text red"}
            buttonText={"Change Profile"}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
