import React from 'react'
import NavBarItem from '../NavBarItem/NavBarItem';
import './NavBar.scss';

 const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='navBar__container'>

        <div className='navBar__logo'>
          <img src="" alt="" className='navBar__logo--image' />
          <p className='navBar__logo--topTitle'>THE</p>
          <h2 className='navBar__logo--title'>FUTURE HUB</h2>
        </div>
        
        <ul className='navBar__linkList'>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Dashboard" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Pathways" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Articles" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Marketplace" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Users" /></li>
        </ul>

        <NavBarItem imageSrc="" text="Settings" />
      </div>
    </div>
  )
}

export default NavBar;
