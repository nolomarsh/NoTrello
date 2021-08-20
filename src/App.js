import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Add from './components/Add'
import Header from './components/Header'
import Footer from './components/Footer'
import ListBox from './components/ListBox'

import { DataProvider } from './DataContext'


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
    <div className="container wrapper">

        <Header />

        <Add />

        <ListBox />

        <Footer />

    </div>
    </ DataProvider >
)

}


export default App
