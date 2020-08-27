import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from '../store'

const StlyedDiv = styled.div`
font-Family: 'Poppins';
`

const StyledDetails = styled.div`
border: 2px solid black;

`
const StyledButton = styled.div`
display:flex;
justify-content: space-evenly;
button{
    background-color: #eaeae6; /*gallery*/
    color: black;
    padding: .2% 1%;
    font-size: 1rem;
};
button:hover {
        background-color: #0d857b; /*surfie green*/
        color: white;
    };

`
const initialUser = {
    username: '',
    firstname: '',
    lastname:'',
    password: '',
    email: ''
}
export const AccountSettings = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [userToEdit, setUserToEdit] = useState(initialUser)
    const [allUsers, setAllUsers] = useState([])
    const [editing, setEditing] = useState(false)
    const history = useHistory()
    useEffect(() => {
        dispatch({ type: LOAD_START })
        //grab individual user with username stored in localstorage
        axiosWithAuth()
        .get(`/username/${window.localStorage.getItem("username")}`)
        .then(res=>{
            dispatch({ type: LOAD_SUCCESS, payload: res.data})
            console.log('OUR NOBLE USER', res)
            setUserToEdit(res.data)
        })
        .catch(err => dispatch({ type: LOAD_FAILURE}))
        //grab all users
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
    // console.log('user to edit' , userToEdit);
    // console.log(user);
    const editUser = (user) => {
        setEditing(true)
        setUserToEdit(user)
    }
    // const newThing = {
    //     username: "Becky",
    //     firstname: "Bee",
    //     lastname: "Applie",
    //     password: "password"
    // }
    const saveEdit = (e) => {
        const editing = {
            username: userToEdit.username,
            firstname: userToEdit.firstname,
            lastname: userToEdit.lastname,
            password: userToEdit.password,
            email: userToEdit.email
        }
        e.preventDefault()
        console.log('look here', editing)
        axiosWithAuth()
        .put(`/users/${user.userid}`, editing)
        .then(res =>{
            console.log('update change', res)
            dispatch({type: 'UPDATE_USER', payload: editing})
            // setUserToEdit(res.data)
            setEditing(false)
            // history.push('/home')
        })
        .catch(err => {
            console.log('wrong', err)
        })
    }
    const deleteUser = (e) => {
        axiosWithAuth()
        .delete(`/users/${user.userid}`)
        .then(res=>{ console.log('delete user', res)
            setAllUsers(allUsers.filter((item)=> item.id !== user.id))
            console.log('from delete', user)
            history.push('/login')
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
        <StlyedDiv>
            
                <div>
                <h2> Account Settings </h2>
                 <StyledDetails>
                <p>Username: {user.username} </p>
                <p>First Name: {user.firstname}</p>
                <p>Last Name: {user.lastname}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p> 
                </StyledDetails>
                <br/>
                <StyledButton>
                <button onClick={()=> editUser(user)}>Edit Account</button>
                <button onClick={()=> deleteUser()}>Delete Account</button>
                </StyledButton>
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
        </StlyedDiv>
    );
};