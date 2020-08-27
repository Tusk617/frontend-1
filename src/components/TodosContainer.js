import React from 'react'
import { Todo, AddTodo } from './'

export const TodosContainer = ({ todos }) => {
    // console.log(todos)
    return (
        <section className="todos-container">
            { 
                todos ? 
                    todos.map( todo => {
                        return (
                            <div>
                                <Todo todo={todo} />
                                <AddTodo></AddTodo>
                            </div>
                        )
                    })
                    : <></>
            }
        </section>
    )
}
