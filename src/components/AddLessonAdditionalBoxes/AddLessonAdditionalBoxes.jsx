import "./AddLessonAdditionalBoxes.scss";
import FreeType from '../FreeType/FreeType';
import Short from '../Short/Short';

const AddLessonAdditionalBoxes = ({handleFreeTypeValue, handleShortValue}) => {
  return (
    <div className='add-lesson'>
        <Short 
          shortLabelText = "Additional Subtitle(s) (optional)"
          shortType = "text"
          shortPlaceHolderText = "e.g. Fund Manager"
          handleShortValue = {handleShortValue}
          inputClassName = "short__input"
          name = "input-one"/>
        <FreeType 
          freeTypeLabelText = "Additional Content (optional)"
          handleFreeTypeValue = {handleFreeTypeValue}
          name = "input-two"
          inputClassName = 'free-type__input' />
    </div>
  )
}

export default AddLessonAdditionalBoxes