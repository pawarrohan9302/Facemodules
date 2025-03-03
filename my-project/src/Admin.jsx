import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const correctPassword = 'admin123'; // Example password

    const handleLogin = () => {
        if (password === correctPassword) {
            navigate('/admin/dashboard'); // Redirect to Admin Dashboard
        } else {
            setError('Incorrect password!'); // Show error message
        }
    };

    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#1a202c',
                color: '#ffffff',
                minHeight: '100vh',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#4fd1c5' }}>Admin Login</h2>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px',
                        border: '1px solid #4fd1c5',
                        backgroundColor: '#2d3748',
                        color: '#ffffff',
                    }}
                />
                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                <button
                    onClick={handleLogin}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#4fd1c5',
                        color: '#1a202c',
                        borderRadius: '5px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Admin;
