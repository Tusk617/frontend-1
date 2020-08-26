import React, {useState, useEffect} from 'react'
import SignupSchema from './SignupSchema'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup';
import axios from 'axios';

//redux
import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from '../store'
import { useDispatch, useSelector } from 'react-redux'

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
  const [errors, setErrors] = useState()
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
        <div>
            <div>
            {errors.nameFirst}
            {errors.nameLast}
            {errors.username}
            {errors.email}
            {errors.password}
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input
                    name='nameFirst'
                    value={form.nameFirst}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <br />
                <label>
                    Last Name
                    <input 
                    name='nameLast'
                    value={form.nameLast}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <br />
                <label>
                    User Name
                    <input 
                    name='username'
                    value={form.username}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <br />
                <label>
                    Email
                    <input 
                    name='email'
                    type='email'
                    value={form.email}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <br />
                <label>
                    Password
                    <input 
                    name='password'
                    type='password'
                    value={form.password}
                    onChange={(e) =>{handleChange(e)}} >
                    </input>
                </label>
                <br />
                <button onClick={handleSubmit} disabled={buttonDisabled}>Submit</button>
            </form>
        </div>
    )
}
