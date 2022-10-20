import React from 'react'
import "./AddLessonAdditionalBoxes.scss";

const AddLessonAdditionalBoxes = () => {
  return (
    <div className='add-lesson'>
        <label className='add-lesson__label' htmlFor=""></label>
        <input className='add-lesson__input-one input' name="input-one" type="text" placeholder='e.g. Fund Manager'/>
        <label className='add-lesson__label' htmlFor=""></label>
        <input className='add-lesson__input-two input' name="input-two" type="text" />
        <h5 className='add-lesson__add'>Add +</h5>
    </div>
  )
}

export default AddLessonAdditionalBoxes