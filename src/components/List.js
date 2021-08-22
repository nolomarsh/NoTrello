import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './css/List.css'
import Card from './Card'
import Edit_list from './Edit_list'
import { useData, useRefreshData} from '../DataContext'

const List = props => {
    let [list, setList] = useState({...props.list})
    let [listView, setListView] = useState('cards')

    let thisCards = useData().cards.filter(card => card.list === list.id)
    // let [cards, setCards] = useState([])

    const refreshData = useRefreshData()

    
    const showEdit = () => {
        setListView('Edit_list')
    }


    return (

        <div className='list-card'>
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
                <button onClick={showEdit}>Edit List</button>
                </>
            }
            {listView === 'Edit_list' &&
                <Edit_list
                    list={list}
                    key={props.list.id}
                    setListView={setListView}
                />
            }

        </div>
    )
}

export default List
