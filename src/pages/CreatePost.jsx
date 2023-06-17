import { useState } from "react";
import React from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [result, setResult] = useState('')

    fetch('https://jsonplaceholder.typicode.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title
        })
    })

    .then(response => response.json())
    .then(data => {
        setResult(data)
        console.log(data);
    })
    .catch(error => {
        console.log('Error: ' + error)
    })

    return (
        <div>
            <h2>Create post</h2>
            <label>
                title
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <button type="submit">create</button>
            {results && (
                <p>Title: {result.title}</p>
            )}
        </div>
    );
};

export default CreatePost;