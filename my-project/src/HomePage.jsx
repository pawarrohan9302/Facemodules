// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';

const HomePage = () => {
    const fadeInEffect = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#1a202c',
                color: '#ffffff',
                minHeight: '100vh',
                padding: '20px',
            }}
        >
            {/* Header Section */}
            <header
                style={{
                    textAlign: 'center',
                    padding: '20px 0',
                    borderBottom: '1px solid #4a5568',
                }}
            >
                <motion.h1
                    style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        color: '#4fd1c5',
                    }}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInEffect}
                    transition={{ duration: 0.5 }}
                >
                    AI Smart Attendance System
                </motion.h1>
                <motion.p
                    style={{ fontSize: '1.2rem', marginTop: '10px' }}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInEffect}
                    transition={{ duration: 0.7 }}
                >
                    Revolutionizing attendance with AI and face recognition technology
                </motion.p>
            </header>

            {/* Introduction Section */}
            <section
                style={{
                    marginTop: '30px',
                    textAlign: 'center',
                    padding: '10px 20px',
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaRobot style={{ fontSize: '5rem', color: '#38b2ac' }} />
                </motion.div>
                <motion.h2
                    style={{ fontSize: '2rem', marginTop: '15px', fontWeight: '600' }}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInEffect}
                    transition={{ duration: 0.8 }}
                >
                    Why Choose Our System?
                </motion.h2>
                <motion.p
                    style={{ marginTop: '10px', fontSize: '1rem', lineHeight: '1.5' }}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInEffect}
                    transition={{ duration: 1 }}
                >
                    Our AI-powered attendance system ensures accuracy and efficiency. With
                    real-time face recognition, dynamic attendance tracking, and multilingual
                    support, managing attendance has never been easier.
                </motion.p>
            </section>

            {/* Call to Action */}
            <motion.footer
                style={{
                    marginTop: '50px',
                    textAlign: 'center',
                    padding: '20px 0',
                    backgroundColor: '#2d3748',
                    borderRadius: '10px',
                }}
                initial="hidden"
                animate="visible"
                variants={fadeInEffect}
                transition={{ duration: 1 }}
            >
                <h2 style={{ fontSize: '2rem', fontWeight: '600' }}>
                    Get Started Now
                </h2>
                <p style={{ marginTop: '10px', fontSize: '1rem' }}>
                    Choose your role and explore the possibilities.
                </p>
                <div
                    style={{
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    <Link to="/admin">
                        <motion.button
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4fd1c5',
                                color: '#1a202c',
                                borderRadius: '5px',
                                fontWeight: '600',
                                cursor: 'pointer',
                            }}
                            whileHover={{ scale: 1.1 }}
                        >
                            Admin Login
                        </motion.button>
                    </Link>
                    <Link to="/student">
                        <motion.button
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4fd1c5',
                                color: '#1a202c',
                                borderRadius: '5px',
                                fontWeight: '600',
                                cursor: 'pointer',
                            }}
                            whileHover={{ scale: 1.1 }}
                        >
                            Student Login
                        </motion.button>
                    </Link>
                </div>
            </motion.footer>
        </div>
    );
};

export default HomePage;