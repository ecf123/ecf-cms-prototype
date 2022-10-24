import "./LoginInputBox.scss";

const LoginInputBox = ({ labelText, inputBoxStyle, inputType }) => {
  return (
    <div className="input-box">
      <label htmlFor={labelText} className="input-box__label">
        {labelText}
      </label>
      <input
        alt="input box"
        className={inputBoxStyle}
        type={inputType}
        id={labelText}
        required
      />
    </div>
  );
};

export default LoginInputBox;
