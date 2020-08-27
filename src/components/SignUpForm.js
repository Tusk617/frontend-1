import React, {useState, useEffect} from 'react'
import SignupSchema from './SignupSchema'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'
//redux
import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from '../store'
import { useDispatch, useSelector } from 'react-redux'

const StyledDiv = styled.div`
  font-family: 'Poppins';
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
        padding: 1.2% 8%;
        font-size: 1.3rem;
    }
`

const initialFormValues={
    nameFirst:'',
    nameLast: '',
    username: '',
    email: '',
    password: '',
}
const initialErrors={
    nameFirst:'',
    nameLast: '',
    username: '',
    email: '',
    password: '',
}


export const SignUpForm = (props) => {
  const reqErr = useSelector(state => state.error)
  const [form, setForm] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialErrors)
  const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {
        SignupSchema.isValid(form).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [form]);


  const dispatch = useDispatch() 
  const { push } = useHistory()
    

    const handleChange = (e) =>{
        Yup
        .reach(SignupSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
          setErrors({
            ...errors,
            [e.target.name]: ""
          });
        })
        .catch(err => {
          setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
          });
        });
    
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
      e.persist();
      };

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newUser ={
            nameFirst: form.nameFirst.trim(),
            nameLast: form.nameLast.trim(),
            username: form.username.trim(),
            email: form.email.trim(),
            password: form.password.trim(),
        }
        postNewUser(newUser)
        setForm(initialFormValues)
      }

      const postNewUser = user => {
        dispatch({ type: SIGN_UP_START })
        axios.post('https://cors-anywhere.herokuapp.com/https://wonderlist-backend.herokuapp.com/register', user)
        .then(res =>{
          dispatch({ type: SIGN_UP_SUCCESS, payload: user})
          window.localStorage.setItem('token', res.data.access_token)
          push('/hompage')
        })
        .catch(err =>{
          debugger
          dispatch({ type: SIGN_UP_FAIL, payload: err })
          if ( reqErr.includes("status code 500")){
            setErrors("Sorry, that username has already been taken")
            setForm({
              ...form,
              username: initialFormValues.username
            })
          }
        })
      }

    return (
        <StyledDiv>
            <div>
            {errors? errors.nameFirst : <></>}
            {errors? errors.nameLast : <></>}
            {errors? errors.username : <></>}
            {errors? errors.email : <></>}
            {errors? errors.password : <></>}
            </div>
            <form onSubmit={handleSubmit}>
              <h1>
                Signup
              </h1>
                <label>
                    <h4>First Name</h4>
                    <input
                    name='nameFirst'
                    value={form.nameFirst}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <br />
                <label>
                <h4>Last Name</h4>
                    <input 
                    name='nameLast'
                    value={form.nameLast}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <br />
                <label>
                <h4>Username</h4>
                    <input 
                    name='username'
                    value={form.username}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <br />
                <label>
                <h4>Email</h4>
                    <input 
                    name='email'
                    type='email'
                    value={form.email}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <br />
                <label>
                <h4>Password</h4>
                    <input 
                    name='password'
                    type='password'
                    value={form.password}
                    onChange={(e) =>{handleChange(e)}} >
                    </input>
                </label>
                <br />
                <br/>
                <br/>
                <button onClick={handleSubmit} disabled={buttonDisabled}>Sign Up</button>
            </form>
        </StyledDiv>
    )
}
