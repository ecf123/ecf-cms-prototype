import React, { useState } from 'react'
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
          <img src="" alt="" className='navBar__logo--image' />
          <p className='navBar__logo--topTitle'>THE</p>
          <h2 className='navBar__logo--title'>FUTURE HUB</h2>
        </div>
        
        <ul className='navBar__linkList'>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Dashboard" selected={selected} getCurrentPage={getCurrentPage} /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Pathways" selected={selected} getCurrentPage={getCurrentPage} /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Articles" selected={selected} getCurrentPage={getCurrentPage} /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Marketplace" selected={selected} getCurrentPage={getCurrentPage} /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc="" text="Users" selected={selected} getCurrentPage={getCurrentPage} /></li>
        </ul>

        <NavBarItem imageSrc="" text="Settings" selected={selected} getCurrentPage={getCurrentPage} />
      </div>
    </div>
  )
}

export default NavBar;
