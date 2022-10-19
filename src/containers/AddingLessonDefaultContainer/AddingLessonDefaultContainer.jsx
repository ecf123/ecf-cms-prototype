import "./AddingLessonDefaultContainer.scss";
import FreeType from "../../components/FreeType/FreeType";
import { Button } from "antd";

const AddingLessonDefaultContainer = ({
    handleFreeTypeValue
  }) => {
  return (
    <div>
      <FreeType freeTypeLabelText={"Lesson Name"} handleFreeTypeValue={handleFreeTypeValue} inputClassName={"addingLesson__input"}/>
      <FreeType freeTypeLabelText={"Lesson Type"} handleFreeTypeValue={handleFreeTypeValue} inputClassName={"addingLesson__input"}/>
      <FreeType freeTypeLabelText={"Estimated Completion time"} handleFreeTypeValue={handleFreeTypeValue} inputClassName={"addingLesson__input"}/>
      <Button style={"button grey round-border large"}textStyle={"text large-text grey"} buttonText={"Cancel"}/>

    </div>
  )
}

export default AddingLessonDefaultContainer