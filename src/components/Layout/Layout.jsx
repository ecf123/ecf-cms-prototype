import NavBar from "../NavBar/NavBar";
import "./Layout.scss";

const Layout = ({ children }) => {
  return <div className="layout"><NavBar />{children}</div>;
};

export default Layout;
