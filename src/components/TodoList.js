import React from 'react'
import { Todo, AddTodo } from './'

export const TodoList = ({list}) => {
    return (
        <div className="todo-list">
            <h3>{list.title}</h3>
            <AddTodo />
            {
                list.items.map( todo => {
                    return ( 
                        <Todo todo={todo} />
                    )
                })
            }
        </div>
    )
}
