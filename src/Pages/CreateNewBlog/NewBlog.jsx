import React, { useState } from 'react'
import './NewBlog.css'
import { Editor } from 'primereact/editor';


export default function NewBlog() {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');

    const handleCreate = (e) => {
        e.preventDefault()
        setValue('')
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
                    <Editor style={{ height: '320px' }} value={value} onTextChange={(e) => setValue(e.htmlValue)} />
                </div>


            </form>



        </>
    )
}
