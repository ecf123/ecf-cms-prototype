import MoreOption from "../MoreOptions/MoreOption";
import "./Layout.scss";


const Layout = ({ children }) => {
  return <div className="layout"><MoreOption item="bob"></MoreOption>{children}</div>;
};

export default Layout;
