import "./CheckboxInput.scss";

const CheckboxInput = () => {
  return (
    <div className="checkbox">
    <input type="text" className="checkbox__input"/>
    <input type="radio" className="checkbox__selector"/> 
    </div>
  );
};

export default CheckboxInput;
