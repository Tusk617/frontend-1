import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px dashed white;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0px 0px 12px 0px;

    h4{
        text-transform:capitalize;
    }
`

export const Todo = ({todo}) => {
    console.log(todo)
    return (
        <Container>
            <h4>{todo.name} - {todo.description}  </h4>
                <span>Recurring: {todo.frequency}</span>
            <br />
                <span>Date: {todo.duedate}</span> 
          
        </Container>
    )
}
