import "./Short.scss";

const Short = ({
  shortLabelText,
  shortType,
  shortPlaceHolderText,
  handleShortValue,
}) => {
  return (
    <div className="short">
<<<<<<< HEAD
      <label className="short__label" data-testid="label">
        {shortLabelText}
      </label>
=======
      <label className="short__label">{shortLabelText}</label>
>>>>>>> 8feb978a5588a9343320e7fc2f59ad0411590496
      <input
        className="short__input"
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
