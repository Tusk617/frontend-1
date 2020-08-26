import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
// import { LOAD_SUCCESS } from '../store'
 const StyledNav = styled.nav `
    font-size: 1.2rem;
    font-family: 'Poppins';
    border: 2px solid black;
    display:flex;
    justify-content: space-around;
    background-color: #0d857b;
    a {
    text-decoration: none;
    color: white;
    margin: 2.5% 0
   
    }
    a:hover{
        color:yellow;
    }
 `


export const NavigationBar = () => {
    const loggedIn = useSelector( state => state.user.isLoggedIn )
    return (
        <header>
            <StyledNav>
                { !loggedIn ?
                    <NavLink to="/login"> Login </NavLink>
                    : <></>
                }
                { !loggedIn ?
                    <NavLink to="/signup" >Sign Up</NavLink>
                    : <></>
                }
                { loggedIn ?
                    <NavLink to="/account" >Account </NavLink>
                    : <></>
                }
                { loggedIn ?
                    <NavLink to="/agenda" > To Do </NavLink>
                    : <></>
                }
                </StyledNav>
        </header>
    )
}

