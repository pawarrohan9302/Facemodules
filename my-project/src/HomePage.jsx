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
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-sans relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-48 h-48 bg-cyan-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            </div>

            {/* Header Section */}
            <motion.header
                className="text-center relative z-10"
                initial="hidden"
                animate="visible"
                variants={fadeInEffect}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl font-extrabold text-cyan-400 drop-shadow-xl tracking-wider">
                    AI Smart Attendance System
                </h1>
                <p className="text-xl mt-3 text-gray-300 italic">
                    Revolutionizing attendance with AI and face recognition technology
                </p>
            </motion.header>

            {/* Introduction Section */}
            <motion.section
                className="mt-12 text-center relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                    <FaRobot className="text-8xl text-cyan-300 drop-shadow-2xl animate-spin-slow" />
                </motion.div>
                <h2 className="text-4xl font-semibold mt-4 text-cyan-400">Why Choose Our System?</h2>
                <p className="mt-2 text-gray-300 px-6 max-w-3xl mx-auto leading-relaxed text-lg">
                    Our AI-powered attendance system ensures <span className="text-cyan-300 font-bold">accuracy and efficiency</span>. With real-time
                    face recognition, dynamic tracking, and multilingual support, managing attendance has never been easier.
                </p>
            </motion.section>

            {/* Call to Action */}
            <motion.footer
                className="mt-16 bg-gray-900 rounded-2xl py-8 px-12 text-center shadow-xl border border-cyan-400 relative z-10"
                initial="hidden"
                animate="visible"
                variants={fadeInEffect}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl font-bold text-cyan-400">Get Started Now</h2>
                <p className="mt-3 text-gray-300 text-lg">Choose your role and explore the possibilities.</p>
                <div className="mt-6 flex justify-center gap-6">
                    <Link to="/admin">
                        <motion.button
                            className="px-8 py-3 bg-cyan-400 text-black rounded-lg font-bold shadow-lg hover:bg-cyan-500 hover:shadow-cyan-500/50 transition-all transform hover:scale-110"
                            whileHover={{ scale: 1.1 }}
                        >
                            Admin Login
                        </motion.button>
                    </Link>
                    <Link to="/student">
                        <motion.button
                            className="px-8 py-3 bg-cyan-400 text-black rounded-lg font-bold shadow-lg hover:bg-cyan-500 hover:shadow-cyan-500/50 transition-all transform hover:scale-110"
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