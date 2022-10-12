import "./Card.scss";
import iconArrow from "../../assets/arrow-upper-right-black.svg";
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu.jsx';

const Card = ({ img, dateOrTime, title, cardInfo, links, imgDescription, condition }) => {
  return (
    <div className="card">
      <img className="card__image" src={img} alt={imgDescription} />
      <p className="card__date">{dateOrTime}</p>
      <div className="card__header">
        <h2 className="card__title">{title}</h2>
        <img className="card__icon" src={iconArrow} alt="Arrow Icon" />
      </div>
      <p className="card__info">{cardInfo}</p>
      <CategoriesMenu links={links} condition={condition} />
    </div>
  );
};
export default Card;
