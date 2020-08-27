import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth'
import styled from 'styled-components'
import { CREATE_LIST_START,CREATE_LIST_SUCCESS, CREATE_LIST_FAIL } from '../store'

const StyledDiv = styled.div`
   font-family: 'Poppins';
    button {
        padding: .2% 1%;
        font-size: 1rem;
    }
`

const initFormVals = {
    title : "",
}

const someObj = {}

export const CreateList = () => {
    const dispatch = useDispatch()
    const [formVal, setFormVal] = useState(initFormVals)
    const user = useSelector(state => state.user)
    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: CREATE_LIST_START })
        console.log(formVal)
        axiosWithAuth()
            .post(`todos/u/${user.userid}/t/${formVal.title.split(' ').join('-')}`, someObj)
            .then(res => {
                formVal.title.split('-').join(' ')
                dispatch({ type: CREATE_LIST_SUCCESS, payload: formVal })
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
        <StyledDiv>
        <form id="create-list" onSubmit={handleSubmit}>
            <label htmlFor="title"> <p>Your Project:</p> 
                <input 
                    name="title"
                    type="text"
                    placeholder="What are you working on?"
                    onChange={handleChanges}
                    value={formVal.title}
                />
            </label>
            <br/>
            <br/> 
            <button type="submit">Submit</button>      
        </form>
        </StyledDiv>
            );
        }