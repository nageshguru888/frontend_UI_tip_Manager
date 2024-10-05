import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './My Components/Login';
import Register from './My Components/Register';
import TipCalculator from './My Components/TipCalculator';
import TipRecords from './My Components/TipRecords';
import { AuthProvider, useAuth } from './AuthContext';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? element : <Navigate to="/" />;
};

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <nav>
                        <Link to="/">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/tip-calculator">Tip Calculator</Link>
                        <Link to="/tip-records">Tip Records</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/tip-calculator" element={<ProtectedRoute element={<TipCalculator />} />} />
                        <Route path="/tip-records" element={<ProtectedRoute element={<TipRecords />} />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
