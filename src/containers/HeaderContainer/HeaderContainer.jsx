import "./HeaderContainer.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
const HeaderContainer = ({
  titleLarge,
  classNameLarge,
}) => {
  return (
    <div className="header-container">
      <PageTitle className={classNameLarge} title={titleLarge} />
    </div>
  );
};

export default HeaderContainer;