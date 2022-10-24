import "./CheckboxInput.scss";

const CheckboxInput = ({ handleClickCheckbox, handleCheckboxValue }) => {
  return (
    <div className="checkbox">
      <input
        onChange={handleCheckboxValue}
        type="text"
        className="checkbox__input"
      />
      <input onClick={handleClickCheckbox} type="checkbox" />
    </div>
  );
};

export default CheckboxInput;
