import DropDown from "../DropDown/DropDown";
import "./Layout.scss";
import topicArrow from "../../assets/upside-down-arrow-grey.svg";
const Layout = ({ children }) => {
  return <div className="layout"><DropDown topicTitle="Business"lessonType={topicArrow} lessonTitle="Suits" lessonLink="£"/>{children}</div>;
};

export default Layout;
