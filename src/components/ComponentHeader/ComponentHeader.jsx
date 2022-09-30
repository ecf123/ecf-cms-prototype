import React from 'react'
import "./ComponentHeader.scss";

const ComponentHeader = ({title}) => {
  return (
    <div className='component-header'>
        <h1 className='component-header__title'>{title}</h1>
    </div>
  )
}

export default ComponentHeader