import React, { useState } from 'react'

const Add = (props) => {
    let emptyCards = { title: '' }
    let [cards, setCards] = useState(emptyCards)

    const handleChange = (event) => {
        setCards({...cards, [event.target.title]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(cards)
    }

    return (
        <>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" title="title"
                onChange={handleChange} />
                <input type="submit" />
            </form>
        </>
    )
}

export default Add
