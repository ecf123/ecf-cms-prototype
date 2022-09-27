import React from 'react'
import "./ArticleListCards.scss";


//props with names that need to be passed down
const ArticleListCards = () => {
  return (
    <div className='card'>
        <img className='card__image' src="https://media.istockphoto.com/vectors/for-hire-sign-vector-id1344062014?k=20&m=1344062014&s=612x612&w=0&h=EdoPvdJC8-AanKwvNgMt2feZbuE9mdA5nBMGoUxJoRg=" alt="" />
        <p className='card__date'>27/09/2022</p>
        <h2 className='card__title'>Lorem</h2>
        <p className='card__info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores odit ratione fugiat esse repudiandae maxime optio, necessitatibus nisi aperiam eum, nobis magni, quas blanditiis aut magnam sunt perferendis qui at.</p>
        <ul className='card__links'>
            <li className='card__link'>Tag 1</li>
            <li className='card__link'>Tag 2</li>
        </ul>
    </div>
  )
}

export default ArticleListCards