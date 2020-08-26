import React from 'react'
import { Todo, AddTodo } from './' 

export const TodoList = ({list}) => {
    return (
        <div className="list" key={list.todoid}>
            <h3>{list.title}</h3>
            {/* AddTodo should be a modal that pops up / renders on a button click (Use react-router-dom link) */}
            <AddTodo /> 
            { list.length > 0 ? 
                list.items.map( todo => {
                    return <Todo todo={todo.item} key={todo.itemid}/>
                })
                : <></>
            }
        </div>
    )
}
