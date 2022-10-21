import React from 'react'
import { Link } from 'react-router-dom'

const ArticleList = () => {
    return (
        <div>
            <p>ArticleList</p>
            <Link to="/addarticle" >Add article  </Link>
            <Link to="singlearticle" >Article title</Link>
        </div>
    )
}

export default ArticleList