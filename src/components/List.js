import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './css/List.css'
import Card from './Card'
import Edit from './Edit_list'

const List = props => {
    let [list, setList] = useState({...props.list})
    let [cards, setCards] = useState([])

    const handleUpdate = (editList) => {
        axios
        .put('http://notrello-backend.herokuapp.com/api/list/'+editList.id, editList)
        .then((response) => {
            console.log(response)
            props.getLists()
        })
    }

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
        props.getLists()
        getCards()
    }, [])

    return (
        <div className='list-card'>
            <h4>{props.list.title}</h4>
            {cards.map((card,index) => {
                return (
                        <>
                        <Card
                            key={index}
                            card={card}
                        />
                        </>
            )})}
            <Edit
                handleUpdate={handleUpdate}
                list={list}
                key={props.list.id}
            />
        </div>
    )
}

export default List
