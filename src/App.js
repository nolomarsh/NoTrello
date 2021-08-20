import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Add from './components/Add'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    let [list, setList] = useState([])

    const handleCreate = (addList) => {
        axios
        .post('http://notrello-backend.herokuapp.com/api/list', addList)
        .then((response) => {
            console.log(response)
            getList()
        })
    }

const getList = () => {
    axios.get('http://notrello-backend.herokuapp.com/api/list')
    .then((response) => setList(response.data),
        (error) => console.error(error))
    .catch((error) => console.error(error))
    }

    useEffect(() => {
        getList()
    }, [])


return (
    <div className="container wrapper">

        <Header />

        <Add handleCreate={handleCreate} />
        <div className="main container-fluid">
            {list.map((listItem) => {
                return (

                    <div className="lists"
                        key={listItem.id}>
                        <h3 className="list_title">Title: {listItem.title}</h3>
                        <p className="list_description">Description: {listItem.description}</p>

                    </div>
                )
            })}
        </div>
        <Footer />

    </div>
)

}


export default App
