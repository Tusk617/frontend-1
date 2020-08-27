import React from 'react'

export const Todo = ({todo}) => {
    console.log(todo)
    return (
        <div>
            <h4>{todo.name}</h4>
            <p>{todo.description}</p>
        </div>
    )
}
