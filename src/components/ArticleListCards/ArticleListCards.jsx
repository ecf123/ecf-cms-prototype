import React from 'react'
import "./ArticleListCards.scss";
import iconArrow from '../../assets/Iconarrow.png';


//added placeholder content for the information on the card and image. 
//needs to have props passed down in future for the content to render each article.
const ArticleListCards = () => {
  return (
    <div className='card'>
        <img className='card__image' src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yJTIwaGlyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="hire" />
        <p className='card__date'>27/09/2022</p>
        <div className='card__container'>
          <h2 className='card__title'>Want a winning CV? Try these 5 tips</h2>
          <img className='card__icon' src={iconArrow} alt="Arrow Icon" />
        </div>
        <p className='card__info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores odit ratione fugiat esse repudiandae maxime optio</p>
        <ul className='card__links'>
            <li className='card__link card__link--purple'>Professional Development</li>
            <li className='card__link card__link--darkblue'>Career</li>
        </ul>
    </div>
  )
}

export default ArticleListCards