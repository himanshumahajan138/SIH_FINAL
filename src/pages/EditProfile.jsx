import React, { useState } from 'react';
import { FaUser, FaTrash, FaEye, FaEdit, FaPlus } from 'react-icons/fa'; // Import required icons
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
export default function EditStudent() {
    const [isEditing, setIsEditing] = useState(false); // Controls whether the form is in edit mode
    const navigate=useNavigate();
    const [registrationData, setRegistrationData] = useState({
        name: 'John Doe',
        fatherName: 'Robert Doe',
        motherName: 'Jane Doe',
        address: '123 Main St',
        phoneNumber: '1234567890',
        adhaarCard: 'XXXX-XXXX-XXXX',
        college: 'ABC College',
        collegeId: 'COL123456',
        school12th: 'XYZ High School',
        marks12th: '85%',
        school10th: 'ABC School',
        marks10th: '90%'
    });
    const [documents, setDocuments] = useState([
        { name: 'Aadhar Card', uploaded: true, url: '/path/to/aadhar' },
        { name: 'Domicile', uploaded: true, url: '/path/to/domicile' },
        { name: '12th Marksheet', uploaded: true, url: '/path/to/12th' },
        { name: '10th Marksheet', uploaded: true, url: '/path/to/10th' },
        { name: 'Low Income Certificate', uploaded: false, url: null }
    ]);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e, field) => {
        setRegistrationData({ ...registrationData, [field]: e.target.value });
    };

    const handleFileUpload = (e, index) => {
        const file = e.target.files[0];
        const updatedDocs = [...documents];
        if (file) {
            updatedDocs[index] = { ...updatedDocs[index], uploaded: true, url: URL.createObjectURL(file) };
        }
        setDocuments(updatedDocs);
    };

    const handleDeleteDoc = (index) => {
        const updatedDocs = [...documents];
        updatedDocs[index] = { ...updatedDocs[index], uploaded: false, url: null };
        setDocuments(updatedDocs);
    };

    const handleNewDocumentUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setDocuments([...documents, { name: file.name, uploaded: true, url: URL.createObjectURL(file) }]);
        }
    };

    const handleSubmit = () => {
        // Logic to send the updated registration data and documents to the backend
        alert('Updated student data successfully!');
    };

    return (
        <>
         <div className="flex justify-between">
        <div className="flex space-x-2">
          <img
            src={require('../assets/logo.jpg')}
            alt="loading"
            className="h-32 w-32 brightness-95 contrast-200"
          />
          <div className="pt-5">
            <h1 className="text-4xl font-extrabold cursor-pointer" onClick={()=>{navigate('/')}}>PMSSS</h1>
            <h3 className="text-lg font-semibold">Academic Year 2024-2025</h3>
          </div>
        </div>

        {/* Navbar component */}
        <Navbar />
      </div>
        <div className='px-4 py-5'>
            <div className="flex justify-between">
                <h1 className="text-3xl ml-5 font-extrabold">Edit Student Information</h1>
            </div>

            <div className="mt-8 px-20">
                {/* Profile Picture and Personal Info Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Student Details</h2>
                        <button onClick={handleEditToggle} className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center">
                            <FaEdit className="mr-2" /> {isEditing ? 'Stop Editing' : 'Edit'}
                        </button>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-6">
                        {[
                            { label: 'Name', value: registrationData.name, field: 'name' },
                            { label: "Father's Name", value: registrationData.fatherName, field: 'fatherName' },
                            { label: "Mother's Name", value: registrationData.motherName, field: 'motherName' },
                            { label: 'Address', value: registrationData.address, field: 'address' },
                            { label: 'Phone Number', value: registrationData.phoneNumber, field: 'phoneNumber' },
                            { label: 'Aadhaar Card', value: registrationData.adhaarCard, field: 'adhaarCard' },
                            { label: 'College', value: registrationData.college, field: 'college' },
                            { label: 'College ID', value: registrationData.collegeId, field: 'collegeId' },
                            { label: '12th School', value: registrationData.school12th, field: 'school12th' },
                            { label: '12th Marks', value: registrationData.marks12th, field: 'marks12th' },
                            { label: '10th School', value: registrationData.school10th, field: 'school10th' },
                            { label: '10th Marks', value: registrationData.marks10th, field: 'marks10th' }
                        ].map(({ label, value, field }, index) => (
                            <div key={index} className="flex flex-col">
                                <label className="font-semibold">{label}</label>
                                <input
                                    type="text"
                                    value={value}
                                    disabled={!isEditing}
                                    onChange={(e) => handleInputChange(e, field)}
                                    className={`p-2 w-full border ${isEditing ? 'border-gray-300' : 'border-gray-100'} rounded mt-1`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Document Section */}
                <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold">Documents</h2>
                    <table className="w-full mt-4 border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 text-left">Document</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-left">Actions</th>
                                {isEditing && <th className="p-3 text-left">Add/Replace</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map((doc, index) => (
                                <tr key={index}>
                                    <td className="p-3">{doc.name}</td>
                                    <td className="p-3">
                                        {doc.uploaded ? (
                                            <span className="text-green-500 font-semibold">Uploaded</span>
                                        ) : (
                                            <span className="text-red-500 font-semibold">Not Uploaded</span>
                                        )}
                                    </td>
                                    <td className="p-3 flex space-x-4">
                                        {doc.uploaded && (
                                            <>
                                                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                                    <FaEye className="text-blue-500 cursor-pointer" />
                                                </a>
                                                {isEditing && (
                                                    <FaTrash
                                                        className="text-red-500 cursor-pointer"
                                                        onClick={() => handleDeleteDoc(index)}
                                                        />
                                                    )}
                                            </>
                                        )}
                                    </td>
                                    {isEditing && (
                                        <td className="p-3">
                                            <input
                                                type="file"
                                                onChange={(e) => handleFileUpload(e, index)}
                                                className="p-2 border border-gray-300 rounded"
                                            />
                                        </td>
                                    )}
                                </tr>
                            ))}
                            {isEditing && (
                                <tr>
                                    <td colSpan={3} className="p-3">
                                        <input
                                            type="file"
                                            onChange={handleNewDocumentUpload}
                                            className="p-2 border border-gray-300 rounded w-full"
                                        />
                                    </td>
                                    <td className="p-3 text-center">
                                        <FaPlus className="text-green-500 cursor-pointer" />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Submit Button */}
                {isEditing && (
                    <div className="flex justify-end mt-6">
                        <button onClick={handleSubmit} className="px-6 py-2 bg-green-500 text-white rounded-lg">
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
        </div>
        <Footer/>
                </>
    );
}
