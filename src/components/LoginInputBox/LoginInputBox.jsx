
import React from 'react'

const LoginInputBox = ({labelText}) => {
  return (
    <div>
        <label htmlFor="inputBox">{labelText}</label>
        <input alt="inputbox" className="inputBox" type="text" />
    </div>
  )
}
export default LoginInputBox