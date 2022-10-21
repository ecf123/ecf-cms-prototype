import "./LessonContentPreviewItem.scss"
import binIcon from "../../assets/bin-icon.svg";  
import penIcon from "../../assets/pen-icon.svg";

const LessonContentPreviewItem = ({lesson,handleEdit,handleDelete}) => {

  const {title, content} = lesson ?? {};

  return (
    <div className="lesson-content__item">
      <h6 className="lesson-content__title">{title}</h6>
      <p className="lesson-content__text">{content}</p>
      <div className="buttons">
        <img
          className="buttons__bin"
          src={binIcon}
          alt="Delete Question"
          onClick={handleDelete}
        />
        <img
          className="buttons__pen"
          src={penIcon}
          alt="Edit Question"
          onClick={handleEdit}
        />
      </div>
    </div>
  )
}

export default LessonContentPreviewItem