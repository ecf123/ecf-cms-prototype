import "./PrizeContainer.scss";
import MoreOptions from "../../components/MoreOptions/MoreOptions";
import Card from "../../components/Card/Card";

const PrizeContainer = ({
  prizeData,
  optionsData,
  handleEdit,
  handleDelete,
}) => {

  return (
    <div className="prize-container">
      <div className="prize-container__middle-column">
        <Card
          title={prizeData.heading}
          img={prizeData.image}
          dateOrTime={prizeData.date}
          cardInfo={prizeData.overview}
          links={ prizeData.skillPoints}
          condition={prizeData.isLocked}
        />
      </div>
      <div className="prize-container__right-column">
        <MoreOptions
          title={optionsData.title}
          description={optionsData.description}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};
export default PrizeContainer;
