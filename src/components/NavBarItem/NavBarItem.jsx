import React from 'react'
import "./NavBarItem.scss"

const NavBarItem = (props) => {
  const { imageSrc, text} = props;
  return (
    <div className='navBarItem'>
      <img src={imageSrc} alt={text} className="navBarItem__image" />
      <p className='navBarItem__text'>{text}</p>
    </div>
  )
}

export default NavBarItem