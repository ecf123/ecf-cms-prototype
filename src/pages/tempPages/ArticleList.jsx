import React from 'react'
import { Link } from 'react-router-dom'

const ArticleList = () => {
    return (
        <div>ArticleList
            <Link to="/AddArticle" >Add article  </Link>
            <Link to="SingleArticle" >Article title</Link>
        </div>
    )
}

export default ArticleList