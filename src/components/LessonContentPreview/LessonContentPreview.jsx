import LessonContentPreviewItem from "../LessonContentPreviewItem/LessonContentPreviewItem"
import "./LessonContentPreview.scss"

const LessonContentPreview = ({lessonsArray, handleEdit, handleDelete}) => {

  const lessons = lessonsArray.map((lesson,index) => {
    const { title, content } = lesson
    return (
    <div key={index}>
      <LessonContentPreviewItem content={content} title={title} handleDelete={handleDelete} handleEdit={handleEdit} />
      {index < lessonsArray.length - 1 && (
          <div className="lesson-preview__line"></div>
      )}
    </div>)
  })

  return (
    <div className="lesson-preview">{lessons}</div>
  )
}

export default LessonContentPreview