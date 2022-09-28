import React, { useState } from 'react'
import Logo from '../Logo/Logo';
import NavBarItem from '../NavBarItem/NavBarItem';
import './NavBar.scss';

 const NavBar = () => {
  const [ selected, setSelected ] = useState("Dashboard");
  const getCurrentPage = (page) => {
    setSelected(page);
  }
  return (
    <div className='navBar'>
      <div className='navBar__container'>

        <div className='navBar__logo'>
          <Logo getCurrentPage={getCurrentPage} />
        </div>
        
        <ul className='navBar__linkList'>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Dashboard" selected={selected} getCurrentPage={getCurrentPage} link="" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Pathways" selected={selected} getCurrentPage={getCurrentPage} link="" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Articles" selected={selected} getCurrentPage={getCurrentPage} link="" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Marketplace" selected={selected} getCurrentPage={getCurrentPage} link="" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Users" selected={selected} getCurrentPage={getCurrentPage} link="" /></li>
        </ul>

        <NavBarItem imageSrc="" text="Settings" selected={selected} getCurrentPage={getCurrentPage} link="" />
      </div>
    </div>
  )
}

export default NavBar;
