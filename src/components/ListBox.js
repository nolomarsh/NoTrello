import React, {useState} from 'react'
import {useData} from '../DataContext'
import List from './List'

const ListBox = (props) => {
    return(
        <div className="listBox container-fluid">
            {props.lists.map((list, index) => {
                return (
                    <List
                        key={index}
                        list={list}
                    />
                )
            })}
        </div>
    )
}

export default ListBox
