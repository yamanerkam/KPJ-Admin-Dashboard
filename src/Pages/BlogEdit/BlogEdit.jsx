import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import './BlogEdit.css'
import { Editor } from 'primereact/editor';
import { BlogData as blog } from '../MainPage/BlogData';


export default function BlogEdit() {
    const { id } = useParams()
    const [value, setValue] = useState(blog[id].body);
    const [title, setTitle] = useState(blog[id].title);

    const handleCreate = (e) => {
        e.preventDefault()
        console.log(title, value)
    }

    return (
        <>
            <form onSubmit={handleCreate} action="submit">
                <div>

                    <input className='inp' onChange={((e) => setTitle(e.target.value))} value={title} type="text" />
                    <button type='submit'>Edit</button>

                </div>

                <div className='quill'>
                    <Editor style={{ height: '320px' }} value={value} onTextChange={(e) => setValue(e.htmlValue)} />
                </div>


            </form>



        </>
    )
}
