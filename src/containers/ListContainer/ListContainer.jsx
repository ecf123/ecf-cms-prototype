import "./ListContainer.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import CardContainer from "../CardContainer/CardContainer";
import { ReactComponent as Pencil } from "../../assets/pen-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const ListContainer = ({ title, data }) => {

  const cards=data?.map(element=>{
    if(title == "Article"){
      const paragraphContent = element.articleContent[0].paragraph
      return{
        title:element.title,
        img: element.thumbnail,
        cardInfo:paragraphContent.substr(0, Math.min(paragraphContent.length, paragraphContent.indexOf(".",50)+1)),
        dateOrTime: element.date,
        links: element.category.split(",")
      }
    } else {
      return {
        title:element.heading,
        img: element.image,
        cardInfo: element.overview.substr(0, Math.min(element.overview.length, element.overview.indexOf(".",50)+1)),
        links: [element.skillPoints,element.trophies],
      }
    }
  })

  const [searchTerm, setSearchTerm] = useState("");

  const condition = title == "Article" ? false : true;

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cards?.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="list-page">
      <div className="list-page__header">
        <PageTitle
          className="list-page__title page-title"
          title={title + " List"}
        />
      </div>
      <div className="list-page__body">
        <nav className="list-page__nav">
          <SearchBar
            placeHolderText={"Search for " + title}
            handleSearchInput={handleSearchInput}
            value={searchTerm}
          />
          <Link to="*">
            <Button
              style={"button black round-border large"}
              imgStyle={"medium-img white-svg"}
              textStyle={"text medium-text black"}
              buttonText={"Add " + title}
            >
              <Pencil />
            </Button>
          </Link>
        </nav>
        <CardContainer cards={filteredCards} condition={condition}/>
      </div>
    </div>
  );
};

export default ListContainer;
