import "./AddLessonAdditionalBoxes.scss";
import FreeType from '../FreeType/FreeType';
import Short from '../Short/Short';

const AddLessonAdditionalBoxes = ({handleFreeTypeValue, handleShortValue, handleAddLessonContent, shortLabelText, shortPlaceHolderText, freeTypeLabelText}) => {
  return (
    <div className='add-lesson'>
        <Short 
          shortLabelText = {shortLabelText}
          shortType = "text"
          shortPlaceHolderText = {shortPlaceHolderText}
          handleShortValue = {handleShortValue}
          inputClassName = "add-lesson__input-one input"
          name = "input-one"/>
        <FreeType 
          freeTypeLabelText = {freeTypeLabelText}
          handleFreeTypeValue = {handleFreeTypeValue}
          name = "input-two"
          inputClassName = 'add-lesson__input-two input' />
        <h5 className='add-lesson__add' onClick={handleAddLessonContent}>Add +</h5>
    </div>
  )
}

export default AddLessonAdditionalBoxes