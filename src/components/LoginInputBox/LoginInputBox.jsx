import "./LoginInputBox.scss";

const LoginInputBox = ({ labelText }) => {
  return (
    <div className="input-box">
      <label htmlFor={labelText} className="input-box__label">
        {labelText}
      </label>
      <input
        alt="input box"
        className="input-box__input"
        type="text"
        id={labelText}
      />
    </div>
  );
};

export default LoginInputBox;
