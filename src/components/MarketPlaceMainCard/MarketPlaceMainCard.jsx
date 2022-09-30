import React from 'react'
import rollercoaster from "../../assets/rollercoaster-image.svg";
import "./MarketPlaceMainCard.scss";
import "../../styles/_reset.scss";


const MarketPlaceMainCard = () => {
  return (
    <div className='main-card'>
        <img className='main-card__image' src={rollercoaster} alt="rollercoaster" />
        <p className='main-card__date'>30/09/2022</p>
        <h2 className='main-card__title'>Get two tickets to thorpe park for you and two others</h2>
        <p className='main-card__info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis sed voluptas cum natus quo enim eos molestiae nisi minus praesentium ut quam, harum est, illo odio commodi, libero vitae fugiat?</p>
    </div>
  )
}

export default MarketPlaceMainCard