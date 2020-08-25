import React, { useEffect } from 'react'
import { NavigationBar, TodosContainer } from './'
import fetchAccountDetails from '../utils/fetchAccountDetails'

import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from '../store'
import { useDispatch } from 'react-redux'


export const HomePage = () => {
    const dispatch = useDispatch()

    useEffect( () => {
    dispatch({ type: LOAD_START })
        fetchAccountDetails(/*send ID */)
        .then( res => {
            console.log("fetch response: ", res)
            dispatch({ type: LOAD_SUCCESS, payload: res.data })
        })
        .catch( err => {
            dispatch({ type: LOAD_FAILURE, payload: err})
        })
    }, [])
    return (
        <div>
            <NavigationBar />
            <TodosContainer />
        </div>
    )
}
 