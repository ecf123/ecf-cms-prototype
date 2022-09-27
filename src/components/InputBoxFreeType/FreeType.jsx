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
        spellCheck="true"
        placeholder={placeHolderText}
        onChange={handleFreeTypeValue}
      ></textarea>
    </div>
  );
};

export default FreeType;
