import React, { useState } from 'react'
import axios from 'axios'
import {useRefreshData} from '../DataContext'

const Edit_list = (props) => {
    let emptylist = {...props.list }
    let [list, setList] = useState(emptylist)

    const refreshData = useRefreshData()

    const handleChange = (event) => {
        setList({...list, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleUpdate(list)
    }

    const handleUpdate = (editList) => {
        axios
        .put('https://notrello-backend.herokuapp.com/api/list/'+editList.id, editList)
        .then((response) => {
            console.log(response)
            refreshData()
            props.setListView('cards')
        })
    }

    const exitEdit = () => {
        props.setListView('cards')
    }

    return (
        <>

            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Title: </label><br/>
                <input
                    type="text"
                    value={list.title}
                    name="title"
                    onChange={handleChange}
                />

                <br/>
                <br/>

                <label htmlFor="title">Description: </label><br/>
                <input
                    type="text"
                    value={list.description}
                    name="description"
                    onChange={handleChange}
                />

                <br/>
                <br/>

                <input type="submit" />

            </form>
            <button onClick={exitEdit}>Exit</button>
        </>
    )
}

export default Edit_list
