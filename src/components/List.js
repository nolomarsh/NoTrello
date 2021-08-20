import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './css/List.css'
import Card from './Card'

const List = props => {
    let [list, setList] = useState({...props.list})
    let [cards, setCards] = useState([])

    const getCards = () => {
        axios
            .get('https://notrello-backend.herokuapp.com/api/card')
            .then((response) => {
                setCards(response.data.filter(card => {
                    return card.list === list.id
                }))
            })
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <div className='list'>
            <h4>{list.title}</h4>
            {cards.map((card,index) => {
                return <Card
                            key={index}
                            card={card}
                        />
            })}
        </div>
    )
}

export default List
