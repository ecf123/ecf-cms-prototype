import "./DropDown.scss";
import topicArrow from "../../assets/upside-down-arrow-grey.svg";

const DropDown = ({ topicTitle, lessonArr }) => {
  const lessonList = lessonArr.map((lesson, index) => {
    return (
      <li key={index}>
        <a href="#">
          <p className="drop-down__content">{lesson.title}</p>
        </a>
      </li>
    );
  });
  return (
    <nav className="drop-down">
      <input type="checkbox" id={topicTitle} />
      <label htmlFor={topicTitle}>
        <span className="drop-down__title">
          {topicTitle}
          <img
            src={topicArrow}
            alt="Topic Arrow"
            className="drop-down__arrow"
          />
        </span>
      </label>

      <ul className="drop-down__list">{lessonList}</ul>
    </nav>
  );
};

export default DropDown;
