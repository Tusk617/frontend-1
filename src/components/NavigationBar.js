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
    return (
        <header>
            <StyledNav>
                { !window.localStorage.getItem("token") ?
                    <NavLink to="/login"> Login </NavLink>
                    : <></>
                }
                { !window.localStorage.getItem("token") ?
                    <NavLink to="/signup" >Sign Up</NavLink>
                    : <></>
                }
                { window.localStorage.getItem("token") ?
                    <NavLink to="/account" >Account </NavLink>
                    : <></>
                }
                { window.localStorage.getItem("token") ?
                    <NavLink to="/agenda" > To Do </NavLink>
                    : <></>
                }
                </StyledNav>
        </header>
    )
}

