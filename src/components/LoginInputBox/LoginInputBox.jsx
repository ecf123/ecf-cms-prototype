import "./LoginInputBox.scss";

const LoginInputBox = ({ labelText }) => {

  return (
    <div className="input-box">
      <label htmlFor="input-box" className="input-box__label">{labelText}</label>
      <input alt="input box" className="input-box__input" type="text" id="input-box"/>
    </div>
  );
};

export default LoginInputBox;
