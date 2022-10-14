import "./MarketPlaceMainCard.scss";
import CategoriesMenu from "../../components/CategoriesMenu/CategoriesMenu";

const MarketPlaceMainCard = ({
  img,
  imgDescription,
  date,
  title,
  articleInfo,
  links,
  condition,
}) => {
  return (
    <div className="main-card">
      <img className="main-card__image" src={img} alt={imgDescription} />
      <p className="main-card__date">{date}</p>
      <h2 className="main-card__title">{title}</h2>
      <p className="main-card__info">{articleInfo}</p>
      <CategoriesMenu links={links} condition={condition} />
    </div>
  );
};

export default MarketPlaceMainCard;
