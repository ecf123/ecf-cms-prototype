import "./PathwayHeader.scss";

const PathwayHeader = ({headingTitle, headingImage, companyIcon }) => {
    return (
        <div className="heading">
            <div className="heading__banner">
                <img className="heading__icon" src={companyIcon} alt="picture of company icon" />
                <img className="heading__image" src={headingImage} alt="picture of pathway heading" />
            </div>
            <h2>{headingTitle}</h2>
        </div>
    )
}

export default PathwayHeader
