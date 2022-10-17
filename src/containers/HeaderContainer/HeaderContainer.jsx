import "./HeaderContainer.scss";
import HeaderProfile from "../../components/HeaderProfile/HeaderProfile";
import PageTitle from "../../components/PageTitle/PageTitle";
const HeaderContainer = ({
  profileImg,
  name,
  role,
  toggle,
  titleSmall,
  titleLarge,
  classNameSmall,
  classNameLarge,
}) => {
  return (
    <div className="header-container">
      <div className="header-container__top">
        <PageTitle className={classNameSmall} title={titleSmall} />
        <HeaderProfile
          profileImg={profileImg}
          name={name}
          role={role}
          toggle={toggle}
        />
      </div>
      <PageTitle className={classNameLarge} title={titleLarge} />
    </div>
  );
};

export default HeaderContainer;
