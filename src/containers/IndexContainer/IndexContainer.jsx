import "./IndexContainer.scss";
import MoreOptions from "../../components/MoreOptions/MoreOptions";
import Card from "../../components/Card/Card";

const IndexContainer = () => {
  const handleDelete = () => {
    console.log("deleeet");
  };

  const handleEdit = () => {
    console.log("idit");
  };

  const optionsData = {
    title: "more options for article",
    desc: "description for options",
    optionDelete: handleDelete,
    edit: handleEdit,
  };

  const articleData = {
    title: "Want a winning CV? Folow these 8 tips",
    img: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/cv-pic.jpg?alt=media&token=8f649302-9820-426d-80f2-2337e970fc71",
    date: "23 May 2022",
    info: "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint.",
    links: "Engineering",
    imgDesc: "this is an image fr",
    condition: true,
  };

  const optionTitle = optionsData.title;
  const optionDesc = optionsData.desc;
  const optionDelete = optionsData.optionDelete;
  const optionEdit = optionsData.edit;

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
          <MoreOptions title={optionTitle} description={optionDesc} handleDelete={optionDelete} handleEdit={optionEdit} />
        </div>
      </div>
    </div>
  );
};

export default IndexContainer;
