import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { style, textStyle, buttonText, children, imgStyle } = props;

  return (
    <button className={style}>
      <div className={imgStyle}>{children}</div>
      <p className={textStyle}> {buttonText}</p>
    </button>
  );
};

export default Button;
