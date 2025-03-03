import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Admin from './Admin'; // Updated import for Admin
import Student from './Student'; // Updated import for Student
import AdminDashboard from './AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Admin Page */}
        <Route path="/admin" element={<Admin />} />

        {/* Student Page */}
        <Route path="/student" element={<Student />} />

        {/* Admin Dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
