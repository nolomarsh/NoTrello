import React, {useState} from 'react'
import {useData} from '../DataContext'
import List from './List'
import AddList from "./AddList"
import Header from './Header'
import './css/List.css'

const ListBox = (props) => {
    const lists = [...useData().lists]

    return(
        <>
        <Header/>
        <div className="list-box">
            {lists.map((list, index) => {
                return (
                    <List
                    key={index}
                    list={list}
                    />
                    )
                })}
            <div className='list'>
                <h4>Add a List</h4>
                <AddList />
            </div>
        </div>
        </>
    )
}

export default ListBox
