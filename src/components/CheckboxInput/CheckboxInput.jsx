import { useState } from "react";
import "./CheckboxInput.scss";

const CheckboxInput = ({handleClick, handleInput}) => {

  return (
    <div className="checkbox">
      <input onChange={handleInput} type="text" className="checkbox__input" />
      <input onClick={handleClick} type="checkbox" className="checkbox__selector" />
    </div>
  );
};

export default CheckboxInput;
