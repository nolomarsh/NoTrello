import React, {useState} from 'react'
import './css/List.css'
import Card from './Card'
import EditList from './EditList'
import AddCard from './AddCard'
import { useData } from '../DataContext'
import { Navbar, Nav } from 'react-bootstrap'

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

                <p className='btn btn-light' onClick={toggleAddCard}>{showAddCard ? 'x Close Form' : '+Add Card'}</p>
                {showAddCard &&
                    <AddCard list={props.list} />
                }
                <p className='clickable' onClick={showEdit}><i class="far fa-edit"></i></p>
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
