import "./Layout.scss";
import NavBar from "../NavBar/NavBar";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import { useState } from "react";

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
        <h1 className="layout__header--title">{selected}</h1>
        <HeaderProfile name={name} profileImg={image} role={role} />
      </header>

      <main className="layout__body">{children}</main>
    </div>
  );
};

export default Layout;
