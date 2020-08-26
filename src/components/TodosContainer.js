import React from 'react'
import { CreateList, TodoList } from './' 

export const TodosContainer = ({ todolists }) => {
    return (
        <section className="todos-container">
            <CreateList />
            { 
                todolists ? 
                    todolists.map( list => {
                        console.log(list)
                        return (
                            <div>
                                <TodoList list={list} key={todolists.todoID} />
                                
                            </div>
                        )
                    })
                    : <></>
            }
        </section>
    )
}
