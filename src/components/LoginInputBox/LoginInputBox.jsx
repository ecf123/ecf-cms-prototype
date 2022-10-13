import "./LoginInputBox.scss";

const LoginInputBox = ({ labelText, inputBoxStyle }) => {
  return (
    <div className="input-box">
      <label htmlFor={labelText} className="input-box__label">
        {labelText}
      </label>
      <input
        alt="input box"
        className={inputBoxStyle}
        type="text"
        id={labelText}
      />
    </div>
  );
};

export default LoginInputBox;
