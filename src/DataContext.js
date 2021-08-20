import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

const DataContext = React.createContext()
const RefreshDataContext = React.createContext()

export const useData = () => {
    return useContext(DataContext)
}

export const useRefreshData = () => {
    return useContext(RefreshDataContext)
}

export const DataProvider = ({ children }) => {
    const [lists, setLists] = useState([])
    const [cards, setCards] = useState([])

    let data = {
        lists: lists,
        cards: cards
    }

    const refreshData = () => {
        axios
            .get('http://notrello-backend.herokuapp.com/api/list')
            .then((response) => {
                setLists(response.data)
                axios
                    .get('http://notrello-backend.herokuapp.com/api/card')
                    .then((response) => {
                        setCards(response.data)
                    })
            })
    }

    useEffect(() => {
        refreshData()
    }, [])

    return (
        <DataContext.Provider value={data}>
            <RefreshDataContext.Provider value={refreshData}>
                {children}
            </RefreshDataContext.Provider>
        </DataContext.Provider>
    )
}
