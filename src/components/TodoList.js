import React from 'react'
import { Todo, AddTodo } from './'
import styled from 'styled-components'

const Container = styled.div`
      border: 2px solid grey;
      background-color:#ebecf0; 
      margin: 10px auto;
      width: 30vw;
      border-radius: 10px;
`

export const TodoList = ({list}) => {
    const id = list.todoid
    console.log(list)
    return (
        <Container className="todo-list">
            <h3>{list.title}</h3>
            <AddTodo listTitle={list.title} todoid={id}/>
            { list.items?
                list.items.map( todo => {
                    return ( 
                        <Todo todo={todo} key={todo.itemid} />
                    )
                })
                : <></>
            }
        </Container>
    )
}
