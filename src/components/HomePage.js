import React, { useEffect } from 'react'
import { TodosContainer } from './'

import fetchAccountDetails from '../utils/fetchAccountDetails'
<<<<<<< HEAD
import styled from 'styled-components'
=======
import { Link } from "react-router-dom"

>>>>>>> fb513db0f4c50956c249821cd2308848fb0d06a2
import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from '../store'
import { useDispatch, useSelector } from 'react-redux'

const StyledDiv = styled.div`
    font-family: 'Poppins';
`

export const HomePage = () => {
    const dispatch = useDispatch()
    const user = useSelector( state => state.user)
    // const isLoggedIn = useSelector( state => state.user)

    useEffect(() => {
        dispatch({ type: LOAD_START })
            fetchAccountDetails(user)
            .then( res => {
                // debugger
                dispatch({ type: LOAD_SUCCESS, payload: res.data })
            })
            .catch( err => {
                dispatch({ type: LOAD_FAILURE, payload: err})
            })
    }, [dispatch])
    
    return (
<<<<<<< HEAD
        <StyledDiv>
            <h1>Homepage</h1>
                <TodosContainer todolists={user.todolists}/>

        </StyledDiv>
=======
        <div>

            <h2>{user.firstname}'s Todo Lists</h2>
                <TodosContainer todolists={user.todolists}/>
        </div>
>>>>>>> fb513db0f4c50956c249821cd2308848fb0d06a2
    )
}
 