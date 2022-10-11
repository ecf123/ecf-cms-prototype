import "./PathwayHeader.scss";
import {headingImage} from "../../assets/mobile-growing-investment.svg";
import {companyIcon} from "../../assets/barclays-icon-white-background.svg";


const PathwayHeader = ({headingTitle}) => {

    const tagsJsx = pathwayTags.map((tag) => {
        return(
            <div key={tag} className="tag__box">
                <p className="tag__category">{tag}</p>
            </div>
        );
    })

  return (
    <div>
        <div className="heading__banner">
            <img className="heading__icon" src={companyIcon} alt="picture of company icon" />
            <img className="heading__image" src={headingImage} alt="picture of pathway heading" />
        </div>
        <h2>{headingTitle}</h2>
        <div className="tag__container">
            {tagsJsx}
        </div>
    </div>

  )
}

export default PathwayHeader