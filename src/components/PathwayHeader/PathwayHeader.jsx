import "./PathwayHeader.scss"
import Button from "../Button/Button"
import { ReactComponent as Pencil} from "../../assets/pen-icon.svg" 
const PathwayHeader = ({addCourse}) => {
  return (
    <div className="pathway-header">
      <h2 className="pathway-header__title">Pathway Structure</h2>
      <Button buttonFunction={addCourse} style={"button black round-border medium"} imgStyle={"medium-img white-svg"} textStyle={"text medium-text black"} buttonText={"Add Course"}><Pencil /></Button>
    </div>
  )
}

export default PathwayHeader