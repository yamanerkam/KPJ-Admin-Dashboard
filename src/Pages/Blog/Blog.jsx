import React from 'react'
import './Blog.css'
import { useParams } from 'react-router-dom';
import { BlogData as blog } from '../MainPage/BlogData';


export default function Blog() {
    const { id } = useParams();

    return (
        <div className='blog'>
            <div className="blogCard">
                <h1>{blog[id].title}</h1>
                <p>{blog[id].body}</p>
                <div className="buttonContainer">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>

    )
}
