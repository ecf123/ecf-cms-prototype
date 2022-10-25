import "./IndexContainer.scss";
import MoreOptions from "../../components/MoreOptions/MoreOptions";
import Card from "../../components/Card/Card";
import PageTitle from "../../components/PageTitle/PageTitle";

const IndexContainer = ({
  data,
  optionsData,
  handleEdit,
  handleDelete,
  title
}) => {

  return (
    <>
      <div className="index-container__header">
        <PageTitle
          className="index-container__title page-title"
          title={title}
        />
      </div>
    <div className="index-container">
      <div className="index-container__middle-column">
        <Card
          title={data.heading}
          img={data.image}
          dateOrTime={data.date}
          cardInfo={data.overview}
          links={ data.skillPoints}
          condition={data.isLocked}
        />
      </div>
      <div className="index-container__right-column">
        <MoreOptions
          title={optionsData.title}
          description={optionsData.description}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
    </>
  );
};
export default IndexContainer;