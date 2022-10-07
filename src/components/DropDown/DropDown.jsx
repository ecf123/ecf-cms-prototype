import "./DropDown.scss";
import topicArrow from "../../assets/upside-down-arrow-grey.svg";

const DropDown = ({topicTitle,lessonType,lessonTitle, lessonLink}) => {
  return (
    <div className="drop-down">
        <div className="drop-down__topic" >
          <label htmlFor="#click"><span>{topicTitle}</span></label>
          <input type="checkbox" id="click" />
           {/* <h3 className="drop-down__topic-title">{topicTitle}</h3> */}
            <img src={topicArrow} alt={topicArrow} className="drop-down__img"/>
        </div>
        <ul className="drop-down__list">
              <li className="drop-down__lesson">
                <a href={lessonLink}>
                <img src={lessonType} alt={lessonType} className="drop-down__img"/>
                <p>{lessonTitle}</p>
                </a>
              </li>
        </ul>
    </div>
  )
}

export default DropDown