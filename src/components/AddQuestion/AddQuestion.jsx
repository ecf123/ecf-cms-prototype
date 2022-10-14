import './AddQuestion.scss'
// import Button from "../Button/Button"
import binIcon from "../../assets/bin-icon.svg"
import penIcon from "../../assets/pen-icon.svg"

const AddQuestion = ({question, answers}) => {

  const answerJSX = answers?.map((answer, index) => {
    return (
      <li key={index} className='list__item'>{answer}</li>
    )
  })

  return (
    <div>
      <div className='questions'>
        <h4>Q{index}. {question} </h4>
        <ol type='A'>
            {answerJSX}
        </ol>
        </div>
        <div className='buttons'>
          <img className='buttons__bin' src={binIcon} alt="" />
          <img className='buttons__pen' src={penIcon} alt="" />
        </div>
    </div>
  )
}

export default AddQuestion