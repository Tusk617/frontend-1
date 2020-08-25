import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import loginSchema from './LoginSchema';
import * as yup from 'yup';
import axios from 'axios';

const initialValue = {
    username:'',
    password:'',
    email:'',
}

   const initialError = {
    username:'',
    password:'',
    email:'',
} 

export const LoginForm = (props) => {

    const History = useHistory();
 
    const [ login, setLogin ] = useState(initialValue)
    const [ errors, setErrors ] = useState(initialError)
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

    const Submit = e => {
        e.preventDefault();
        console.log(login)
        
        axios
        .post('https://reqres.in/api/users', login)
        .then(res => {
            window.localStorage.setItem('token', res.data.token);
            History.push('/')  
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
                <form onSubmit={Submit}>
                    <h1>
                        Login<br />
                    </h1>

                    {/* Username */}
                    <label htmlFor='username'>
                        Username:<br />
                        <input name='username' type='text' onChange={FormState}/><br />
                        {login.username.length < 2 ? (<p className="error">{errors.username}</p>) : ''}<br />
                    </label>

                    {/* Email */}
                    <label htmlFor='email'>
                        email:<br />
                        <input name='email' type='text' onChange={FormState}/><br />
                        {login.email.length < 2 ? (<p className="error">{errors.email}</p>) : ''}<br />
                    </label>

                    {/* Password */}
                    <label htmlFor='password'>
                        Password:<br />
                        <input name='password' type='text' onChange={FormState} /><br />
                        {login.password.length < 2 ? (<p className="error">{errors.password}</p>) : ''}<br />
                    </label>
                    <button disabled={disabled}>Login</button>
                </form>
    )
}