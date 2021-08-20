import React, { useState } from 'react'
import axios from 'axios'
import {useRefreshData} from '../DataContext'

const Add = (props) => {
    let emptylist = { title: ' ', description: ' ' }
    let [list, setList] = useState(emptylist)
    let refreshData = useRefreshData()

    const handleChange = (event) => {
        setList({...list, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreate(list)
    }

    const handleCreate = (addList) => {
        axios
        .post('https://notrello-backend.herokuapp.com/api/list', addList)
        .then((response) => {
            console.log(response)
            refreshData()
        })
    }

    return (
        <>

            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Title: </label><br/>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                />

                <br/>
                <br/>

                <label htmlFor="title">Description: </label><br/>
                <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                />

                <br/>
                <br/>

                <input type="submit" />

            </form>
        </>
    )
}

export default Add
