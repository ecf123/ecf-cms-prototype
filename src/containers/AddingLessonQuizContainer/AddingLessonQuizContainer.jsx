import React from 'react'
import "./AddingLessonQuizContainer.scss";
import Button from "../../components/Button/Button"

const AddingLessonQuizContainer = () => {
  return (
    <div className='add-lesson'>
        <label htmlFor="">Lesson Name</label>
        <input className='add-lesson__input' type="text" />


        {/* <SelectLesson /> */}


        <label htmlFor="">Estimated Completion Time</label>
        <input className='add-lesson__input' type="text" />
        <label htmlFor="">Question</label>
        <input className='add-lesson__input' type="text" />
        <label htmlFor="">Answers</label>
        <input className='add-lesson__answer' type="text" />
        <input className='add-lesson__answer' type="text" />
        <input className='add-lesson__answer' type="text" />
        <input className='add-lesson__answer' type="text" />
        <a className='add-lesson__add' href="">Add +</a>
        <div className="add-lesson__buttons">
          <div className="add-lesson__cancel">
            <Button
              style={"button black round-border large"}
              textStyle={"text large-text black"}
              buttonText={"Submit"}
              // buttonFunction={storeInputs}
            />
          </div>
          <div className="add-lesson__submit">
            <Button
              style={"button light-grey round-border large"}
              textStyle={"text large-text light-grey"}
              buttonText={"Cancel"}
            />
          </div>
        </div>

    </div>
  )
}

export default AddingLessonQuizContainer