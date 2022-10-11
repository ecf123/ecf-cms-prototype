import "./Short.scss";

const Short = ({
  shortLabelText,
  shortType,
  shortPlaceHolderText,
  handleShortValue,
  name,
  inputClassName
}) => {
  return (
    <div className="short">
      <label className="short__label">{shortLabelText}</label>
      <input
        // short__input is used for the design regular input
        // short__input--empty is used for the design of a red input that has empty input after submit is clickec
        className={inputClassName}
        type={shortType}
        // Will apply spellcheck to inputed text
        spellCheck="true"
        placeholder={shortPlaceHolderText}
        name={name}
        // Value of input will update as text is typed
        onChange={handleShortValue}
      ></input>
    </div>
  );
};

export default Short;
