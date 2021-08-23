import React, {useState} from 'react'
import axios from 'axios'
import { useData, useRefreshData } from '../DataContext'

const EditCard = props => {
    let [cardUpdate, setCardUpdate] = useState({...props.card})

    const refreshData = useRefreshData()

    const updateChangeHandler = e => {
        setCardUpdate({...cardUpdate, [e.target.name]: e.target.value})
    }

    const handleUpdateCard  = (e) => {
        e.preventDefault()
        axios
            .put('https://notrello-backend.herokuapp.com/api/card/' + cardUpdate.id, cardUpdate)
            .then(() => {
                refreshData()
                props.toggleCardEdit()
            })
    }



    return (
        <form onSubmit={handleUpdateCard}>
            <label>Title: <input type='text' name='name' value={cardUpdate.name} onChange={updateChangeHandler}/></label>
            <label>Description: <textarea name='body' value={cardUpdate.body} onChange={updateChangeHandler} /></label>
            <label>Labels: <input type='text' name='labels' value={cardUpdate.labels} onChange={updateChangeHandler} /></label>
            <input className='btn btn-warning' type='submit' value='Submit Edit' />
            <button className='btn btn-warning' onClick={props.toggleCardEdit}>Back</button>
        </form>
    )
}

export default EditCard
