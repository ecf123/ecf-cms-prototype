import "./QuestionAnswer.scss"
import Short from '../Short/Short'
import { useState } from "react"

const QuestionAnswer = () => {


    //add button - onclick - const [numberOfBoxes, setNumberOfBoxes] = useState(4)
    //for each numberOfBoxes, render a checkbox component

    const [numberOfBoxes, setNumberOfBoxes] = useState([1, 2, 3, 4]);


    const addBox = () => {
        const boxes = numberOfBoxes.length()
        setNumberOfBoxes(
            [...numberOfBoxes],
            numberOfBoxes.push(boxes + 1)
        );
        console.log(numberOfBoxes);
    }


  return (
    <div className='question-answer'>
        <Short shortLabelText={"Question"} inputClassName={"short__input"}/>
        {numberOfBoxes.map((box) => {
            return (
                <div key={box} >
                    <Short shortLabelText={"Question"} inputClassName={"short__input"}/>
                </div>
            )
        })}
        <button className="question-answer__button" onClick={addBox}>Add +</button>
    </div>
  )
}

export default QuestionAnswer