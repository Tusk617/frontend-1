import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";



const initialUser = {
    firstname: '',
    lastname:'',
    email: '',
    password: '',
}

export const AccountSettings = () => {
	const [userToEdit, setUserToEdit] = useState(initialUser)
	const [editing, setEditing] = useState(false)

	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	console.log(user);

	const editUser = (user) => {
	    setEditing(true)
	    setUserToEdit(user)
	}

	const handleSubmit = (e) => {
	    e.preventDefault()
	    axiosWithAuth()
	    .put(`/users/${user.userID}`, userToEdit)
	    .then(res =>{
            console.log('it worked', res)
            setUserToEdit(user)
	    })
	    .catch(err => {
	        console.log('wrong', err)
	    })

	}

	const deleteUser = (e) => {
        axiosWithAuth()
        .delete(`/users/${user.userID}`)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const populateForm = (e) => {
            axiosWithAuth()
            .get(`/users/${user.userID}`)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
       
    }
    
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
                <p>Password: {user.password}</p>
                <button onClick={()=> populateForm()}>Edit Account</button>
                <button onClick={()=> deleteUser()}>Delete Account</button>
            </div>
            <br/>
            <form onSubmit={handleSubmit}>
                <input placeholder='first'type="text" name='firstname' value={userToEdit.firstname} onChange={handleChange}/>
                <input placeholder='last' type="text" name='lastname' value={userToEdit.lastname} onChange={handleChange}/>
                <input placeholder='email' type="text" name='email'value={userToEdit.email} onChange={handleChange}/>
                <input placeholder='password' type="text" name='password'value={userToEdit.password} onChange={handleChange}/>
                <button>Update</button>
            </form>
        </div>
	);
};
