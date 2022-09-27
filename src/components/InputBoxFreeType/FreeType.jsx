import "./FreeType.scss";

const FreeType = ({
  labelText,
  placeHolderText,
  handleFreeTypeValue,
}) => {
  return (
    <div className="freetype">
      <label className="freetype__label">{labelText}</label>
      <textarea
        className="freetype__input"
        type="text"
        // Will apply spellcheck to inputed text
        spellCheck="true"
        placeholder={placeHolderText}
        // Value of input will update as text is typed
        onChange={handleFreeTypeValue}
      ></textarea>
    </div>
  );
};

export default FreeType;
