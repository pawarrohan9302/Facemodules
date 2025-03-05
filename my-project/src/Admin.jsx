import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Admin = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const correctPassword = "admin123";

    const handleLogin = () => {
        if (password === correctPassword) {
            navigate("/admin/dashboard");
        } else {
            setError("❌ Incorrect password! Try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
            <motion.div
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700 w-96 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">Admin Login</h2>
                <motion.input
                    type="password"
                    placeholder="Enter Admin Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()} // 🔥 Enter key support
                    className="w-full px-4 py-3 bg-gray-800/80 text-white border border-cyan-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                />
                {error && <p className="text-red-500 mt-3">{error}</p>}
                <motion.button
                    onClick={handleLogin}
                    className="w-full mt-5 py-3 bg-cyan-400 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-500 hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                >
                    Login
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Admin;
