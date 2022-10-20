import "./QuestionAnswer.scss"
import Short from '../Short/Short'
import { useState } from "react"

const QuestionAnswer = () => {



    const [numberOfBoxes, setNumberOfBoxes] = useState([1, 2, 3, 4]);


    const addBox = () => {
        let boxes = numberOfBoxes + 1;
        numberOfBoxes.push(boxes)
        setNumberOfBoxes(
            [...numberOfBoxes],
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