import React from 'react'
import { Todo } from './'

export const TodosContainer = ({ todos }) => {
    console.log(todos)
    return (
        <section className="todos-container">
            { 
                todos ? 
                    todos.map( todo => {
                        return (
                            <Todo todo={todo} />
                        )
                    })
                    : <></>
            }
        </section>
    )
}
