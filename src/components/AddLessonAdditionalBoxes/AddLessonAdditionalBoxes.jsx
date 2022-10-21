import "./AddLessonAdditionalBoxes.scss";
import FreeType from '../FreeType/FreeType';
import Short from '../Short/Short';

const AddLessonAdditionalBoxes = ({handleFreeTypeValue, handleShortValue, handleAddLessonContent}) => {
  return (
    <div className='add-lesson'>
        <Short 
          shortLabelText = "Additional Subtitle(s) (optional)"
          shortType = "text"
          shortPlaceHolderText = "e.g. Fund Manager"
          handleShortValue = {handleShortValue}
          inputClassName = "add-lesson__input-one input"
          name = "input-one"/>
        <FreeType 
          freeTypeLabelText = "Additional Content (optional)"
          handleFreeTypeValue = {handleFreeTypeValue}
          name = "input-two"
          inputClassName = 'add-lesson__input-two input' />
        <h5 className='add-lesson__add' onClick={handleAddLessonContent}>Add +</h5>
    </div>
  )
}

export default AddLessonAdditionalBoxes