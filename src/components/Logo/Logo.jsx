import React from 'react'
import { Link } from 'react-router-dom'
import "./Logo.scss"

const Logo = ({getCurrentPage}) => {

  const handleClick = () => {
    getCurrentPage("Dashboard");
  }
  return (
    <Link to="*">
      <div className='logo' onClick={handleClick}>
        <img src="" alt="The Future Hub Logo" className='logo__image' />
        <p className='logo__topTitle'>THE</p>
        <h2 className='logo__title'>FUTURE HUB</h2>
      </div>
    </Link>
  )
}

export default Logo