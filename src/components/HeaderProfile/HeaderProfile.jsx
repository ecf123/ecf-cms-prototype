import React from 'react'
import './HeaderProfile.scss'

const HeaderProfile = () => {
  return (
    <div className='header-profile'>
        <img className='header-profile__image' src="" alt="Profile Picture" />
        <div className='header-profile__text'>
        <h2 className='header-profile__name'>Brett Zieme</h2>
        <p className='header-profile__role'>Admin</p>
        </div>
        <img className='header-profile__arrow' src="" alt="Toggle" />

    </div>
  )
}

export default HeaderProfile