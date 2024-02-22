import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, TextField, Typography } from '@mui/material';

function Create() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        image: null
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleImageChange = (event) => {
        setFormData({ ...formData, image: event.target.files[0] });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('content', formData.content);
            formDataToSend.append('author', formData.author);
            formDataToSend.append('image', formData.image);
            const response = await axios.post('http://localhost:3000/posts', formDataToSend);
            console.log('Response:', response.data);
            // Handle success, redirect, or show success message
        } catch (error) {
            console.error('Error:', error);
            // Handle error, show error message
        }
    };

    return (
        <div>
            <Typography gutterBottom variant='h3'>
                Create New Post
            </Typography>

            <Card className='p-5'>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <TextField
                        fullWidth
                        label='Title'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        label='Content'
                        name='content'
                        value={formData.content}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label='Author'
                        name='author'
                        value={formData.author}
                        onChange={handleChange}
                    />
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <Button type="submit" fullWidth variant='contained'>Create Post</Button>
                </form>
            </Card>
        </div>
    );
}

export default Create;
