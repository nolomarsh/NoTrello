import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

const DataContext = React.createContext()
const RefreshDataContext = React.createContext()
const UpdateCurrentUser = React.createContext()


export const useData = () => {
    return useContext(DataContext)
}

export const useRefreshData = () => {
    return useContext(RefreshDataContext)
}

export const useUpdateCurrentUser = () => {
    return useContext(UpdateCurrentUser)
}

export const DataProvider = ({ children }) => {
    const [lists, setLists] = useState([])
    const [cards, setCards] = useState([])
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    let data = {
        lists: lists,
        cards: cards,
        users: users,
        currentUser: currentUser
    }

    const refreshData = () => {
        axios
            .get('https://notrello-backend.herokuapp.com/api/list')
            .then((response) => {
                setLists(response.data)
                axios
                    .get('https://notrello-backend.herokuapp.com/api/card')
                    .then((response) => {
                        setCards(response.data)
                        axios
                            .get('https://notrello-backend.herokuapp.com/api/useraccount')
                            .then((response) => {
                                setUsers(response.data)
                            })
                    })
            })
    }

    const updateCurrentUser = (user) => {
        if (user) {
            setCurrentUser(user)
        } else {
            setCurrentUser({})
        }

    }

    useEffect(() => {
        refreshData()
    }, [])

    return (
        <DataContext.Provider value={data}>
            <RefreshDataContext.Provider value={refreshData}>
                <UpdateCurrentUser.Provider value={updateCurrentUser}>
                    {children}
                </UpdateCurrentUser.Provider>
            </RefreshDataContext.Provider>
        </DataContext.Provider>
    )
}
