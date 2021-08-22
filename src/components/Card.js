import React, {useState} from 'react'
// import axios from 'axios'
import './css/Card.css'

const Card = props => {
    let [card] = useState({...props.card})

    return(
        <div className='listCard'>
            <p>{card.name}</p>
        </div>
    )
}

export default Card
