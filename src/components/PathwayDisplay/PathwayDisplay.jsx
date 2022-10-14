import "./PathwayDisplay.scss";
import hamburger from "../../assets/hamburger-icon.svg";
import grid from "../../assets/grid-icon.svg";
import Button from "../Button/Button";
import {ReactComponent as Pencil} from "../../assets/pen-icon.svg";
import { Link } from "react-router-dom";


const PathwayDisplay = () => {
  let view = "grid";
  const toggleGrid = () => {
    view = "grid"
    console.log(view)
  }
  const toggleList = () => {
    view = "list"
    console.log(view)
  }
  return (
    <div className="pathway-display">
        <div className="pathway-display__container">
          <img className="pathway-display__option" id="grid-icon" src={grid} alt="grid display option button" onClick={toggleGrid}/>
          <img className="pathway-display__option" src ={hamburger} alt="list view option button" onClick={toggleList}/>
        </div>
        <Link to = "*" className="pathway-display__button">
          < Button style={"button black round-border medium"} imgStyle={"medium-img white-svg"} textStyle={"text medium-text black"} buttonText={"Add Course"}><Pencil /></Button>
        </Link>
        
    </div>
  )
}

export default PathwayDisplay