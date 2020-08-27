import React from 'react'
import { Todo, AddTodo } from './'

export const TodoList = ({list}) => {
    const id = list.todoid
    console.log(list)
    return (
        <div className="todo-list">
            <h3>{list.title}</h3>
            <AddTodo listTitle={list.title} todoid={id}/>
            { list.items?
                list.items.map( todo => {
                    return ( 
                        <Todo todo={todo}  />
                    )
                })
                : <></>
            }
        </div>
    )
}
