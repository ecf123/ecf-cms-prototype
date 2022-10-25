import "./Card.scss";
import iconArrow from "../../assets/arrow-upper-right-black.svg";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu.jsx";
import { Link } from "react-router-dom";

const Card = ({
  img,
  dateOrTime,
  title,
  cardInfo,
  links,
  imgDescription,
  condition,
}) => {

  const link = title.split(" ").join("");
  return (
    <div className="card">
      <Link to={link}>
        <img className="card__image" src={img} alt={imgDescription} />
      </Link>
      <p className="card__date">{dateOrTime}</p>
      <Link to={link} className="card__header">
        <h2 className="card__title">{title}</h2>
        <img className="card__icon" src={iconArrow} alt="Arrow Icon" />
      </Link>
      <p className="card__info">{cardInfo}</p>
      <CategoriesMenu links={links} condition={condition} />
    </div>
  );
};
export default Card;
