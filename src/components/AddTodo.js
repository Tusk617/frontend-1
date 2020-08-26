import React, {useState} from 'react'
import axios from 'axios'

const initialFormValues={
    name: '',
    description:'',
    duedate: '',
    frequency:'',
}
export const AddTodo = () => {
    const [form, setForm] = useState(initialFormValues)
    const [toDos, setToDos] = useState([])
    const config = {
        headers: { Authorization: `Bearer b37f00fc-8e1f-4028-9acf-9a1f74fd7bf9` }
    };
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
            duedate: form.duedate.trim(),
            frequency:form.frequency.trim(),
        }
        postNewTodo(newTodo)
        setForm(initialFormValues)
    }
    const postNewTodo = Todo =>{
        axios.post('http://wonderlist-backend.herokuapp.com/items/t/10', Todo, config)
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
        <div>

            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                    name='name'
                    value={form.name}
                    onChange={handleChange} >
                    </input>
                </label>
                <label>
                    Description
                    <textarea
                    name='description'
                    value={form.description}
                    onChange={handleChange} >
                    </textarea>  
                </label>
                <label>
                    Due Date
                    {/* <input
                    name='duedate'
                    value={form.duedate}
                    onChange={handleChange} >
                    </input> */}
                    <select
                    name='duedate'
                    value={form.duedate}
                    onChange={handleChange} >
                        <option value = ''>Select an option</option>
                        <option value="1969-12-31 16:00:01">An option</option>
                    </select>
                </label>
                <label>
                    Frequency
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