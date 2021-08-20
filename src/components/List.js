import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './css/List.css'

const List = props => {
    let [list, setList] = useState({...props.list})
    let [cards, setCards] = useState([])

    const getCards = () => {
        axios
            .get('https://notrello-backend.herokuapp.com/api/card')
            .then((response) => {
                let data = response.data.filter(card => card.list === list.id)
                setCards(data)
            })
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <div className='list'>
            <h4>{list.title}</h4>
            {cards.map((card) => {
                return <p key={card.id}>{card.name}</p>
            })}
        </div>
    )
}

export default List
