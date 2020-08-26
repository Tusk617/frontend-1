import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth'

import { CREATE_LIST_START } from '../store'

const initFormVals = {
    title : "",
}

export const CreateList = () => {
    const dispatch = useDispatch()
    const [formVal, setFormVal] = useState(initFormVals)
    const user = useSelector(state => state.user)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: CREATE_LIST_START })
        axiosWithAuth()
            .post(`todos/u/${user.userID}/t/${formVal.title}`)
            .then(res => {
                console.log("CREATE LIST RESPONSE: ", res)
            })
    }

    const handleChanges = e => {
        e.persist()
        setFormVal({
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="title">To Do:&nbsp;
                <input 
                    type="text"
                    name="title"
                    placeholder="What are you working on?"
                    onChange={handleChanges}
                    value={formVal.title}
                />
            </label>
            <button type="submit">Create</button>
        </form>
    )
}
