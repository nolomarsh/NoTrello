import React, {useEffect, useState, Fragment} from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './css/Header.css'

const Header = () => {
    const [isAuth, setIsAuth] = useState(false);
    //how to check login
        /*
            user will input data into fields
            make a put request to api/useraccount/login
                - this will return an empty object if user does not exist and if password does not match
                - return username and id if user exists
        */
    //how to sign up
        /*
            user will input data into fields
            make a post request to api/useraccount
             - "username":["user account with this username already exists."]
             - {"username":["This field may not be blank."]}
        */
    //how to logout

    axios.put('https://notrello-backend.herokuapp.com/api/useraccount/login')
    .then((response) => {
      setIsAuth(response.data);
      console.log(response.data);
    })
    return (
        <header id="navbar">
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">Notrello</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home"><i className="fas fa-home"></i>Home</Nav.Link>
                            {isAuth === true ?
                                <Fragment>
                                    // <Link to="/boards"><i className="fas fa-board"></i>Boards</Link>
                                    <Link to="/logout"><i className="fas fa-user"></i>Logout</Link>
                                </Fragment>
                                    :
                                <Fragment>
                                    <Link to="/login"><i className="fas fa-sign-in-alt"></i>Sign in</Link>
                                    <Link to="/signup"><i className="fas fa-user-plus"></i>Sign up</Link>
                                </Fragment>
                            }
                        </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        )
}

export default Header
