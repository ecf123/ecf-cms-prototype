import React from 'react'
import { useParams } from 'react-router-dom'



const SingleArticle = () => {

    const { articleTitle } = useParams()

    return (
        <div>SingleArticle {articleTitle}</div>
    )
}

export default SingleArticle