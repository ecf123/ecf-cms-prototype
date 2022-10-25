import "./LessonLink.scss";
import arrow from "../../assets/arrow-pointing-right-icon.svg";
import playfiles from "../../assets/play-files-icon.svg";
import clock from "../../assets/clock-icon.svg";
import { Link } from "react-router-dom";

export const LessonLink = ({ courseTitle, courseDuration }) => {
  const link = courseTitle?.split(" ").join("");
  return (
    <div className="lesson-link-container">
      <div className="lesson-link-container__course-info">
        <div className="lesson-link-container__title">
          <img src={playfiles} alt="play files icon" />
          <Link style={{ textDecoration: "none" }} to={link}>
            <h5 className="lesson-link-container__title-header">
              {courseTitle}
            </h5>
          </Link>
        </div>
        <div className="lesson-link-container__time">
          <img src={clock} alt="clock icon" />
          <h6 className="lesson-link-container__time-header">
            {courseDuration}
          </h6>
        </div>
      </div>
      <Link to={link}>
        <div className="lesson-link-container__arrow">
          <img
            className="lesson-link-container-arrow-image"
            src={arrow}
            alt="course arrow"
          />
        </div>
      </Link>
    </div>
  );
};

export default LessonLink;
