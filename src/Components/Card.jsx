import React, { useContext, useState, useEffect } from "react";
import './Card.css'
import useButtonEdit from '../hooks/useButtonEdit'
import { useNavigate } from "react-router-dom";


export default function Card(props) {
    const handleClickEdit = useButtonEdit()
    const navigate = useNavigate();



    const deleteBlog = (id) => {
        fetch(`http://localhost:3000/api/blogs/${id}`, {
            method: 'DELETE'
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
            .then(data => {
                console.log(data);
                navigate('/dashboard')

            })
            .catch(error => console.error('Error deleting blog:', error));
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
            <button
                onClick={((e) => {
                    e.stopPropagation();
                    deleteBlog(props.id)


                })}
            >Delete</button>
        </div >
    )
}
