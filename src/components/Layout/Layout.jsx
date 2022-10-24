import "./Layout.scss";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";

const Layout = ({ children, user }) => {
  const [selected, setSelected] = useState("Dashboard");
  const [displayed, setDisplayed] = useState(false);
  const [arrowClass, setArrowClass] = useState("header-profile__arrow");
  const getCurrentPage = (page) => {
    setSelected(page);
  };

const { image, name, role } = user || {};
 

  const toggle =()=>{
    setDisplayed(!displayed);
    displayed?setArrowClass("header-profile__arrow"):setArrowClass("header-profile__down-arrow")
    
  }

  return (
    <div className="layout">
      <aside className="layout__nav-bar">
        <NavBar selected={selected} getCurrentPage={getCurrentPage} />
      </aside>

      <header className="layout__header">
        <HeaderContainer
          profileImg={image}
          name={name}
          role={role}
          titleSmall={selected}
          classNameSmall="page-title page-title--small"
          toggle={toggle}
          displayed={displayed}
          arrowClass={arrowClass}
        />
      </header>

      <main className="layout__body">{children}</main>
    </div>
  );
};

export default Layout;