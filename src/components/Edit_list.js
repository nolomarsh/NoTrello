import React, { useState } from 'react'

const Edit_list = (props) => {
    let emptylist = {...props.list }
    let [list, setList] = useState(emptylist)

    const handleChange = (event) => {
        setList({...list, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(list)
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
        </>
    )
}

export default Edit_list
