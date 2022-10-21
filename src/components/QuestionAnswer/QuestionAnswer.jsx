import "./QuestionAnswer.scss"
import Short from '../Short/Short'

const QuestionAnswer = ({handleShortValue, onSubmit}) => {


  return (
    
    <form className='form' onSubmit = {onSubmit}>
        <Short shortLabelText={"Question"} handleShortValue={handleShortValue}/>
        <p className="form__answers__heading">Answers</p>
        <div className="form__answers">
        <Short />
        <Short />
        <Short />
        <Short />
        </div>
    </form>
  )
}

export default QuestionAnswer