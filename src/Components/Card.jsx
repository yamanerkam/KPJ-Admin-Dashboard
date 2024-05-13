import React from 'react'
import './Card.css'


export default function Card(props) {
    return (
        <div className='card'>
            <h1>{props.title}</h1>
            <img src={props.img} alt="" />
            <p>{props.body}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
