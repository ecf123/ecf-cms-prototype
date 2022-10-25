import LoginInputBox from "../LoginInputBox/LoginInputBox";
import "./RegistrationForm.scss";

const RegistrationForm = () => {
  return (
    <div className="registration-form">
      <h2 className="registration-form__header">Register</h2>
      <form className="registration-form__form">
        <LoginInputBox
          labelText="First Name"
          inputType="text"
          labelId="first-name"
        />
        <LoginInputBox
          labelText="Last Name"
          inputType="text"
          labelId="last-name"
        />
        <LoginInputBox labelText="Email" inputType="email" labelId="email" />
        <LoginInputBox
          labelText="Password"
          inputType="password"
          labelId="password"
        />
        <LoginInputBox
          labelText="Re-Type Password"
          inputType="password"
          labelId="re-type-password"
        />
        <button className="registration-form__button">Create Account</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
