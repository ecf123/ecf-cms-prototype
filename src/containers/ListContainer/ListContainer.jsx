import "./ListContainer.scss"
import PageTitle from "../../components/PageTitle/PageTitle";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button"
import CardContainer from "../CardContainer/CardContainer"
import {ReactComponent as Pencil} from "../../assets/pen-icon.svg";

const ListContainer = ({title, cards}) => {
  return (
    <div className="list-page">
      <div className="list-page__header">
        <PageTitle className="list-page__title" title={title+" List"} />
      </div>
      <div className="list-page__body">
        <nav className="list-page__nav">
          <SearchBar placeHolderText={"Search for "+title}/>
          <Button style={"button black round-border medium"} imgStyle={"medium-img white-svg"} textStyle={"text medium-text black"} buttonText={"Add "+title}><Pencil /></Button>
        </nav>
        <CardContainer cards={cards}/>
      </div>
    </div>
  )
}

export default ListContainer