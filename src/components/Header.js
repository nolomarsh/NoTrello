import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import './css/Header.css'

let Header = () => {
    return (
        <header id="navbar">
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">Notrello</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home"><i className="fas fa-home"></i>Home</Nav.Link>
                            <Nav.Link href="/boards"><i className="fas fa-board"></i>Boards</Nav.Link>
                            <Nav.Link href="/login"><i className="fas fa-user"></i>Login</Nav.Link>
                        </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        )
}

export default Header
