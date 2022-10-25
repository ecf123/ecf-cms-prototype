import LessonContentPreviewItem from "../LessonContentPreviewItem/LessonContentPreviewItem";
import "./LessonContentPreview.scss";

const LessonContentPreview = ({ lessonsArray, handleEdit, handleDelete }) => {
  const lessons = lessonsArray?.map((lesson, index) => {
    return (
      <div key={index}>
        <LessonContentPreviewItem
          lesson={lesson}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        {index < lessonsArray.length - 1 && (
          <div className="lesson-preview__line"></div>
        )}
      </div>
    );
  });

  return <div className="lesson-preview">{lessons}</div>;
};

export default LessonContentPreview;
