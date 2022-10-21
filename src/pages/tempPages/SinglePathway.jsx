import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SinglePathway = () => {
    const {pathwayName} = useParams();
    return (
        <>
            {pathwayName} <br/>
            <Link to="courses">Pathway Courses</Link>
        </>
        
    )
}

export default SinglePathway