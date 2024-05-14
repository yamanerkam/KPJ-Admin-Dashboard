import React from 'react'
import './Card.css'
import useButtonEdit from '../hooks/useButtonEdit'
import { useNavigate } from "react-router-dom";


export default function Card(props) {
    const handleClickEdit = useButtonEdit()
    const navigate = useNavigate();
    const handleEditClickk = (e, id) => {
        if (id) {
        } else {
            console.error("Cannot edit blog post with undefined ID.");
        }
    };


    return (

        <div onClick={props.onClick} style={{ cursor: 'pointer' }} className='card'>
            <h1>{props.title}</h1>
            <img src={props.img} alt="" />
            <p>{props.body}</p>
            <button onClick={((e) => {
                e.stopPropagation();
                navigate(`/blog/edit/${props.id}`);


            })}>Edit</button>
            <button>Delete</button>
        </div >
    )
}
