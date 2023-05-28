import React from 'react'

import { NavLink , useNavigate } from 'react-router-dom'
import {Navbar , Nav , Container , NavDropdown } from 'react-bootstrap'

const Header = () => {
    let user =JSON.parse( localStorage.getItem("user-info"))
    console.log(user)
    const history = useNavigate()
    function logout(){
        localStorage.clear();
        history('/signup' , {replace: true})
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>Nfc Crypto Exchange</Navbar.Brand>
                    <NavLink to="/signup" className="text-decoration-none text-light mx-2">User Registration</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-2">Home</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light">Features</NavLink>
                        <NavLink to="/login" className="text-decoration-none text-light mx-2">Login</NavLink>
                    </Nav>
                </Container>
                {localStorage.getItem("user-info")}?
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logout}>
                            Logout
                        </NavDropdown.Item>

                    </NavDropdown>
                </Nav>
                : null;
            </Navbar>
        </>
    )
}

export default Header