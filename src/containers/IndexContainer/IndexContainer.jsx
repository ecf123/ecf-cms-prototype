import "./IndexContainer.scss";
import MoreOptions from "../../components/MoreOptions/MoreOptions";
import Card from "../../components/Card/Card";

const IndexContainer = ({articleData, optionsData, handleEdit, handleDelete}) => {
 

  const optionTitle = optionsData.title;
  const optionDesc = optionsData.desc;

  const articleTitle = articleData.title;
  const articleImg = articleData.img;
  const articleDate = articleData.date;
  const articleInfo = articleData.info;
  const articleLinks = articleData.links;
  const articleImgDesc = articleData.imgDesc;
  const articleCondition = articleData.condition;

  return (
    <div className="index-container">
      <div className="index-container__grid">
        <div className="index-container__left-column" />
        <div className="index-container__left-column" />
        <div className="index-container__middle-column">
          <Card
            title={articleTitle}
            img={articleImg}
            dateOrTime={articleDate}
            cardInfo={articleInfo}
            links={articleLinks}
            imgDescription={articleImgDesc}
            condition={articleCondition}
          />
        </div>
        <div className="index-container__right-column">
          <MoreOptions title={optionTitle} description={optionDesc} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default IndexContainer;
