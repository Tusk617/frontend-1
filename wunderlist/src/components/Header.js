import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to='/signup'>Sign Up</Link>
            <br/>
            <Link to='/login'>Login</Link>
            <br/>
            <Link to='/wunderlist'>List</Link>
        </div>
    )
}

export default Header