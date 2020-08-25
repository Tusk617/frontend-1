import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavigationBar = () => {
    return (
        <header>
            <nav>

                { //isLoggedIn &&
                    <NavLink to="/login"> Login </NavLink>
                }
                { //isLoggedIn &&
                    <NavLink to="/signup" >Sign Up</NavLink>
                }
                { //isLoggedIn &&
                    <NavLink to="/account" >Account </NavLink>
                }
                { //isLoggedIn &&
                    <NavLink to="/agenda" > To Do </NavLink>
                }
            </nav>
        </header>
    )
}
