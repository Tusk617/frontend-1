import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import loginSchema from './LoginSchema';
import * as yup from 'yup';
import axios from 'axios';


const Login = props => {

    const History = useHistory();
 
    const [ validLForm, setValidLForm ] = useState({
        username:'',
        password:''
    })
    const [ errors, setErrors ] = useState({
        username:'',
        password:'',
        email:''
    })
    const [ disabled, setdisabled ] = useState(false);


    const FormState = e => {
        const lName = e.target.name;
        const lValue = e.target.value;

        yup
        .reach(loginSchema, lName)
        .validate(lValue)
        .then(valid => {
            setErrors({
                ...errors,
                [lName]: ''
            })
        })
        .catch(err => {
            setErrors({
                [lName]: err.errors[0]
            })
        })
        setValidLForm({
            ...validLForm, [lName]: lValue
        })
    }

    useEffect(() => {
        loginSchema.isValid(validLForm).then(valid => {
            setdisabled(!valid)
        })
    },[validLForm])

    const Submit = e => {
        e.preventDefault();
        console.log(validLForm)
        
        axios
        .post('', validLForm)
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
                    <label htmlFor='username'>
                        Username:<br />
                        <input name='username' type='text' onChange={FormState}/><br />
                        {validLForm.username.length < 2 ? (<p className="error">{errors.username}</p>) : ''}<br />
                    </label>
                    <label htmlFor='password'>
                        Password:<br />
                        <input name='password' type='text' onChange={FormState} /><br />
                        {validLForm.password.length < 2 ? (<p className="error">{errors.password}</p>) : ''}<br />
                    </label>
                    <button disabled={disabled}>Login</button>
                </form>
    )
}

export default Login;