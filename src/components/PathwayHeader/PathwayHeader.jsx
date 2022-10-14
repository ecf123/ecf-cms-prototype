import "./PathwayHeader.scss";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";

const PathwayHeader = ({
  headingTitle,
  headingImage,
  companyIcon,
  links,
  condition,
  iconAltText,
  imageAltText,
}) => {
  return (
    <div className="heading">
      <img className="heading__icon" src={companyIcon} alt={iconAltText} />
      <img className="heading__image" src={headingImage} alt={imageAltText} />
      <h1 className="heading__title">{headingTitle}</h1>
      <CategoriesMenu links={links} condition={condition} />
    </div>
  );
};

export default PathwayHeader;
