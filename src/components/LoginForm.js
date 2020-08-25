import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import loginSchema from './LoginSchema';
import * as yup from 'yup';

import { useDispatch } from 'react-redux'
import { LOG_ON_START, LOG_ON_SUCCESS, LOG_ON_FAIL } from '../store'
import axios from 'axios'

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
    const History = useHistory();
 
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
            dispatch({ type: LOG_ON_SUCCESS})
            window.localStorage.setItem('token', res.data.access_token);
            History.push('/home')  
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOG_ON_FAIL})
        })
    }


    return (

                <form onSubmit={submit}>
                    <h1>
                        Login<br />
                    </h1>

                    {/* Username */}
                    <label htmlFor='username'>
                        Username:<br />
                        <input name='username' type='text' onChange={FormState}/><br />
                        {login.username.length < 2 ? (<p className="error">{errors.username}</p>) : ''}<br />
                    </label>

                    {/* Password */}
                    <label htmlFor='password'>
                        Password:<br />
                        <input name='password' type='password' onChange={FormState} /><br />
                        {login.password.length < 2 ? (<p className="error">{errors.password}</p>) : ''}<br />
                    </label>
                    <button disabled={disabled}>Login</button>
                </form>
<<<<<<< HEAD

    

    </styledDiv>

=======
>>>>>>> 84ed3bb2b4af38a5469df1a6db12dd3aa728c59f
    )
}