import "./AddingLessonDefaultContainer.scss";

const AddingLessonDefaultContainer = ({
    freeTypeLabelText,
    freeTypePlaceHolderText,
    handleFreeTypeValue,
    name,
    inputClassName,
  }) => {
  return (
    <div>
        <FreeType freeTypeLabelText={"Lesson Name"} handleFreeTypeValue={handleFreeTypeValue} inputClassName={addingLesson__input}/>
    </div>
  )
}

export default AddingLessonDefaultContainer