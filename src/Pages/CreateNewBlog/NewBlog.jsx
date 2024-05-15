import React, { useState } from 'react'
import './NewBlog.css'
import { Editor } from 'primereact/editor';


export default function NewBlog() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    const handleCreate = async (e) => {

        e.preventDefault()

        const newBlog = {
            title,
            content,

        };

        try {
            const response = await fetch('http://localhost:3000/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBlog),
            });
            const data = await response.json();
            console.log('Blog created:', data);
        } catch (error) {
            console.error('Error creating blog:', error);
        }



        setContent('')
        setTitle('')
        console.log(title, value)
    }

    return (
        <>
            <form onSubmit={handleCreate} action="submit">
                <div>
                    <h1>Create Page</h1>

                    <input className='inp' onChange={((e) => setTitle(e.target.value))} value={title} type="text" />
                    <button type='submit'>Create</button>

                </div>

                <div className='quill'>

                    <input style={{ height: '320px' }} value={content} onChange={(e) => setContent(e.target.value)} />
                </div>


            </form>



        </>
    )
}
