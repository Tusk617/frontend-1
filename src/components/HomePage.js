import React, { useEffect } from 'react'
import { TodosContainer, AccountSettings, Create} from './'
import fetchAccountDetails from '../utils/fetchAccountDetails'

import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from '../store'
import { useDispatch, useSelector } from 'react-redux'



export const HomePage = () => {
    const dispatch = useDispatch()
    const user = useSelector( state => state.user)
    const isLoggedIn = useSelector( state => state.user)

    console.log(user)

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
    }, [user, dispatch])
    
    return (
        <div>
            <h2>Homepage</h2>
                <TodosContainer todos={user.todolists}/>

        </div>
    )
}
 