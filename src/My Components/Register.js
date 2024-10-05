import React, { useState } from 'react';
import { userCreateView } from '../api'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [proPic, setProPic] = useState(null); 
    const navigate = useNavigate(); 

    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        if (proPic) {
            formData.append('proPic', proPic);
        }

        try {
            await userCreateView(formData); 
            alert('Registration successful!');
            navigate('/'); 
        } catch (error) {
            alert(`Error registering user: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => setProPic(e.target.files[0])} 
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
