import React from 'react'
import './Button.scss'

const Button = (props) => {

    const {style, imgStyle, textStyle, buttonText, buttonIcon} = props;

  return (
    <button className={style}>
        <img className={imgStyle} src={buttonIcon} alt="" />
        <p className={textStyle}> {buttonText}</p>
    </button>
  )
}

export default Button;
