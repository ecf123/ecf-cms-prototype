import React from "react";
import "./Card.scss";
import iconArrow from "../../assets/arrow-upper-right-black.svg";
import "../../styles/_reset.scss";

const Card = ({
  img,
  date,
  title,
  cardInfo,
  cardLinkOne,
  cardLinkTwo,
}) => {
  return (
    <div className="card">
      <img className="card__image" src={img} alt="Card Image" />
      <p className="card__date">{date}</p>
      <div className="card__header">
        <h2 className="card__title">{title}</h2>
        <img className="card__icon" src={iconArrow} alt="Arrow Icon" />
      </div>
      <p className="card__info">{cardInfo}</p>
      <ul className="card__links">
        <li className="card__link card__link--purple">{cardLinkOne}</li>
        <li className="card__link card__link--darkpurple">{cardLinkTwo}</li>
      </ul>
    </div>
  );
};

export default Card;
