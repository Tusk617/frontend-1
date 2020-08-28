import React, {useState} from 'react'
import axiosWithAuth from "../utils/axiosWithAuth"
import { useDispatch } from 'react-redux'
import { 
    // ADD_TODO_FAIL, 
    ADD_TODO_START, 
    ADD_TODO_SUCCESS} from '../store'
import styled from 'styled-components'

    const StyledDiv = styled.div`
       .hidden{ display:none;}
        form{display:flex-column;
        align-content:center;
        justify-content:center;
        font-family: 'Poppins';}
      
        div{
            margin: 0.5%;
        }
        label {
          color: #a09f9c; /*mountain mist*/
         }
        label:hover{
        color: #424242;
        }
        button:hover {
          background-color: #0d857b; /*surfie green*/
          color: white;
         }
        button {
          background-color: #eaeae6; /*gallery*/
          color: black;
          padding: 1.2% 4%;
          font-size: 1rem;
          margin: 1%;
      };
     `
 
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
      function toggle() {
        const element = document.querySelector("#form");
        element.classList.toggle("hidden");
      }

    return (
        <StyledDiv>
            <button onClick={toggle}>Add New Item</button>
                <form onSubmit={handleSubmit} id="form" className="hidden">
                    <div>
                        <label>
                            <h4>Task Name: </h4>
                            <input
                            name='name'
                            value={form.name}
                            onChange={handleChange} >
                            </input>
                        </label>
                    </div>
                    <div>
                        <label>
                           <h4> Description: </h4> 
                            <textarea
                            name='description'
                            value={form.description}
                            onChange={handleChange} >
                            </textarea>  
                        </label>
                    </div>
                    <div>
                    <label>
                    <h4>Due Date: </h4>
                    <p>Input format YYYY-MM-DD</p>
                    <input
                    name='date'
                    value={form.date}
                    onChange={handleChange} >
                    </input>
                </label>
                    </div>
                    <label>
                    <h4>Frequency</h4>
                    <select
                    name='frequency'
                    value={form.frequency}
                    onChange={handleChange} >
                        <option value = ''>Select An Option</option>
                        <option value = 'daily'>Daily</option>
                        <option value = 'weekly'>Weekly</option>
                        <option value = 'biweekly'>Biweekly</option>
                        <option value = 'monthly'>Monthly</option>
                        <option value = 'yearly'>Yearly</option>
                    </select>
                </label>
                    <br/>
                    <button>Submit</button>
                </form>
        </StyledDiv>
    )
}