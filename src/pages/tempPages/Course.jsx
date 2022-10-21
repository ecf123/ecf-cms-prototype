import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Course = () => {
    const { courseName } = useParams()
    return (
        <>
            <Link to="addlesson">Add lesson</Link><br/>
            <Link to="singlelesson">Single lesson</Link>
            <p>{courseName}</p>
        </>
    )
}

export default Course