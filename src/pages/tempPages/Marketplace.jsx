import React from 'react'
import { Link } from 'react-router-dom'

const Marketplace = () => {
    return (
        <div>Marketplace<br/>
            <Link to="/addprize">Add prize</Link><br/>
            <Link to="singleitem" >SingleItem</Link>
        </div>
    )
}

export default Marketplace