import "./PathwayDisplay.scss";
import hamburger from "../../assets/hamburger-icon.svg";
import grid from "../../assets/grid-icon.svg";
import Button from "../Button/Button";
import {ReactComponent as Pencil} from "../../assets/pen-icon.svg";
import { Link } from "react-router-dom";


const PathwayDisplay = ({toggleDisplay}) => {
  return (
    <div className="pathway-display">
        <div className="pathway-display__container">
          <img className="pathway-display__option" id="grid-icon" src={grid} alt="grid display option button" onClick={() => toggleDisplay(true)}/>
          <img className="pathway-display__option" src ={hamburger} alt="list view option button" onClick={() => toggleDisplay(false)}/>
        </div>
        <Link to = "*" className="pathway-display__button">
          < Button style={"button black round-border medium"} imgStyle={"medium-img white-svg"} textStyle={"text medium-text black"} buttonText={"Add Course"}><Pencil /></Button>
        </Link>
    </div>
  )
}

export default PathwayDisplay