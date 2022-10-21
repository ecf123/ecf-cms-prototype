import React from 'react'
import { Link } from 'react-router-dom'

const SinglePathwayCourses = () => {
    return (<>
        <Link to="list">Courses List </Link><br/>
        <Link to="/course" >Single course</Link>
    </>
    )
}

export default SinglePathwayCourses