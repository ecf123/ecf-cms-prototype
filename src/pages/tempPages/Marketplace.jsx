import React from 'react'
import { Link } from 'react-router-dom'

const Marketplace = () => {
    return (
        <div>Marketplace
            <Link to="/Addprize">Add prize</Link>
            <Link to="SingleItem" >SingleItem</Link>
        </div>
    )
}

export default Marketplace