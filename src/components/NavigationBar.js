import React from 'react'
import { NavLink } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { LOAD_SUCCESS } from '../store'

export const NavigationBar = () => {
    const dispatch = useDispatch()
    const loggedIn = useSelector( state => state.user.isLoggedIn )
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

