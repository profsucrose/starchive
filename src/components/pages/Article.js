import React from 'react'

const Article = props => {
    return (
        <div>
            <h1>Article {props.match.params.id}</h1>
        </div>
    )
}

export default Article