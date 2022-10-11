import DropDown from "../DropDown/DropDown";
import "./Layout.scss";
const Layout = ({ children }) => {
  const lessonArr = [{title: "The role of banking in the financial system"}, {title: "Currency Risk Management"}];


  return <div className="layout"><DropDown topicTitle={"Business"} lessonArr={lessonArr} topicInput={"click"}/>
  {children}</div>;
};

export default Layout;
