import React, {useState} from 'react'
// import axios from 'axios'
import './css/Card.css'

const Card = props => {
    let [card] = useState({...props.card})
    let [cardView, setCardView] = useState('mini')

    const toggleCardDetails = () => {
        cardView === 'mini' ? setCardView('details') : setCardView('mini')
    }

    return(
        <div className='listCard'>
            <div className='headLine'>
                <p>{card.name}</p>
                <p onClick={toggleCardDetails}>...</p>
            </div>
            {cardView === 'details' &&
            <>
                <p>{card.body}</p>
                <p>{card.labels}</p>
            </>
            }
        </div>
    )
}

export default Card
