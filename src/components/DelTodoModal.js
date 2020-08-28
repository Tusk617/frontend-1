import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import Styled from 'styled-components'

import { useDispatch  } from 'react-redux'
import { DEL_TODO } from '../store'

const StyledModal = Styled.div`
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;

    delete-invisible {
        display: none;

    }

`

export const DelTodoModal = ({name, id, listid, modal}) => {
    const dispatch = useDispatch()
    const { push } = useHistory()

    const delTodo = (e) => {
        axiosWithAuth()
            .delete(`/items/${id}`)
            .then( res => {
                dispatch({ type: DEL_TODO, payload: { name: name, listid: listid}})
                push('/home')
            })
    }

    return (
        <StyledModal className={ modal? "delete-visible" : "delete-invisible"}>
            <p> Are you sure you want to delete your todo? </p>
            <button onClick={delTodo}>Delete</button>
            {/* <button type="submit" onClick={set(false)}>Cancel</button> */}
        </StyledModal>
    )
}
