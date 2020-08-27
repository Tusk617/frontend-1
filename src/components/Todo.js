import React from 'react'

export const Todo = ({todo}) => {
    console.log(todo)
    return (
        <div>
            <h4>{todo.name}</h4>
            <p>Details: {todo.description}</p>
            <p>Due: {todo.duedate}</p>
            <p>Repeats: {todo.frequency}</p>
        </div>
    )
}
