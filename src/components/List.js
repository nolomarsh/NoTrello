import React, {useState} from 'react'
import './css/List.css'
import Card from './Card'
import EditList from './EditList'
import AddCard from './AddCard'
import { useData } from '../DataContext'

const List = props => {
    let [listView, setListView] = useState('cards')
    let [showAddCard, setShowAddCard] = useState(false)

    let thisCards = useData().cards.filter(card => card.list === props.list.id)
    // let [cards, setCards] = useState([])

    const showEdit = () => {
        setListView('Edit_List')
    }

    const toggleAddCard = () => {
        setShowAddCard(!showAddCard)
    }


    return (

        <div className='list'>
            <h4>{props.list.title}</h4>


            {listView === 'cards' &&
                <>
                {thisCards.map((card,index) => {
                    return (
                            <>
                            <Card
                                key={index}
                                card={card}
                            />
                            </>
                )})}
                <p className='btn btn-show' onClick={toggleAddCard}>{showAddCard ? 'Close Form' : 'Add Card'}</p>
                {showAddCard &&
                    <AddCard list={props.list} />
                }
                <button className='btn btn-warning' onClick={showEdit}>Edit List</button>
                </>
            }
            {listView === 'Edit_List' &&
                <EditList
                    list={props.list}
                    key={props.list.id}
                    setListView={setListView}
                />
            }

        </div>
    )
}

export default List
