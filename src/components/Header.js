import React, {useEffect, useState, Fragment} from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import {Link , Redirect} from 'react-router-dom'
import { useData, useUpdateCurrentUser } from '../DataContext'
import axios from 'axios'
import './css/Header.css'

const Header = () => {
    const [isAuth, setIsAuth] = useState(false);
    let currentUser = useData().currentUser

    let updateCurrentUser = useUpdateCurrentUser()
    

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
        /*



        */

    const handleLogout = () => {
        // console.log(currentUser)
        updateCurrentUser({})
    }

    useEffect(() => {

    })
    return (
        <header id="navbar">
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Link to="/home" className="navbar-brand">Notrello</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {currentUser.username ?
                                <Fragment>
                                    <Redirect to="/boards" className="nav-link"><i className="fas fa-board"></i>Boards</Redirect>
                                    <Link to='/' className="nav-link"><i className='fas fa-sign-out' onClick={handleLogout}>Logout</i></Link>
                                </Fragment>
                                    :
                                <Fragment>
                                    <Link to="/home" className="nav-link"><i className="fas fa-home"></i>Home</Link>
                                    <Link to="/login" className="nav-link"><i className="fas fa-sign-in-alt"></i>Login</Link>
                                    <Link to="/signup" className="nav-link"><i className="fas fa-user-plus"></i>Create New User</Link>
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
