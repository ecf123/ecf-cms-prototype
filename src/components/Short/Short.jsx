import "./Short.scss";

const Short = ({ shortlabelText, shortType, shortplaceHolderText, handleShortValue }) => {
  return (
    <div className="short" data-testid="div">
      <label 
        className="short__label" 
        data-testid="label">
        {shortlabelText}
      </label>
      <input
        className="short__input"
        type={shortType}
        // Will apply spellcheck to inputed text
        spellCheck="true"
        data-testid="input"
        placeholder={shortplaceHolderText}
        // Value of input will update as text is typed
        onChange={handleShortValue}
      ></input>
    </div>
  );
};

export default Short;
