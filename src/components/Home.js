import { white } from 'jest-matcher-utils/node_modules/chalk'
import React from 'react'
import {Link} from 'react-router-dom'
import './css/Home.css'




const Home = () => {
  return(
    <div className="container-fluid main border">
        <div className="company-description">
            <h1 className="title">NoTrello</h1>
            <p className='brand'>It's <span className="nope">definitely not </span>Trello.<br/> 
                I don't know what you're talking about.<br/>  
                This is a completely original project management application.</p>
            <br/>
            <br/>
            <Link to="/login" className="nav-link d-flex justify-content-center"><i className="fas fa-sign-in-alt"></i>Login</Link>
            <Link to="/signup" className="nav-link d-flex justify-content-center"><i className="fas fa-user-plus"></i>Create New User</Link>
        </div>
    </div>
  )
}

export default Home