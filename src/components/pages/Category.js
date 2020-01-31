import React from 'react'

const Category = props => {
    return (
        <div>
            <h1>Category {props.match.params.category}</h1>
        </div>
    )
}

export default Category