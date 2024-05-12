import React, { useState } from 'react'
import './NewBlog.css'
import { Editor } from 'primereact/editor';


export default function NewBlog() {
    const [value, setValue] = useState('');
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }], // H1, H2, No Header
            ['bold', 'italic', 'underline', 'strike', 'blockquote'], // Text formatting
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], // Lists
            ['link', 'image', 'video'], // Media
            ['clean'] // Clear formatting
        ]
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    return (
        <>

            <div className='quill'>

                <Editor style={{ height: '320px' }} value={value} onTextChange={(e) => setValue(e.htmlValue)} />

            </div>
        </>
    )
}
