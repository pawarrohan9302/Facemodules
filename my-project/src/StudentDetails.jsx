import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bar } from "recharts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const StudentDetails = () => {
    const [student, setStudent] = useState({
        name: "Rohan Kumar",
        rollNumber: "DS202401",
        branch: "Data Science",
        year: "2nd Year",
        contact: "+91 9876543210",
        attendance: [
            { month: "Jan", percentage: 85 },
            { month: "Feb", percentage: 90 },
            { month: "Mar", percentage: 88 },
            { month: "Apr", percentage: 92 },
        ],
    });

    const studentList = [
        {
            name: "Rohan Kumar",
            rollNumber: "DS202401",
            branch: "Data Science",
            semester: "4th",
            year: "2nd Year",
            mobile: "+91 9876543210",
            address: "Burhanpur, MP",
            faceImage: "https://via.placeholder.com/50",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl w-full"
            >
                <h1 className="text-3xl font-bold text-center mb-6">Student Dashboard</h1>

                <Card className="p-6 bg-white rounded-2xl shadow-lg">
                    <CardContent>
                        <h2 className="text-xl font-semibold mb-4">Student Profile</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <p><strong>Name:</strong> {student.name}</p>
                            <p><strong>Roll No:</strong> {student.rollNumber}</p>
                            <p><strong>Branch:</strong> {student.branch}</p>
                            <p><strong>Year:</strong> {student.year}</p>
                            <p><strong>Contact:</strong> {student.contact}</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="p-6 bg-white rounded-2xl shadow-lg mt-6">
                    <CardContent>
                        <h2 className="text-xl font-semibold mb-4">Attendance Overview</h2>
                        <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
                            <Bar data={student.attendance} xKey="month" yKey="percentage" />
                        </div>
                    </CardContent>
                </Card>

                <section className="mt-8 w-full">
                    <h2 className="text-2xl font-semibold text-center">Student List</h2>
                    <table className="mt-4 w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-teal-500 text-white">
                                <th className="p-2">Name</th>
                                <th className="p-2">Roll Number</th>
                                <th className="p-2">Branch</th>
                                <th className="p-2">Semester</th>
                                <th className="p-2">Year</th>
                                <th className="p-2">Mobile</th>
                                <th className="p-2">Address</th>
                                <th className="p-2">Face</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentList.map((student, index) => (
                                <tr key={index} className="border-b border-teal-500">
                                    <td className="p-2 text-center">{student.name}</td>
                                    <td className="p-2 text-center">{student.rollNumber}</td>
                                    <td className="p-2 text-center">{student.branch}</td>
                                    <td className="p-2 text-center">{student.semester}</td>
                                    <td className="p-2 text-center">{student.year}</td>
                                    <td className="p-2 text-center">{student.mobile}</td>
                                    <td className="p-2 text-center">{student.address}</td>
                                    <td className="p-2 text-center">
                                        <img src={student.faceImage} alt="Captured Face" className="w-12 h-12 rounded-full" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <div className="mt-6 flex justify-center">
                    <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Logout</Button>
                </div>
            </motion.div>
        </div>
    );
};

export default StudentDetails;