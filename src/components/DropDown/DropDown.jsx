import "./DropDown.scss";
import topicArrow from "../../assets/upside-down-arrow-grey.svg";

const DropDown = ({topicTitle}) => {
  return (
    <div className="dropDown">
        <div className="dropDownTopics">
            <h3>{topicTitle}</h3>
            <img src={topicArrow} alt="" />
            <div className="dropDownLessons"></div>
        </div>
    </div>
  )
}

export default DropDown