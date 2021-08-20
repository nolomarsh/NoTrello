import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Add from './components/Add'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    let [cards, setCards] = useState([])

    const handleCreate = (addCards) => {
        axios
        .post('notrello-backend.herokuapp.com/api/list', addCards)
        .the((response) => {
            console.log(response)
            getCards()
        })
    }

    const getCards = () => {
        axios.get('notrello-backend.herokuapp.com/api/list')
        .then(
        (response) => setCards(response.data),
        (error) => console.error(error)
        )
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        getCards()
    }, [])

return (
    <>
        <Header />
        <Add handleCreate={handleCreate} />
        <div className="cards">
            {cards.map((cards) => {
                return (
                    <div className="cards"
                        key={cards.id}>
                        <h4>Title: {cards.title}</h4>
                    </div>

                )
            })}
        </div>
        <Footer />
    </>
)

}


export default App
