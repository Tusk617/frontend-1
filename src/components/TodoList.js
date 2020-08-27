import React from 'react'
import { Todo, AddTodo } from './'
import styled from 'styled-components'

const StyledDiv = styled.div`
    font-family: 'Poppins';
    h3{
        color: #a09f9c; /*mountain mist*/
    };
    h3:hover{
        color: #424242;
    }
` 

export const TodoList = ({list}) => {
    return (
        <StyledDiv>
            <div className="todo-list">
                <h3>{list.title}</h3>
                {
                    list.items.map( todo => {
                        return ( 
                            <Todo todo={todo} />
                        )
                    })
                }
            </div>
            <div>
            <AddTodo />
            </div>
        </StyledDiv>
    )
}
