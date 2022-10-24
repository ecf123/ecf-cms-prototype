import "./LoginInputBox.scss";

const LoginInputBox = ({ labelText, inputType }) => {
  return (
    <div className="input-box">
      <label htmlFor={labelText} className="input-box__label">
        {labelText}
      </label>
      <input
        alt="input box"
        className="input-box__input"
        type={inputType}
        id={labelText}
        required
      />
    </div>
  );
};

export default LoginInputBox;