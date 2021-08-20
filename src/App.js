import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

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
    <div className="wrapper">
        <Header />


        <Add handleCreate={handleCreate} />
        
        <div className="container-fluid mt-4 mb-4 list-box ">

            <div className="d-flex justify-content-start">
                
                {lists.map ((list, index) => {
                    return (
                        <>
                        <List
                            className="m-4 p-4"
                            getLists={getLists}
                            key={index}
                            list={list}
                            />
                        </>
                    )
                })}

            </div>
        </div>
        
        
        
        
        <Footer />
    </div>

)


}


export default App