import React, { useEffect } from 'react'
import { TodosContainer } from './'

import fetchAccountDetails from '../utils/fetchAccountDetails'
import { Link } from "react-router-dom"

import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from '../store'
import { useDispatch, useSelector } from 'react-redux'

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
        <div>

            <h2>{user.firstname}'s Todo Lists</h2>
                <TodosContainer todolists={user.todolists}/>
        </div>
    )
}
 