import React from "react";
import "./Button.scss";

const Button = ({
  style,
  textStyle,
  buttonText,
  children,
  imgStyle,
  buttonFunction,
}) => {
  return (
    <button className={style} onClick={buttonFunction}>
      <div className={imgStyle}>{children}</div>
      <p className={textStyle}> {buttonText}</p>
    </button>
  );
};

export default Button;
