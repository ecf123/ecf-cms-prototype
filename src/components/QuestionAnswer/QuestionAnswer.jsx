import "./QuestionAnswer.scss";
import Short from "../Short/Short";
import CheckboxInput from "../CheckboxInput/CheckboxInput";

const QuestionAnswer = ({
  handleShortValue,
  onSubmit,
  handleCheckboxValue,
}) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <Short
        shortLabelText={"Question"}
        inputClassName="short__input"
        handleShortValue={handleShortValue}
      />
      <p className="form__answers__heading">Answers</p>
      <div className="form__answers">
        <CheckboxInput handleCheckboxValue={handleCheckboxValue} />
        <CheckboxInput handleCheckboxValue={handleCheckboxValue} />
        <CheckboxInput handleCheckboxValue={handleCheckboxValue} />
        <CheckboxInput handleCheckboxValue={handleCheckboxValue} />
      </div>
    </form>
  );
};

export default QuestionAnswer;
