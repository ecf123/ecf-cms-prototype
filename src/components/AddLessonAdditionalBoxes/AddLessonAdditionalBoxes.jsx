import React from 'react'
import "./AddLessonAdditionalBoxes.scss";

const AddLessonAdditionalBoxes = () => {
  return (
    <div className='add-lesson'>
        <label className='add-lesson__label-one' htmlFor="">Additional Subtitle(s) (optional)</label>
        <input className='add-lesson__input-one input' name="input-one" type="text" placeholder='e.g. Fund Manager'/>
        <label className='add-lesson__label-two' htmlFor="">Addtional Content (optional)</label>
        <input className='add-lesson__input-two input' name="input-two" type="text" />
        <h5 className='add-lesson__add'>Add +</h5>
    </div>
  )
}

export default AddLessonAdditionalBoxes