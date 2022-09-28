import React from 'react'
import "./NavBarItem.scss"
import { Link } from 'react-router-dom'


const NavBarItem = (props) => {
  const { imageSrc, text, selected, getCurrentPage, link} = props;
  let classes = 'navBarItem';

  if(selected == text){
    classes += ' selected'
  }

  const handleClick = () => {
    getCurrentPage(text);
  }
  
  return (
    <Link to={link} className="link">
      <div className={classes} onClick={handleClick}>
        <img src={imageSrc} alt={text} className="navBarItem__image" />
        <p className='navBarItem__text'>{text}</p>
      </div>
    </Link>
  )
}

export default NavBarItem