import "./DropDown.scss";
import topicArrow from "../../assets/upside-down-arrow-grey.svg";

const DropDown = ({topicTitle,lessonType,lessonTitle, display}) => {
  return (
    <div className="drop-down">
        <div className="drop-down__topic" onClick={display}>
            <h3 className="drop-down__topic-title">{topicTitle}</h3>
            <img src={topicArrow} alt={topicArrow} className="drop-down__img"/>
        </div>
        <div className="drop-down__lessons">
              <img src={lessonType} alt={lessonType} className="drop-down__img"/>
              <p>{lessonTitle}</p>
        </div>
    </div>
  )
}

export default DropDown