import React, {useState} from 'react'
import axiosWithAuth from "../utils/axiosWithAuth"
import styled from "styled-components"


const StyledDiv = styled.div`
  font-family: 'Poppins';
    h4 {
        color: #a09f9c; /*mountain mist*/
    };
    h4:hover{
      color: #424242;
    }
    p {
        color: #a09f9c;
    }
    p:hover {
        color:#424242
    }
    button:hover {
        background-color: #0d857b; /*surfie green*/
        color: white;
    };
    button {
        background-color: #eaeae6; /*gallery*/
        color: black;
        padding: 1.2% 8%;
        margin:4%;
        font-size: 1.3rem;
    }
`

const initialFormValues={
    name: '',
    description:'',
    duedate: '',
    frequency:'',
}
export const AddTodo = () => {
    const [form, setForm] = useState(initialFormValues)
    const [toDos, setToDos] = useState([])
    
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
            date: form.duedate.trim(),
            frequency:form.frequency.trim(),
        }
        postNewTodo(newTodo)
        setForm(initialFormValues)
    }
    const postNewTodo = Todo =>{
        axiosWithAuth()
        .post(`'http://wonderlist-backend.herokuapp.com/items/t/:todoid'`, Todo,)
        .then(res =>{
          setToDos([res.data, ...toDos])
          console.log(res.data);
        })
        .catch(err =>{
          debugger
        })
      }

    /* Post needs name, description, duedate, frequency */
    return (
        <StyledDiv>
        <div>

            <form onSubmit={handleSubmit}>
                <h2>Add a new item</h2>
                <label>
                    <h4>Name</h4>
                    <input
                    name='name'
                    value={form.name}
                    onChange={handleChange} >
                    </input>
                </label>
                <label>
                    <h4>Description</h4>
                    <textarea
                    name='description'
                    value={form.description}
                    onChange={handleChange} >
                    </textarea>  
                </label>
                <label>
                    <h4>Due Date</h4>
                    <p>Input format YYYY-MM-DD</p>
                    <input
                    name='duedate'
                    value={form.duedate}
                    onChange={handleChange} >
                    </input>
                </label>
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
                <br />
                <button>Submit</button>
            </form>
        </div>
        </StyledDiv>
    )
}