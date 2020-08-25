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

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

// const NavBar = styled.nav`
//     display: flex;
//     justify-content: space-between;
//     align-items: baseline;
//     padding: 1%;
//     background: #420D09;
// `;
// const LogoText = styled.h1`
//     font-family: 'Montez';
//     color: #D4A59A;
//     font-size: 3rem;
//     margin: 0.3%;
// `;
// const NavLinks = styled.a`
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//     color: #D4A59A;
//     font-size: 1rem;
//     margin: .5rem;
//     padding: 1rem;
//     width: 10%;
//     /* justify-content: space-evenly; */
// `;
// const StyledNavLink = styled(NavLink)`
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//     color: #D4A59A;
//     font-size: 1rem;
//     margin: .5rem;
//     padding: 1rem;
//     width: 10%;
// `;

// const Nav = () => {
    
//     return (
//         <NavBar>
//             <LogoText>
//                 Secret Family Recipes
//             </LogoText>
//             <div>
//                 <NavLinks href="https://secret-family-recipes-for-all.netlify.app/index.html"
//                     style={{
//                         textDecoration: 'none',
//                         color:'#F3E0DC'
//                     }}>
//                     Home
//                 </NavLinks>
//                 <NavLinks href="https://secret-family-recipes-for-all.netlify.app/about.html"
//                     style={{
//                         textDecoration: 'none',
//                         color:'#F3E0DC'
//                     }}>
//                     About
//                 </NavLinks>
//                 <StyledNavLink
//                     to="/"
//                     className='linkText'  
//                     style={{
//                         textDecoration: 'none',
//                         color:'#F3E0DC'
//                     }}>
//                     Recipes
//                 </StyledNavLink>
//                 <StyledNavLink
//                     to="/login"
//                     className='linkText'
//                     style={{
//                         textDecoration: 'none',
//                         color:'#F3E0DC'
//                     }}>
//                     Login
//                 </StyledNavLink>
//                 <StyledNavLink
//                     to="/signup"
//                     className='linkText'
//                     style={{
//                         textDecoration: 'none',
//                         color:'#F3E0DC'
//                     }}>
//                     Register
//                 </StyledNavLink>
//             </div>
//         </NavBar>
//     )
// }
