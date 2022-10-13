import "./Short.scss";

const Short = ({
  shortLabelText,
  shortType,
  shortPlaceHolderText,
  handleShortValue,
  inputClassName
}) => {
  return (
    <div className="short">
      <label className="short__label">{shortLabelText}</label>
      <input
        className={inputClassName}
        type={shortType}
        // Will apply spellcheck to inputed text
        spellCheck="true"
        placeholder={shortPlaceHolderText}
        // Value of input will update as text is typed
        onChange={handleShortValue}
      ></input>
    </div>
  );
};

export default Short;
