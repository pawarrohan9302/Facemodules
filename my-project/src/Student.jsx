import React from 'react';
import { motion } from 'framer-motion';

const Student = () => {
    const fadeInEffect = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const attendanceData = [
        { date: '2025-01-01', time: '9:00 AM', status: 'Present' },
        { date: '2025-01-02', time: '9:05 AM', status: 'Late' },
        { date: '2025-01-03', time: 'Absent', status: 'Absent' },
    ];

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
            <motion.h2
                style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#4fd1c5',
                }}
                initial="hidden"
                animate="visible"
                variants={fadeInEffect}
                transition={{ duration: 0.5 }}
            >
                Student Dashboard
            </motion.h2>
            <motion.div
                style={{
                    marginTop: '20px',
                    textAlign: 'center',
                    backgroundColor: '#2d3748',
                    padding: '20px',
                    borderRadius: '10px',
                }}
                initial="hidden"
                animate="visible"
                variants={fadeInEffect}
                transition={{ duration: 0.7 }}
            >
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                    Welcome to Your Attendance Record
                </h3>
                <p style={{ marginTop: '10px', fontSize: '1rem' }}>
                    Track your attendance history and stay updated.
                </p>
            </motion.div>

            <motion.div
                style={{
                    marginTop: '30px',
                    textAlign: 'center',
                    backgroundColor: '#2d3748',
                    padding: '20px',
                    borderRadius: '10px',
                }}
                initial="hidden"
                animate="visible"
                variants={fadeInEffect}
                transition={{ duration: 0.9 }}
            >
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4fd1c5' }}>
                    Attendance History
                </h3>
                <table
                    style={{
                        width: '100%',
                        marginTop: '15px',
                        borderCollapse: 'collapse',
                    }}
                >
                    <thead>
                        <tr>
                            <th
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#4a5568',
                                    color: '#ffffff',
                                    borderBottom: '1px solid #4fd1c5',
                                }}
                            >
                                Date
                            </th>
                            <th
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#4a5568',
                                    color: '#ffffff',
                                    borderBottom: '1px solid #4fd1c5',
                                }}
                            >
                                Time
                            </th>
                            <th
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#4a5568',
                                    color: '#ffffff',
                                    borderBottom: '1px solid #4fd1c5',
                                }}
                            >
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData.map((record, index) => (
                            <tr key={index}>
                                <td
                                    style={{
                                        padding: '10px',
                                        textAlign: 'center',
                                        borderBottom: '1px solid #4a5568',
                                    }}
                                >
                                    {record.date}
                                </td>
                                <td
                                    style={{
                                        padding: '10px',
                                        textAlign: 'center',
                                        borderBottom: '1px solid #4a5568',
                                    }}
                                >
                                    {record.time}
                                </td>
                                <td
                                    style={{
                                        padding: '10px',
                                        textAlign: 'center',
                                        borderBottom: '1px solid #4a5568',
                                        color: record.status === 'Absent' ? '#e53e3e' : '#4fd1c5',
                                    }}
                                >
                                    {record.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>

            <motion.footer
                style={{
                    marginTop: '40px',
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: '#2d3748',
                    borderRadius: '10px',
                }}
                initial="hidden"
                animate="visible"
                variants={fadeInEffect}
                transition={{ duration: 1 }}
            >
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>Stay Regular!</h3>
                <p style={{ marginTop: '10px', fontSize: '1rem' }}>
                    Attendance is the first step to success.
                </p>
            </motion.footer>
        </div>
    );
};

export default Student;
