import React from 'react'
import './Button.scss'

const Button = (props) => {

    const {style, buttonText, buttonIcon} = props;

  return (
    <button className={style}>
        <img className={style} src={buttonIcon} alt="" />
        <p className={style}> {buttonText}</p>
    </button>
  )
}

export default Button;
