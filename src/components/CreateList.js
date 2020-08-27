import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth'
import { CREATE_LIST_START,CREATE_LIST_SUCCESS, CREATE_LIST_FAIL } from '../store'
const initFormVals = {
    title : "",
}
const someObj = {}
export const CreateList = () => {
    const dispatch = useDispatch()
    const [formVal, setFormVal] = useState(initFormVals)
    const user = useSelector(state => state.user)
    //     dispatch({type: "TEST_START"})
    // axiosWithAuth().get('/items').then(res => {
    //     dispatch({type: "TEST_SUCCESS"})
    //     console.log(res)})
    //     .catch( err => dispatch({type: "TEST_FAIL "}))
    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: CREATE_LIST_START })
        console.log(formVal)
        axiosWithAuth()
            .post(`todos/u/${user.userID}/t/${formVal.title.split(' ').join('-')}`, someObj)
            .then(res => {
                dispatch({ type: CREATE_LIST_SUCCESS, payload: {formVal} })
                console.log("CREATE LIST RESPONSE: ", res)
                setFormVal(initFormVals)
            })
            .catch(err => {
                dispatch({ type: CREATE_LIST_FAIL})
                setFormVal(initFormVals)
                console.log(err)})
    }
    const handleChanges = e => {
        e.persist()
        setFormVal({
            [e.target.name]: e.target.value
        })
    }

    return (
        <form id="create-list" onSubmit={handleSubmit}>
            <label htmlFor="title">Your Project: 
                <input 
                    name="title"
                    type="text"
                    placeholder="What are you working on?"
                    onChange={handleChanges}
                    value={formVal}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}