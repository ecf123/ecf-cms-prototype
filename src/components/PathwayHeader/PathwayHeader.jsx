import "./PathwayHeader.scss";
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu'

const PathwayHeader = ({headingTitle, headingImage, companyIcon, links, condition }) => {
  
  return (
    <div className="heading">
        <img className="heading__icon" src={companyIcon} alt="Company Icon" />
        <img className="heading__image" src={headingImage} alt="Pathway Heading" />
        <h1 className="heading__title">{headingTitle}</h1>
        <CategoriesMenu links = {links}  condition = {condition}/>
    </div>   
  )
}

export default PathwayHeader
