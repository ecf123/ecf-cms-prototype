import React from 'react'
import './HeaderProfile.scss'
import profilePicture from '../../assets/profile-picture.svg'
import arrow from '../../assets/upside-down-arrow-grey.svg'

const HeaderProfile = () => {
  return (
    <div className='header-profile' data-testid="header-profile">
        <img className='header-profile__image' src={profilePicture} alt="Profile Picture" />
        <div className='header-profile__text'>
        <h2 className='header-profile__name'>Brett Zieme</h2>
        <p className='header-profile__role'>Admin</p>
        </div>
        <img className='header-profile__arrow' src={arrow} alt="Toggle" />

    </div>
  )
}

export default HeaderProfile