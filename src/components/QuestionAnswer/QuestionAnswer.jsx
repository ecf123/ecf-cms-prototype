import "./QuestionAnswer.scss";
import Short from "../Short/Short";
import CheckboxInput from "../CheckboxInput/CheckboxInput";

const QuestionAnswer = ({
  handleShortValue,
  onSubmit,
  handleCheckboxValue,
  handleClickCheckbox,
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
        <CheckboxInput
          handleCheckboxValue={handleCheckboxValue}
          handleClickCheckbox={handleClickCheckbox}
        />
        <CheckboxInput
          handleCheckboxValue={handleCheckboxValue}
          handleClickCheckbox={handleClickCheckbox}
        />
        <CheckboxInput
          handleCheckboxValue={handleCheckboxValue}
          handleClickCheckbox={handleClickCheckbox}
        />
        <CheckboxInput
          handleCheckboxValue={handleCheckboxValue}
          handleClickCheckbox={handleClickCheckbox}
        />
      </div>
    </form>
  );
};

export default QuestionAnswer;
