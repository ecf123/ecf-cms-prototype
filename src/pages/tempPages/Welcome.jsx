import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <Link to="/sign-in">Sign in</Link> <br/>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Welcome