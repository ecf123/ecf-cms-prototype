import React from 'react'
import { useParams } from 'react-router-dom'

export const SingleItem = () => {
    const { prizeName } = useParams()

    return (
        <div>SingleItem <br/>{prizeName}</div>
    )
}
