import "./QuestionAnswer.scss"
import Short from '../Short/Short'
import CheckboxInput from "../CheckboxInput/CheckboxInput"

const QuestionAnswer = ({handleShortValue, onSubmit}) => {


  return (
    
    <form className='form' onSubmit = {onSubmit}>
        <Short shortLabelText={"Question"} handleShortValue={handleShortValue}/>
        <p className="form__answers__heading">Answers</p>
        <div className="form__answers">

          <CheckboxInput/>
          <CheckboxInput/>
          <CheckboxInput/>
          <CheckboxInput/>
    

        </div>
    </form>
  )
}

export default QuestionAnswer