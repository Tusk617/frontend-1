import React from 'react'
import { TodoList, CreateList } from './'



export const TodosContainer = ({ todolists }) => {

    console.log("LISTS: ", todolists)
    return (
        <section className="todos-container">
            <CreateList />
            { 
                todolists ? 
                    todolists.map( todolist => {
                        return (
                            <div key={todolist.todoid} >
                                <TodoList list={todolist}/>
                                
                            </div>
                        )
                    })
                    : <></>
            }
        </section>
    )
}
