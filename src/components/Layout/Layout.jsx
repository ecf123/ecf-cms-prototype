import "./Layout.scss";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import AddLessonAdditionalBoxes from "../AddLessonAdditionalBoxes/AddLessonAdditionalBoxes";

const Layout = ({ children, user }) => {
  const [selected, setSelected] = useState("Dashboard");
  const getCurrentPage = (page) => {
    setSelected(page);
  };

  const { image, name, role } = user || {};

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
        />
      </header>

      <AddLessonAdditionalBoxes />

      <main className="layout__body">{children}</main>
    </div>
  );
};

export default Layout;
