import React from 'react'
import "./NavBarItem.scss"

const NavBarItem = (props) => {
  const { imageSrc, text, selected, getCurrentPage} = props;
  let classes = 'navBarItem';

  if(selected == text){
    classes += ' selected'
  }

  const handleClick = () => {
    getCurrentPage(text);
  }
  
  return (
    <div className={classes} onClick={handleClick}>
      <img src={imageSrc} alt={text} className="navBarItem__image" />
      <p className='navBarItem__text'>{text}</p>
    </div>
  )
}

export default NavBarItem