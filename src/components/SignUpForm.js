import React, {useState} from 'react'
import SignupSchema from './SignupSchema'
import * as Yup from 'yup';
import axios from 'axios';

const initialFormValues={
    nameFirst:'',
    nameLast: '',
    username: '',
    email: '',
    password: '',
  }


export const SignUpForm = (props) => {
    const [form, setForm] = useState(initialFormValues)
    const [errors, setErrors] = useState()
    const [users, setUsers] = useState([])
    

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

      const postNewUser = user =>{
        axios.post('https://reqres.in/api/users', user)
        .then(res =>{
          setUsers([res.data, ...users])
          console.log(res.data);
        })
        .catch(err =>{
          debugger
        })
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input
                    name='nameFirst'
                    value={form.nameFirst}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <label>
                    Last Name
                    <input 
                    name='nameLast'
                    value={form.nameLast}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <label>
                    User Name
                    <input 
                    name='username'
                    value={form.username}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <label>
                    Email
                    <input 
                    name='email'
                    value={form.email}
                    onChange={(e) =>{handleChange(e)}}>
                    </input>
                </label>
                <label>
                    Password
                    <input 
                    name='password'
                    value={form.password}
                    onChange={(e) =>{handleChange(e)}} >
                    </input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
