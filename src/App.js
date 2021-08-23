import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css'

import Add from './components/Add'
import Header from './components/Header'
import Footer from './components/Footer'
import ListBox from './components/ListBox'


import { DataProvider } from './DataContext'

import Login from './views/auth/Login'
import Signup from './views/auth/Signup'

const App = () => {
    let [lists, setLists] = useState([])

    const getLists = () => {
        axios.get('http://notrello-backend.herokuapp.com/api/list')
        .then((response) => setLists(response.data),
            (error) => console.error(error))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        getLists()
    }, [])


return (

    < DataProvider >
    <div className="wrapper">
        <Router>

            <Header />
            <Switch>
                <Route path='/login' component={Login} exact />
                <Route path='/signup' component={Signup} exact />
            </Switch>

            <Add />

            <ListBox />

            <Footer />
        
        </Router>
    </div>
    </ DataProvider >

)


}


export default App
