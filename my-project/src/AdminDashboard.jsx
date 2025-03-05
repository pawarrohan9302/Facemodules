import React, { useState, useRef } from 'react';
import { FaUser, FaSearch, FaRegAddressCard, FaPhoneAlt, FaUniversity, FaCalendarAlt, FaSun, FaMoon, FaTrash, FaEdit, FaFileExcel, FaCamera } from 'react-icons/fa';
import * as XLSX from 'xlsx';

const AdminDashboard = () => {
    const [studentData, setStudentData] = useState({
        name: '', rollNumber: '', branch: '', semester: '', year: '', mobile: '', address: ''
    });
    const [studentList, setStudentList] = useState([]);
    const [capturedImage, setCapturedImage] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [darkMode, setDarkMode] = useState(true);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const branches = ['Computer Science', 'Mechanical', 'Electrical', 'Civil', 'Electronics', 'IT', 'Data Science', 'MBA'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!capturedImage) {
            alert("Please capture the student's face image!");
            return;
        }
        const newStudent = { ...studentData, faceImage: capturedImage };
        if (editIndex !== null) {
            studentList[editIndex] = newStudent;
            setEditIndex(null);
        } else {
            setStudentList([...studentList, newStudent]);
        }
        setStudentData({ name: '', rollNumber: '', branch: '', semester: '', year: '', mobile: '', address: '' });
        setCapturedImage(null);
    };

    const startCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        }).catch((err) => console.error('Error accessing camera: ', err));
    };

    const captureFace = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        setCapturedImage(canvas.toDataURL('image/png'));
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(studentList);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Students");
        XLSX.writeFile(wb, "student_data.xlsx");
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} p-6 font-sans`}>
            <header className="flex justify-between items-center pb-4 border-b border-gray-700">
                <h1 className="text-3xl font-bold text-teal-400">Admin Dashboard</h1>
                <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </header>

            <div className="grid grid-cols-2 gap-6 mt-6">
                <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Add/Edit Student</h2>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        {['name', 'rollNumber', 'semester', 'year', 'mobile', 'address'].map((field, index) => (
                            <div key={index} className="flex items-center bg-gray-700 p-2 rounded">
                                <FaUser className="mr-2" />
                                <input type="text" name={field} value={studentData[field]} onChange={handleInputChange}
                                    placeholder={field.replace(/([A-Z])/g, ' $1')} required
                                    className="w-full bg-transparent border-none focus:outline-none" />
                            </div>
                        ))}
                        <select name="branch" value={studentData.branch} onChange={handleInputChange} required
                            className="p-2 w-full bg-gray-700 border border-gray-600 rounded focus:outline-none">
                            <option value="">Select Branch</option>
                            {branches.map((branch, index) => (
                                <option key={index} value={branch}>{branch}</option>
                            ))}
                        </select>
                        <button type="button" onClick={startCamera} className="bg-teal-400 text-gray-900 px-4 py-2 rounded flex items-center">
                            <FaCamera className="mr-2" /> Start Camera
                        </button>
                        <video ref={videoRef} width="320" height="240" autoPlay className="mt-4 border border-teal-400 rounded" />
                        <canvas ref={canvasRef} className="hidden" />
                        <button type="button" onClick={captureFace} className="bg-teal-400 text-gray-900 px-4 py-2 rounded mt-2">Capture Face</button>
                        <button type="submit" className="bg-teal-400 text-gray-900 px-4 py-2 rounded">{editIndex !== null ? 'Update' : 'Add'} Student</button>
                    </form>
                </section>

                <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Student List</h2>
                    <div className="flex justify-between mb-4">
                        <input type="text" placeholder="Search by Name or Branch" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                            className="p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none" />
                        <button onClick={exportToExcel} className="bg-green-500 px-4 py-2 rounded text-white flex items-center">
                            <FaFileExcel className="mr-2" /> Export
                        </button>
                    </div>
                    <div className="overflow-auto h-96">
                        <table className="w-full border border-gray-700">
                            <thead><tr className="bg-gray-700 text-white">
                                {['Name', 'Roll No.', 'Branch', 'Sem', 'Year', 'Mobile', 'Address', 'Face'].map((head) => <th key={head} className="p-2 border border-gray-700">{head}</th>)}
                            </tr></thead>
                            <tbody>
                                {studentList.map((student, index) => (
                                    <tr key={index} className="bg-gray-700 text-center">
                                        {Object.values(student).slice(0, 7).map((value, i) => <td key={i} className="border p-2">{value}</td>)}
                                        <td><img src={student.faceImage} alt="Face" className="w-12 h-12 mx-auto rounded" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default AdminDashboard;