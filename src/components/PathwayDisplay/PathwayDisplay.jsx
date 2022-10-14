import "./PathwayDisplay.scss";
import hamburger from "../../assets/hamburger-icon.svg";
import grid from "../../assets/grid-icon.svg";
import Button from "../Button/Button";

const PathwayDisplay = () => {
  return (
    <div>
        <div>
          <img src ={hamburger} alt="list view option"/>
          <img src={grid} alt="grid display option"/>
        </div>
        <Button style="black" textStyle={} />
    </div>
  )
}

export default PathwayDisplay