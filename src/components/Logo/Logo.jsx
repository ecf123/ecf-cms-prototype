import React from 'react'
import { Link } from 'react-router-dom'
import "./Logo.scss"

const Logo = ({getCurrentPage}) => {

  const handleClick = () => {
    getCurrentPage("Dashboard");
  }
  return (
    <Link to="*" className='link'>
      <div className='logo' onClick={handleClick}>
        <img src="" alt="The Future Hub Logo" className='logo__image'/>
        <p className='logo__topTitle'>THE</p>
        <h3 className='logo__title'>FUTURE HUB</h3>
      </div>
    </Link>
  )
}

export default Logo