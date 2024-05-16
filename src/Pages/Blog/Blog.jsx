import React, { useContext, useState, useEffect } from "react";
import './Blog.css'
import { useParams, useNavigate } from 'react-router-dom';
import { BlogData as blog } from '../MainPage/BlogData';
import useButtonEdit from '../../hooks/useButtonEdit';


export default function Blog() {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id)
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3000/api/blogs/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                console.log(data)
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    const deleteBlog = () => {
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
    console.log(data)
    const handleClickEdit = useButtonEdit()

    return (
        <div className='blog'>
            <div className="blogCard">
                {data && (<>
                    <h1>{data.title}</h1>
                    <p>{data.content}</p>
                    <div className="buttonContainer">
                        <button onClick={(e) => { navigate(`/blog/edit/${id}`); }}>Edit</button>
                        <button onClick={(e) => deleteBlog()}>Delete</button>
                    </div></>)}
            </div>
        </div>

    )
}
