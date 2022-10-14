import "./Short.scss";

const Short = ({
  shortLabelText,
  shortType,
  shortPlaceHolderText,
  handleShortValue,
  inputClassName,
  name
}) => {
  return (
    <div className="short">
      <label className="short__label">{shortLabelText}</label>
      <input
        className={inputClassName}
        type={shortType}
        name={name}
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
