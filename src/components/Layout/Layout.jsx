import MoreOptions from "../MoreOptions/MoreOptions";
import "./Layout.scss";


const Layout = ({ children }) => {
  return <div className="layout"><MoreOptions></MoreOptions>{children}</div>;
};

export default Layout;
