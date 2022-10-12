import "./CardContainer.scss";
import Card from "../../components/Card/Card";

const CardContainer = ({ cards, condition }) => {
  const renderCards = cards?.map((card) => {
    return (
      <Card
        key={card.title}
        img={card.img}
        dateOrTime={card.dateOrTime}
        title={card.title}
        cardInfo={card.cardInfo}
        links={card.links}
        condition={condition}
      />
    );
  });

  return <div className="card-container">{renderCards}</div>;
};

export default CardContainer;
