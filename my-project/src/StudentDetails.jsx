import React from 'react';

const StudentDetails = ({ studentList }) => {
    return (
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
    );
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

export default StudentDetails;
