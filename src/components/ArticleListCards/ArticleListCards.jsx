import React from 'react'
import "./ArticleListCards.scss";
import iconArrow from '../../assets/arrow-upper-right-black.svg';
import "../../styles/_reset.scss";

const ArticleListCards = ({img, date, title, articleInfo, articleLinkOne, articleLinkTwo}) => {
  return (
    <div className='card'>
        <img className='card__image' src={img} alt="Article Image" />
        <p className='card__date'>{date}</p>
        <div className='card__header'>
          <h2 className='card__title'>{title}</h2>
          <img className='card__icon' src={iconArrow} alt="Arrow Icon" />
        </div>
        <p className='card__info'>{articleInfo}</p>
        <ul className='card__links'>
            <li className='card__link card__link--purple'>{articleLinkOne}</li>
            <li className='card__link card__link--darkpurple'>{articleLinkTwo}</li>
        </ul>
    </div>
  )
}

export default ArticleListCards