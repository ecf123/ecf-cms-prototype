import React, { useState } from 'react'
import Logo from '../Logo/Logo';
import NavBarItem from '../NavBarItem/NavBarItem';
import './NavBar.scss';
import cog from '../../assets/cog-icon.svg'
import article from '../../assets/article-book-icon.svg';
import dashboard from '../../assets/dashboard-windows-sqare.svg';
import pathways from '../../assets/pathways-chain-icon.svg';
import marketplace from '../../assets/marketplace-shopping-trolley-icon.svg';
import users from '../../assets/users-people-icon.svg';

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
          <li className='navBar__listItem'><NavBarItem imageSrc={dashboard} text="Dashboard" selected={selected} getCurrentPage={getCurrentPage} link="" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc={pathways} text="Pathways" selected={selected} getCurrentPage={getCurrentPage} link="" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc={article} text="Articles" selected={selected} getCurrentPage={getCurrentPage} link="" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc={marketplace} text="Marketplace" selected={selected} getCurrentPage={getCurrentPage} link="" /></li>
          <li className='navBar__listItem'><NavBarItem imageSrc={users} text="Users" selected={selected} getCurrentPage={getCurrentPage} link="" /></li>
        </ul>

        <NavBarItem imageSrc={cog} text="Settings" selected={selected} getCurrentPage={getCurrentPage} link="" />
      </div>
    </div>
  )
}

export default NavBar;
