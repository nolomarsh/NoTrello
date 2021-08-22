import React, {useState} from 'react'
import {useData} from '../DataContext'
import List from './List'
import Add_list from "./Add_list"

import './css/List.css'

const ListBox = (props) => {
    const lists = [...useData().lists]

    return(
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
                <Add_list />
            </div>
        </div>
    )
}

export default ListBox
