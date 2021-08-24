
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
const App = () => {

return (

    < DataProvider >
    <div className="wrapper">
        <Router>

            <Header />
            <Switch>
                <Route 
                    exact path='/login' 
                    component={Login}

                    />
                <Route 
                    exact path='/signup' 
                    component={Signup} 
                    />
                <Route 
                    exact path='/boards' 
                    component={ListBox} 
                    />
            </Switch>
            <Animation />

            <Footer />



        </Router>
    </div>
    </ DataProvider >
)


}


export default App
