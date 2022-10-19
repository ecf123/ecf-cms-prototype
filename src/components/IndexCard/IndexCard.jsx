import "./IndexCard.scss";
import clock from "../../assets/clock-icon.svg"

const IndexCard = ({ video, title, duration, lessonText }) => {
    return (
        <div className="index-card">
            <video className="index-card__video" src={video} />
            <div className="index-card__text-div">
            <h3 className="index-card__title">{title}</h3>
            <div className="index-card__duration-div">
                <img className="index-card__clock" src={clock} alt="clock icon" />
                <p className="index-card__duration">{duration}</p>
            </div>
            <p className="index-card__paragraph">{lessonText}</p>
            </div>
        </div>
    )
}

export default IndexCard