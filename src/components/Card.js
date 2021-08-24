import React, {useState} from 'react'
import {useRefreshData} from "../DataContext"
import axios from 'axios'
import './css/Card.css'
import EditCard from './EditCard'
import MoveCard from './MoveCard'

const Card = props => {
    // let [card] = useState({...props.card})
    let [cardView, setCardView] = useState('mini')

    const refreshData = useRefreshData()

    const toggleCardDetails = () => {
        cardView === 'mini' ? setCardView('details') : setCardView('mini')
    }

    const toggleCardEdit = () => {
        cardView === 'edit' ? setCardView('details') : setCardView('edit')
    }

    const toggleCardMove = () => {
        cardView === 'move' ? setCardView('details') : setCardView('move')
    }

    const handleDelete = e => {
        axios
            .delete('https://notrello-backend.herokuapp.com/api/card/' + props.card.id)
            .then(() => {
                refreshData()
            })
    }

    return(
        <div className='listCard'>
            {props.card.image &&
                <img src={props.card.image} alt='card attachment'/>
            }
            <div className='headLine'>
                <p>{props.card.name}</p>
                <p onClick={toggleCardDetails}><i class="fas fa-ellipsis-h"></i></p>
            </div>
            {cardView === 'details' &&
            <>
                <p>{props.card.body}</p>
                <p>{props.card.labels}</p>
                <button className='btn btn-warning' onClick={toggleCardEdit}>Edit</button>
                <button className='btn btn-warning' onClick={toggleCardMove}>Move</button>
                <button className='btn btn-warning' onClick={handleDelete}>Delete</button>
            </>
            }
            {cardView === 'edit' &&
                <EditCard
                    card={props.card}
                    toggleCardEdit={toggleCardEdit}
                />
            }
            {cardView === 'move' &&
                <MoveCard
                    toggleCardMove={toggleCardMove}
                    card={props.card}
                />
            }
        </div>
    )
}

export default Card
