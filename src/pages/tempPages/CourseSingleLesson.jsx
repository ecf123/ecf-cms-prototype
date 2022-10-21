import React from 'react'
import { useParams } from 'react-router-dom'

const CourseSingleLesson = () => {
    const { courseName, lessonTitle } = useParams()
    return (
        <div>CourseSingleLesson
            {courseName + lessonTitle}
        </div>
    )
}

export default CourseSingleLesson