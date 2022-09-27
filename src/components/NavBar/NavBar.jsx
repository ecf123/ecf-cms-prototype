import React from 'react'
import './NavBar.scss';

 const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='navBar_container'>
            <ul>
            <li> <div className='navBar_container-item'></div></li>
            <li> <div className='navBar_container-item'></div></li>
            <li> <div className='navBar_container-item'></div></li>
            <li> <div className='navBar_container-item'></div></li>
            <li> <div className='navBar_container-item'></div></li>
            </ul>
        </div>
        <div className='navBar_container-item'></div>
    </div>
  )
}

export default NavBar;
