import "./QuestionAnswer.scss"
import Short from '../Short/Short'

const QuestionAnswer = ({submitQuestion}) => {


  return (
    <form className='form' onSubmit={submitQuestion}>
        <Short shortLabelText={"Question"}/>
        <p className="form__answers__heading">Answers</p>
        <div className="form__answers">
        <Short />
        <Short />
        <Short />
        <Short />
        <button className="form__button" >Add +</button>
        </div>
    </form>
  )
}

export default QuestionAnswer