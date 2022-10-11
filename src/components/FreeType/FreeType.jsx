import "./FreeType.scss";

const FreeType = ({
  freeTypeLabelText,
  freeTypePlaceHolderText,
  handleFreeTypeValue,
  name,
  inputClassName
}) => {
  return (
    <div className="free-type">
      <label className="free-type__label">{freeTypeLabelText}</label>
      <textarea
        // free-type__input is used for the design regular input
        // free-type__input--empty is used for the design of a red input that has empty input after submit is clickec
        className={inputClassName}
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
