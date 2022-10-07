import "./MarketPlaceMainCard.scss";

const MarketPlaceMainCard = ({img, imgDescription, date, title, articleInfo}) => {
  
  return (
    <div className='main-card'>
        <img className='main-card__image' src={img} alt={imgDescription} />
        <p className='main-card__date'>{date}</p>
        <h2 className='main-card__title'>{title}</h2>
        <p className='main-card__info'>{articleInfo}</p>
    </div>
  )
}

export default MarketPlaceMainCard