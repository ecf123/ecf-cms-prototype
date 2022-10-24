import "./LoginInputBox.scss";

const LoginInputBox = ({ labelText, inputType, labelId }) => {
  return (
    <div className="input-box">
      <label htmlFor={labelId} className="input-box__label">
        {labelText}
      </label>
      <input
        alt="input box"
        className="input-box__input"
        type={inputType}
        id={labelId}
        required
      />
    </div>
  );
};

export default LoginInputBox;