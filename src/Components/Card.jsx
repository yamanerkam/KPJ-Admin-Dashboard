import React from 'react'
import './Card.css'
import useButtonEdit from '../hooks/useButtonEdit'


export default function Card(props) {
    const handleClickEdit = useButtonEdit()

    return (

        <div onClick={props.onClick} style={{ cursor: 'pointer' }} className='card'>
            <h1>{props.title}</h1>
            <img src={props.img} alt="" />
            <p>{props.body}</p>
            <button onClick={() => handleClickEdit(props.id)}>Edit</button>
            <button>Delete</button>
        </div >
    )
}
