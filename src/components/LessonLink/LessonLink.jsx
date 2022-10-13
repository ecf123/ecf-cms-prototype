import './LessonLink.scss';
import arrow from "../../assets/arrow-pointing-right-icon.svg";
import playfiles from "../../assets/play-files-icon.svg";
import clock from "../../assets/clock-icon.svg";
import { Link } from "react-router-dom";

export const LessonLink = ({courseTitle, courseDuration}) => {
  return (
    <div className='container'>
        <div className='container__course-info'>
            <div className='container__title'>
                <img src={playfiles} alt="play files icon" />
                <Link style={{textDecoration: 'none'}} to={""}>
                <h5 className='container__title-header'>{courseTitle}</h5>
                </Link>
            </div>
            <div className='container__time'>
                <img src={clock} alt="clock icon" />
                <h6 className='container__time-header'>{courseDuration}</h6>
            </div>
        </div>
        <Link to={""}>
        <div className='container__arrow'>
            <img className='container-arrow-image' src={arrow} alt="course arrow" />
        </div>
        </Link>
    </div>
  )
}

export default LessonLink;
