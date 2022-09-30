import React from 'react'
import "./NavBarItem.scss"
import { Link } from 'react-router-dom'


const NavBarItem = (props) => {
  const { text, selected, getCurrentPage, link, children} = props;
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
        <div className='navBarItem__image'>
          {children}
        </div>
        <p className='navBarItem__text'>{text}</p>
      </div>
    </Link>
  )
}

export default NavBarItem