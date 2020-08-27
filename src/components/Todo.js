import React from 'react'

export const Todo = ({todo}) => {
    return (
        <div>
            <h4>{todo.name}</h4>
            <p>{todo.description}</p>
            <p></p> 
        </div>
    )
}
