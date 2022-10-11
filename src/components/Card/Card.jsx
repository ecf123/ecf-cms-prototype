import "./Card.scss";
import iconArrow from "../../assets/arrow-upper-right-black.svg";
const Card = ({ img, dateOrTime, title, cardInfo, links }) => {
  typeof links === "string" ? (links = [links]) : links;
  const linksArr = links?.map((link, index) => {
    if (index % 2 == 0) {
      return (
        <li key={index} className="card__link card__link--purple">
          {link}
        </li>
      );
    } else {
      return (
        <li key={index} className="card__link card__link--darkpurple">
          {link}
        </li>
      );
    }
  });
  return (
    <div className="card">
      <img className="card__image" src={img} alt="Card Image" />
      <p className="card__date">{dateOrTime}</p>
      <div className="card__header">
        <h2 className="card__title">{title}</h2>
        <img className="card__icon" src={iconArrow} alt="Arrow Icon" />
      </div>
      <p className="card__info">{cardInfo}</p>
      <ul className="card__links">{linksArr}</ul>
    </div>
  );
};
export default Card;