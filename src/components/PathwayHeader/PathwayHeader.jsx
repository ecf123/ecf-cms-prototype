import "./PathwayHeader.scss";
<<<<<<< HEAD



const PathwayHeader = ({headingTitle, headingImage, companyIcon }) => {

const pathwayTags = ["Finance", "Investing"]

    const tagsJsx = pathwayTags.map((tag) => {
        return(
            <div key={tag} className="tag__box">
                <p className="tag__category">{tag}</p>
            </div>
        );
    })

  return (
    <div className="heading">
        <div className="heading__banner">
            <img className="heading__icon" src={companyIcon} alt="picture of company icon" />
            <img className="heading__image" src={headingImage} alt="picture of pathway heading" />
        </div>
        <h2>Commercial Banking with Barclay’s{headingTitle}</h2>
        <div className="tag__container">
            {tagsJsx}
        </div>
    </div>

  )
}

export default PathwayHeader
=======
import Button from "../Button/Button";
import { ReactComponent as Pencil } from "../../assets/pen-icon.svg";
import { Link } from "react-router-dom";
const PathwayHeader = ({ link }) => {
  return (
    <div className="pathway-header">
      <h2 className="pathway-header__title">Pathway Structure</h2>
      <Link to={link}>
        <Button
          style={"button black round-border medium"}
          imgStyle={"medium-img white-svg"}
          textStyle={"text medium-text black"}
          buttonText={"Add Course"}
        >
          <Pencil />
        </Button>
      </Link>
    </div>
  );
};

export default PathwayHeader;
>>>>>>> a96090cdbf9b6af96ce8528bf3e7d0c611aa9ae5
