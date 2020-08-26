import React from 'react'

export const Todo = ({todo}) => {
    console.log(todo)
    return (
        <div>
            <h4>{todo.name}</h4>
            <p>{todo.description}</p>
            {/*FREQUENCY: Needs logic for determining when to post a new item to the todo database
                 <div>every <span>{todo.frequency}</span> {days...}</div> */}
            {/* DUE DATE:  */}
        </div>
    )
}
