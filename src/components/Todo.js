import React, { useState } from 'react'
import { DelTodoModal } from './'
import { EDIT_TODO } from '../store'
import { useDispatch } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth'

const initEditingVals={
    name: "",
    description: "",
    frequency: "",
    date: "",
}
export const Todo = ({todo}) => {
    console.log("TODO", todo)
    const [editFormVals, setEditFormVals] = useState(initEditingVals)
    const [editing, setEditing] = useState(false)
    const [ delModal, setDelModal] = useState(false)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.persist()
        setEditFormVals({
            ...editFormVals,
            [e.target.name] : e.target.value
        })
    }
    const handleEditSubmit = (e) => {
        console.log("FORM VALS: ", editFormVals)
        e.preventDefault()
        axiosWithAuth()
            .put(`/changeitem/${todo.itemid}`, editFormVals)
            .then( res => {
                dispatch({ type: EDIT_TODO, payload: editFormVals})
                setEditFormVals(initEditingVals)
            })
            .catch( err => console.log(err))
    }

    const handleButtons = (e) => {
        if (e.target.className === "edit-todo-btn"){
            setEditing( !editing)
            setEditFormVals(todo)
        } else setDelModal(!delModal)
    }

    return (
        <div>
            <h4>{todo.name}</h4>
            <p>{todo.description}</p>
            <p>
                <span>{todo.frequency}</span>
            <br />
                <span>{todo.date}</span> 
            </p> 
            <div className="edit-todo-btn" onClick={handleButtons}>Edit</div>
            <div className="del-todo-btn" onClick={handleButtons}>X</div>
            {
               editing?
                <div>
                    <form onSubmit={handleEditSubmit}>
                        <label>
                            Name:&nbsp;
                            <input
                            name='name'
                            value={editFormVals.name}
                            onChange={handleChange} >
                            </input>
                        </label>
                        <label>
                            Description:&nbsp; 
                            <textarea
                            name='description'
                            value={editFormVals.description}
                            onChange={handleChange} >
                            </textarea>  
                        </label>
                        <label>
                            Due&nbsp;Date:&nbsp; 
                            <select
                            name='date'
                            value={editFormVals.date}
                            onChange={handleChange} >
                                <option value = ''>Select an option</option>
                                <option value="2020-12-31">An option</option>
                            </select>
                        </label>
                        <label>
                            Frequency:&nbsp;
                            <input
                            name='frequency'
                            value={editFormVals.frequency}
                            onChange={handleChange} >
                            </input>
                        </label>
                        <button onClick={handleEditSubmit}>Submit</button>
                    </form>
                </div>
                : <></>
            }
            {
                delModal?
                <DelTodoModal name={todo.name} id={todo.itemid} listid={todo.todoid} modal={delModal}/>
                : <></>
            }
        </div>
        
    )
}
