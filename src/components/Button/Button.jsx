import React from 'react'
import './Button.scss'

const Button = (props) => {

    const {style, buttonText, buttonIcon} = props;

  return (
    <button className='button'>
        <img className='button_image' src="" alt="" />
        <p className='button__text'> Cancel</p>
    </button>
  )
}

export default Button;
