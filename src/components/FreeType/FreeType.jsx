import "./FreeType.scss";

const FreeType = ({
  freeTypeLabelText,
  freeTypePlaceHolderText,
  handleFreeTypeValue,
  name,
  inputClassName,
}) => {
  return (
    <div className="free-type">
      <label className="free-type__label">{freeTypeLabelText}</label>
      <textarea
        className={inputClassName}
        type="text"
        name={name}
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
