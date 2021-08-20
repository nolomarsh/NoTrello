import React, { useState } from 'react'

const Add = (props) => {
    let emptylist = { title: ' ', description: ' ' }
    let [list, setList] = useState(emptylist)

    const handleChange = (event) => {
        setList({...list, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(list)
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
