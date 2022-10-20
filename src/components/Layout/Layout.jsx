import "./Layout.scss";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import profile from "../../assets/profile-picture.svg";

const Layout = ({ children }) => {
  const [selected, setSelected] = useState("Dashboard");
  const getCurrentPage = (page) => {
    setSelected(page);
  };

  //const { image, name, role } = user || {};

  const user = {
    image: profile,
    name: "Brett Zieme",
    role: "Admin",
  };

  return (
    <div className="layout">
      <aside className="layout__nav-bar">
        <NavBar selected={selected} getCurrentPage={getCurrentPage} />
      </aside>

      <header className="layout__header">
        <HeaderContainer
          profileImg={user.image}
          name={user.name}
          role={user.role}
          titleSmall={selected}
          classNameSmall="page-title page-title--small"
        />
      </header>

      <main className="layout__body">{children}</main>
    </div>
  );
};

export default Layout;
