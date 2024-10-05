import React, { useState } from 'react';
import { loginView } from '../api';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loginView } = useAuth(); 
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginView({ email, password });
            localStorage.setItem('token', response.data.token);
            loginView(); 
            alert('Login successful!');
            navigate('/tip-calculator'); 
        } catch {
            alert('Invalid credentials.');
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
    );
};

export default Login;
