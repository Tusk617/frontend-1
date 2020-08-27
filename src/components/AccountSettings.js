import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom'
// const initialUser = {
//     firstname: '',
//     lastname:'',
//     email: '',
//     password: '',
// }
export const AccountSettings = () => {
    const user = useSelector((state) => state.user);
    const [userToEdit, setUserToEdit] = useState(user)
    const [allUsers, setAllUsers] = useState([])
    const [editing, setEditing] = useState(false)
    const history = useHistory()
    useEffect(() => {
        axiosWithAuth()
        .get('/users')
        .then(res=>{
            console.log('allusers', res)
            setAllUsers(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    // const dispatch = useDispatch();
    console.log(userToEdit);
    console.log(user);
    const editUser = (user) => {
        setEditing(true)
        setUserToEdit(user)
    }
    const saveEdit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .put(`/users/${user.userID}`, userToEdit)
        .then(res =>{
            console.log('update change', res)
            setUserToEdit(res.data)
            setEditing(false)
        })
        .catch(err => {
            console.log('wrong', err)
        })
    }
    const deleteUser = (e) => {
        axiosWithAuth()
        .delete(`/users/${user.userID}`)
        .then(res=>{ console.log('delete user', res)
            setAllUsers(allUsers.filter((item)=> item.id !== user.id))
            console.log('from delete', user)
            // history.push('/home')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    // const populateForm = (e) => {
    //         axiosWithAuth()
    //         .get(`/users/${user.userID}`)
    //         .then(res=>{
    //             console.log('populate form on edit click', res)
    //             setUserToEdit({
    //                 firstname: res.data.firstname,
    //                 lastname: res.data.lastname,
    //                 email: res.data.email,
    //                 password: res.data.password
    //             })
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //         })
    // }
    const handleChange = (e) =>{
        setUserToEdit ({...userToEdit, [ e.target.name]: e.target.value })
    }
    return (
        <div>
            <div>
                <h2> Account Settings </h2>
                <p>Username: {user.username} </p>
                <p>First Name: {user.firstname}</p>
                <p>Last Name: {user.lastname}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <button onClick={()=> editUser(user)}>Edit Account</button>
                <button onClick={()=> deleteUser()}>Delete Account</button>
            </div>
            <br/>
            {editing && (
            <form onSubmit={saveEdit}>
                <input placeholder='first'type="text" name='firstname' value={userToEdit.firstname} onChange={handleChange}/>
                <input placeholder='last' type="text" name='lastname' value={userToEdit.lastname} onChange={handleChange}/>
                <input placeholder='email' type="text" name='email'value={userToEdit.email} onChange={handleChange}/>
                <input placeholder='password' type="text" name='password'value={userToEdit.password} onChange={handleChange}/>
                <button>Update</button>
            </form>
            )} 
        </div>
    );
};