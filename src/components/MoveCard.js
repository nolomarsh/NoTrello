import React, { useState } from 'react'
import axios from 'axios'
import { useData, useRefreshData } from '../DataContext'

const MoveCard = props => {
    const otherLists = useData().lists.filter(list => list.id !== props.card.list)
    const refreshData = useRefreshData()

    let [newList, setNewList] = useState(otherLists[0].id)

    const handleSelectChange = e => {
        setNewList(e.target.value)
    }

    const handleMoveCard = (e) => {
        e.preventDefault()
        axios
            .put('https://notrello-backend.herokuapp.com/api/card/'+props.card.id, {...props.card, list: newList})
            .then(() => {
                refreshData()
            })
    }

    return (
        <form onSubmit={handleMoveCard}>
            <select onChange={handleSelectChange}>
                {otherLists.filter(list => list.id !== props.card.list).map((list, index) => {
                    return (
                        <option value={list.id}>{list.title}</option>
                    )
                })}
            </select>
            <input className='btn btn-warning' type='submit' value='Move Card' />
            <button className='btn btn-warning' onClick={props.toggleCardMove}>Back</button>
        </form>
    )
}

export default MoveCard
