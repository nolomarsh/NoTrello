
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css'


// import Add from './components/Add'
import Header from './components/Header'
import Footer from './components/Footer'
import ListBox from './components/ListBox'
import Animation from './components/Animation'



import { DataProvider } from './DataContext'

import Login from './views/auth/Login'
import Signup from './views/auth/Signup'
import Logout from './views/auth/Logout'
const App = () => {

return (

    < DataProvider >
    <div className="wrapper">
        <Router>

            <Header />
            <Switch>
                <Route path='/login' component={Login} exact />
                <Route path='/signup' component={Signup} exact />
                <Route path='/login' component={Logout} exact />
            </Switch>

        <Animation />

            <ListBox />

            <Footer />
        
        </Router>
    </div>
    </ DataProvider >
)


}


export default App
