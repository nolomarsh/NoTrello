import React, {useState} from 'react'
import {useData} from '../DataContext'
import List from './List'

const ListBox = (props) => {
    const lists = [...useData().lists]

    return(
        <div className="list-box">
            {lists.map((list, index) => {
                return (
                    <List
                        getLists={props.getLists}
                        key={index}
                        list={list}
                    />
                )
            })}
        </div>
    )
}

export default ListBox
