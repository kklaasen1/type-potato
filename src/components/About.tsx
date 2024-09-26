import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

interface AboutProps {
    name: string;
}

const About: React.FC<AboutProps> = ({ name }) => {
    const hobbies = ['Lugemine', 'Reisimine', 'Jooga', 'Rattasõit', 'Küpsetamine'];
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ email, message });
        setEmail('');
        setMessage('');
    };

    return (
        <Paper style={{ padding: 20 }}>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="h6">Hobid:</Typography>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
            <form className="contact-form" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="E-mail"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    label="Sõnum"
                    value={message}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                    required
                    multiline
                    rows={4}
                />
                <Button type="submit" variant="contained" color="primary">
                    Saada
                </Button>
            </form>
        </Paper>
    );
};

export default About;
