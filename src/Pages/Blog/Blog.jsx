import React from 'react'
import './Blog.css'
import { useParams, useNavigate } from 'react-router-dom';
import { BlogData as blog } from '../MainPage/BlogData';
import useButtonEdit from '../../hooks/useButtonEdit';


export default function Blog() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleClickEdit = useButtonEdit()

    return (
        <div className='blog'>
            <div className="blogCard">
                <h1>{blog[id].title}</h1>
                <p>{blog[id].body}</p>
                <div className="buttonContainer">
                    <button onClick={(e) => { navigate(`/blog/edit/${id}`); }}>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>

    )
}
