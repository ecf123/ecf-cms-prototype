import { FALSE } from 'sass'
import Card from '../../components/Card/Card'
import './CardContainer.scss'

const CardContainer = ({cards}) => {

    const renderCards = cards?.map((card, index) => {
        return (
            <Card 
                key = {index}
                img = {card.img}
                dateOrTime = {card.dateOrTime}
                title = {card.title} 
                cardInfo = {card.cardInfo}
                links = {card.links}
                condition={false}
            />
        )
    })
    
  return (
    <div className="card-container">{renderCards}</div>
  )
}

export default CardContainer