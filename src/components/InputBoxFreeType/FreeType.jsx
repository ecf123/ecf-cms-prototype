import "./FreeType.scss";

const FreeType = ({
  freeTypeLabelText,
  freeTypePlaceHolderText,
  handleFreeTypeValue,
}) => {
  return (
    <div className="free-type">
      <label className="free-type__label" data-testid="label">
        {freeTypeLabelText}
      </label>
      <textarea
        className="free-type__input"
        type="text"
        data-testid="textarea"
        // Will apply spellcheck to inputed text
        spellCheck="true"
        placeholder={freeTypePlaceHolderText}
        // Value of input will update as text is typed
        onChange={handleFreeTypeValue}
      ></textarea>
    </div>
  );
};

export default FreeType;
