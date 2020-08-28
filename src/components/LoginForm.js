import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import loginSchema from './LoginSchema';
import * as yup from 'yup';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { LOG_ON_START, LOG_ON_SUCCESS, LOG_ON_FAIL } from '../store'
import axios from 'axios'

const StyledDiv = styled.div`
    border: 2px solid black;
    width: 30vw;
    margin: 20px auto;
    border-radius: 10px;
    padding: 20px;
    h4 {
        color: #a09f9c; /*mountain mist*/
    };
    h4:hover{
      color: #424242;
    }
    button:hover {
        background-color: #0d857b; /*surfie green*/
        color: white;
    };
    button {
        background-color: #eaeae6; /*gallery*/
        color: black;
        padding: 1% 2%;
        font-size: 1.3rem;
        /* width: 5vw; */
    }


`

const initialValue = {
    username:'',
    password:'',
}

   const initialError = {
    username:'',
    password:'',
} 

export const LoginForm = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
 
    const [ login, setLogin ] = useState(initialValue);
    const [ errors, setErrors ] = useState(initialError);
    const [ disabled, setdisabled ] = useState(false);

    const FormState = e => {
        const name = e.target.name;
        const value = e.target.value;

        yup
        .reach(loginSchema, name)
        .validate(value)
        .then(valid => {
            setErrors({
                ...errors,
                [name]: ''
            })
        })
        .catch(err => {
            setErrors({
                [name]: err.errors[0]
            })
        })
        setLogin({
            ...login, [name]: value
        })
    }

    useEffect(() => {
        loginSchema.isValid(login).then(valid => {
            setdisabled(!valid)
        })
    },[login])

    const submit = e => {
        e.preventDefault();
        dispatch({ type: LOG_ON_START})
        axios.post("http://wonderlist-backend.herokuapp.com/login",  `grant_type=password&username=${login.username}&password=${login.password}`, {headers: {
            // btoa is converting our client id/client secret into base64
                Authorization: `Basic ${btoa('wunder3-client:wunder3-secret')}`,
                'Content-Type': 'application/x-www-form-urlencoded'}})
        .then(res => {
            dispatch({ type: LOG_ON_SUCCESS, payload: login})
            console.log(res)
            window.localStorage.setItem('token', res.data.access_token);
            window.localStorage.setItem('username', login.username);
            history.push('/home')  
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOG_ON_FAIL})
        })
    }

    return (
            <StyledDiv>
                <form onSubmit={submit}>
                    <h1>
                        Login
                        <br />
                    </h1>

                    {/* Username */}
                    <label htmlFor='username'>
                        <h4>Username:</h4>
                        <input name='username' type='text' onChange={FormState}/><br />
                        {login.username.length < 3 ? (<p className="error">{errors.username}</p>) : ''}<br />
                    </label>

                    {/* Password */}
                    <label htmlFor='password'>
                    <h4>Password:</h4>
                        <input name='password' type='password' onChange={FormState} /><br />
                        {login.password.length < 5 ? (<p className="error">{errors.password}</p>) : ''}<br />
                    </label>
                    <button disabled={disabled}>Login</button>

                </form>
        </StyledDiv>        
    )
}