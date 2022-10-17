import AddQuestion from "../../components/AddQuestion/AddQuestion"
import "./QuestionContainer.scss"

const QuestionContainer = ({questionsArray}) => {

    const answers = ["Grenade Protein Bars *", "pHD Smart Plan Protein Bar *", "Professional Diva HairDryer", "Black Plus Decker Heater", "Serious Mass Protein Powder *"];
    const question = "What sells on Amazon the most"
    const questionNumber = 7

    const questionsArrayJSX = questionsArray.map((answer, index) => {
        return (
            <AddQuestion question= {question} answers={answers} questionNumber={questionNumber}/>
            <span></span>
        )
        })

  return (
    <div className="questions">
        {questionsArrayJSX}
    </div>
  )
}

export default QuestionContainer