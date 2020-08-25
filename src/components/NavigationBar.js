import React from 'react'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'

export const NavigationBar = () => {
    const loggedIn = useSelector( state => state.users.isLoggedIn )
    return (
        <header>
            <nav>

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
            </nav>
        </header>
    )
}
