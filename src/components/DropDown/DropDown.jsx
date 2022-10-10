import "./DropDown.scss";
import topicArrow from "../../assets/upside-down-arrow-grey.svg";

const DropDown = ({ topicTitle, lessonTitle }) => {
  return (
    <nav className="drop-down">
      <input type="checkbox" id="click" />
      <label htmlFor="click">
        <span className="drop-down__title">
          {topicTitle}
          <img src={topicArrow} alt="" className="drop-down__arrow" />
        </span>
      </label>

      <ul className="drop-down__list">
        <li>
          <a href="#">
            <p className="drop-down__content">
              <img src={topicArrow} alt="" className="drop-down__image" />
              {lessonTitle}
            </p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DropDown;
