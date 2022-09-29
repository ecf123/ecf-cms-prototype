import "./FreeType.scss";

const FreeType = ({
  freeTypelabelText,
  freeTypeplaceHolderText,
  handleFreeTypeValue,
}) => {
  return (
    <div className="freetype" data-testid="div">
      <label className="freetype__label" data-testid="label">{freeTypelabelText}</label>
      <textarea
        className="freetype__input"
        type="text"
        data-testid="textarea"
        // Will apply spellcheck to inputed text
        spellCheck="true"
        placeholder={freeTypeplaceHolderText}
        // Value of input will update as text is typed
        onChange={handleFreeTypeValue}
      ></textarea>
    </div>
  );
};


export default FreeType;
