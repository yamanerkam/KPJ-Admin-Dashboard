import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './BlogEdit.css'
import { Editor } from 'primereact/editor';


export default function BlogEdit() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        // Fetch the existing blog data to populate the form
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
                const data = await response.json();
                setTitle(data.title);
                setContent(data.content);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });
            if (response.ok) {
                navigate('/dashboard')
            } else {
                alert('Failed to update the blog.');
            }
        } catch (error) {
            console.error('Error updating blog:', error);
            alert('Failed to update the blog.');
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit} action="submit">
                <h1>Edit Page</h1>

                <div>

                    <input className='inp' onChange={((e) => setTitle(e.target.value))} value={title} type="text" />
                    <button type='submit'>Edit</button>

                </div>

                <div className='quill'>
                    <input style={{ height: '320px' }} value={content} onChange={(e) => setContent(e.target.value)} />
                </div>


            </form>



        </>
    )
}
