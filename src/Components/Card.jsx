import React from 'react'
import './Card.css'
import { useNavigate, Link } from "react-router-dom";


export default function Card(props) {


    return (

        <div onClick={props.onClick} style={{ cursor: 'pointer' }} className='card'>
            <h1>{props.title}</h1>
            <img src={props.img} alt="" />
            <p>{props.body}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
