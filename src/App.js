import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Add from './components/Add'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

const App = () => {
    let [lists, setLists] = useState([])

    const handleCreate = (addList) => {
        axios
        .post('http://notrello-backend.herokuapp.com/api/list', addList)
        .then((response) => {
            console.log(response)
            getLists()
        })
    }

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
    <div className="container wrapper">

        <Header />

        <Add handleCreate={handleCreate} />

        <div className="listBox container-fluid">
            {lists.map((list, index) => {
                return (
                    <List
                        key={index}
                        list={list}
                    />
                )
            })}
        </div>
        <Footer />

    </div>
)

}


export default App
