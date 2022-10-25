import AddQuestion from "../../components/AddQuestion/AddQuestion";
import "./QuestionContainer.scss";

const QuestionContainer = ({ questionsArray, handleDelete }) => {
  const questionsArrayJSX = questionsArray?.map((question, index) => {
    return (
      <div key={index}>
        <AddQuestion
          question={question.question}
          answers={question.answers}
          questionNumber={question.questionNumber}
          handleDelete={handleDelete}
        />
        {index < questionsArray.length - 1 && (
          <div className="container__line"></div>
        )}
      </div>
    );
  });

  return <div className="container">{questionsArrayJSX}</div>;
};

export default QuestionContainer;
