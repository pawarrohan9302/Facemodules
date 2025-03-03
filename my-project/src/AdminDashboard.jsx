import React, { useState, useRef } from 'react';
import { FaUser, FaRegAddressCard, FaPhoneAlt, FaUniversity, FaCalendarAlt } from 'react-icons/fa';

const AdminDashboard = () => {
    const [studentData, setStudentData] = useState({
        name: '',
        rollNumber: '',
        branch: '',
        semester: '',
        year: '',
        mobile: '',
        address: '',
    });

    const [studentList, setStudentList] = useState([]); // To store added student data
    const [capturedImage, setCapturedImage] = useState(null); // To store captured face photo

    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const branches = [
        'Computer Science Engineering',
        'Mechanical Engineering',
        'Electrical Engineering',
        'Civil Engineering',
        'Electronics and Communication Engineering',
        'Information Technology',
        'Data Science',
        'MBA',
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!capturedImage) {
            alert("Please capture the student's face image!");
            return;
        }

        // Add student data and captured image to the student list
        setStudentList([...studentList, { ...studentData, faceImage: capturedImage }]);

        // Reset form fields and captured image
        setStudentData({
            name: '',
            rollNumber: '',
            branch: '',
            semester: '',
            year: '',
            mobile: '',
            address: '',
        });
        setCapturedImage(null);
    };

    const startCamera = () => {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                })
                .catch((err) => {
                    console.error('Error accessing camera: ', err);
                });
        } else {
            alert('Camera not supported');
        }
    };

    const captureFace = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Save the captured image as base64
        const dataUrl = canvas.toDataURL('image/png');
        setCapturedImage(dataUrl);
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
            <header style={{ textAlign: 'center', padding: '20px 0', borderBottom: '1px solid #4a5568' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#4fd1c5' }}>
                    Admin Dashboard
                </h1>
            </header>

            {/* Form to Add Student Data */}
            <section style={{ marginTop: '30px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '600' }}>Add Student Data</h2>

                <form onSubmit={handleFormSubmit} style={{ marginTop: '20px', maxWidth: '500px', margin: '0 auto' }}>
                    {/* Student Info Inputs */}
                    <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaUser style={iconStyle} />
                        <input
                            type="text"
                            name="name"
                            value={studentData.name}
                            onChange={handleInputChange}
                            placeholder="Student Name"
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaUniversity style={iconStyle} />
                        <input
                            type="text"
                            name="rollNumber"
                            value={studentData.rollNumber}
                            onChange={handleInputChange}
                            placeholder="Roll Number"
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaUniversity style={iconStyle} />
                        <select
                            name="branch"
                            value={studentData.branch}
                            onChange={handleInputChange}
                            required
                            style={inputStyle}
                        >
                            <option value="">Select Branch</option>
                            {branches.map((branch, index) => (
                                <option key={index} value={branch}>
                                    {branch}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaCalendarAlt style={iconStyle} />
                        <input
                            type="text"
                            name="semester"
                            value={studentData.semester}
                            onChange={handleInputChange}
                            placeholder="Semester"
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaCalendarAlt style={iconStyle} />
                        <input
                            type="text"
                            name="year"
                            value={studentData.year}
                            onChange={handleInputChange}
                            placeholder="Year"
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaPhoneAlt style={iconStyle} />
                        <input
                            type="text"
                            name="mobile"
                            value={studentData.mobile}
                            onChange={handleInputChange}
                            placeholder="Mobile Number"
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaRegAddressCard style={iconStyle} />
                        <input
                            type="text"
                            name="address"
                            value={studentData.address}
                            onChange={handleInputChange}
                            placeholder="Address"
                            required
                            style={inputStyle}
                        />
                    </div>

                    {/* Face Capture Section */}
                    <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <button
                            type="button"
                            onClick={startCamera}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4fd1c5',
                                color: '#1a202c',
                                borderRadius: '5px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                marginBottom: '20px',
                            }}
                        >
                            Start Camera
                        </button>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            {/* Video stream from webcam */}
                            <video
                                ref={videoRef}
                                width="320"
                                height="240"
                                autoPlay
                                style={{
                                    borderRadius: '10px',
                                    border: '2px solid #4fd1c5',
                                    marginBottom: '20px',
                                }}
                            />
                            <canvas
                                ref={canvasRef}
                                width="320"
                                height="240"
                                style={{
                                    position: 'absolute',
                                    borderRadius: '10px',
                                    border: '2px solid #4fd1c5',
                                    visibility: 'hidden',
                                }}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={captureFace}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4fd1c5',
                                color: '#1a202c',
                                borderRadius: '5px',
                                fontWeight: '600',
                                cursor: 'pointer',
                            }}
                        >
                            Capture Face
                        </button>
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#4fd1c5',
                            color: '#1a202c',
                            borderRadius: '5px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            marginTop: '20px',
                        }}
                    >
                        Add Student
                    </button>
                </form>
            </section>

            {/* Displaying List of Added Students */}
            <section style={{ marginTop: '30px' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '600', textAlign: 'center' }}>Student List</h2>
                <table
                    style={{
                        marginTop: '20px',
                        width: '100%',
                        borderCollapse: 'collapse',
                        textAlign: 'left',
                    }}
                >
                    <thead>
                        <tr>
                            <th style={tableHeaderStyle}>Name</th>
                            <th style={tableHeaderStyle}>Roll Number</th>
                            <th style={tableHeaderStyle}>Branch</th>
                            <th style={tableHeaderStyle}>Semester</th>
                            <th style={tableHeaderStyle}>Year</th>
                            <th style={tableHeaderStyle}>Mobile</th>
                            <th style={tableHeaderStyle}>Address</th>
                            <th style={tableHeaderStyle}>Face</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((student, index) => (
                            <tr key={index}>
                                <td style={tableCellStyle}>{student.name}</td>
                                <td style={tableCellStyle}>{student.rollNumber}</td>
                                <td style={tableCellStyle}>{student.branch}</td>
                                <td style={tableCellStyle}>{student.semester}</td>
                                <td style={tableCellStyle}>{student.year}</td>
                                <td style={tableCellStyle}>{student.mobile}</td>
                                <td style={tableCellStyle}>{student.address}</td>
                                <td style={tableCellStyle}>
                                    <img
                                        src={student.faceImage}
                                        alt="Captured Face"
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

const inputStyle = {
    padding: '10px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #4fd1c5',
    backgroundColor: '#2d3748',
    color: '#ffffff',
    marginTop: '10px',
};

const iconStyle = {
    fontSize: '1.5rem',
    color: '#4fd1c5',
    marginBottom: '10px',
};

const tableHeaderStyle = {
    padding: '10px',
    backgroundColor: '#4fd1c5',
    color: '#ffffff',
    textAlign: 'center',
};

const tableCellStyle = {
    padding: '10px',
    borderBottom: '1px solid #4fd1c5',
    textAlign: 'center',
};

export default AdminDashboard;
