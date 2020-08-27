import React, {useState} from 'react'
import axiosWithAuth from "../utils/axiosWithAuth"
// import { v4 as uuid } from 'uuid'

import { useDispatch } from 'react-redux'
import { ADD_TODO_FAIL, 
    ADD_TODO_START, 
    ADD_TODO_SUCCESS} from '../store'

const initialFormValues={
    name: '',
    description:'',
    date: '',
    frequency:'',
}
export const AddTodo = ({listTitle, todoid}) => {
    const [form, setForm] = useState(initialFormValues)
    const dispatch = useDispatch()
    
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
          });
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const newTodo ={
            name: form.name.trim(),
            description:form.description.trim(),
            date: form.date.trim(),
            frequency:form.frequency.trim(),
    
        }
        postNewTodo(newTodo)
        setForm(initialFormValues)
    }
    const postNewTodo = todo =>{
        console.log("TODO PAYLOAD: ", todo)
        dispatch({ type: ADD_TODO_START })
        axiosWithAuth()
        .post(`http://wonderlist-backend.herokuapp.com/items/t/${todoid}`, todo)
        .then(res =>{
          dispatch({ type: ADD_TODO_SUCCESS, payload: {todoVals: todo, list: listTitle}})
          console.log("POST NEW TODO RESPONSE: ", res.data);
        })
        .catch(err =>{
          console.log(err)
        })
      }

    /* Post needs name, description, duedate, frequency */
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>
                    Name:&nbsp;
                    <input
                    name='name'
                    value={form.name}
                    onChange={handleChange} >
                    </input>
                </label>
                <label>
                    Description:&nbsp; 
                    <textarea
                    name='description'
                    value={form.description}
                    onChange={handleChange} >
                    </textarea>  
                </label>
                <label>
                    Due&nbsp;Date:&nbsp; 
                    {/* <input
                    name='duedate'
                    value={form.duedate}
                    onChange={handleChange} >
                    </input> */}
                    <select
                    name='date'
                    value={form.date}
                    onChange={handleChange} >
                        <option value = ''>Select an option</option>
                        <option value="2020-12-31">An option</option>
                    </select>
                </label>
                <label>
                    Frequency:&nbsp;
                    <input
                    name='frequency'
                    value={form.frequency}
                    onChange={handleChange} >
                    </input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}