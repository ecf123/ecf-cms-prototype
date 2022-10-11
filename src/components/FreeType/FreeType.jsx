import "./FreeType.scss";

const FreeType = ({
  freeTypeLabelText,
  freeTypePlaceHolderText,
  handleFreeTypeValue,
  name
}) => {
  return (
    <div className="free-type">
      <label className="free-type__label">{freeTypeLabelText}</label>
      <textarea
        className="free-type__input"
        type="text"
        // Will apply spellcheck to inputed text
        spellCheck="true"
        placeholder={freeTypePlaceHolderText}
        name={name}
        // Value of input will update as text is typed
        onChange={handleFreeTypeValue}
      ></textarea>
    </div>
  );
};

export default FreeType;
