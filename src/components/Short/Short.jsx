import "./Short.scss";

const Short = ({ shortlabelText, shortType, shortplaceHolderText, handleShortValue }) => {
  return (
    <div className="short" data-testid="div">
      <label 
        className="short__label" 
        data-testid="label">
        {shortlabelText}
      </label>
      <textbox
        className="short__input"
        type={shortType}
        // Will apply spellcheck to inputed text
        spellCheck="true"
        data-testid="textbox"
        placeholder={shortplaceHolderText}
        // Value of input will update as text is typed
        onChange={handleShortValue}
      ></textbox>
    </div>
  );
};

export default Short;
