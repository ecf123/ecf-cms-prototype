import React from 'react'
import { Link } from 'react-router-dom'

const SinglePathwayCourses = () => {
    return (<>
        <Link to="List">Courses List </Link>
        <Link to="/Course" >Single course</Link>
    </>
    )
}

export default SinglePathwayCourses