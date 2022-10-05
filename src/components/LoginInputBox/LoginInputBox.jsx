import React from 'react'
import './LoginInputBox.scss'

const LoginInputBox = ({labelText}) => {
  return (
    <div>
        <label htmlFor="inputBox">{labelText}</label>
        <input className="inputBox" type="text" />
    </div>
  )
}

export default LoginInputBox