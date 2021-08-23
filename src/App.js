import React from 'react'
import './App.css'


// import Add from './components/Add'
import Header from './components/Header'
import Footer from './components/Footer'
import ListBox from './components/ListBox'
import Animation from './components/Animation'


import { DataProvider } from './DataContext'


const App = () => {

return (

    < DataProvider >
    <div className="wrapper">

        <Header />

        <Animation />

        <ListBox />

        <Footer />
    </div>
    </ DataProvider >
)


}


export default App
