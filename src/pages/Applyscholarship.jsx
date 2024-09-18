import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
const ApplyScholarship = () => {
    const [formData, setFormData] = useState({
        name: '',
        rollNo: '',
        course: '',
        institute: '',
        year: '',
        semester: '',
    });
    const [documents, setDocuments] = useState({
        result: null,
        incomeCertificate: null,
    });
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e, docType) => {
        const file = e.target.files[0];
        if (file) {
            setDocuments({ ...documents, [docType]: file });
        }
    };

    const handleSubmit = () => {
        if (termsAccepted) {
            // Handle form submission logic here
            alert('Scholarship application submitted successfully!');
        } else {
            alert('Please accept the terms and conditions.');
        }
    };
    const navigate=useNavigate();
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
          <h1 className="text-4xl font-extrabold cursor-pointer" onClick={()=>{navigate("/")}}>PMSSS</h1>
          <h3 className="text-lg font-semibold">Academic Year 2024-2025</h3>
        </div>
      </div>
      <Navbar/>
      </div>
        <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg my-6 rounded-lg shadow-black">
            <h1 className="text-3xl font-bold mb-6 text-center">Apply for Scholarship</h1>
            
            <div className="grid grid-cols-1 gap-6 mb-6">
                {[
                    { label: "Name", name: "name" },
                    { label: "Student Roll No", name: "rollNo" },
                    { label: "Course", name: "course" },
                    { label: "Institute Name", name: "institute" },
                    { label: "Year", name: "year" },
                    { label: "Semester", name: "semester" }
                ].map(({ label, name }, index) => (
                    <div key={index} className="flex flex-col">
                        <label className="font-semibold">{label} <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name={name}
                            value={formData[name]}
                            onChange={handleInputChange}
                            placeholder={`Enter your ${label.toLowerCase()}`}
                            className="p-2 border border-gray-300 rounded mt-1 w-full"
                        />
                    </div>
                ))}
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Upload Documents</h2>
                <div className="flex flex-col space-y-4">
                    <div>
                        <label className="font-semibold">Upload Result Document <span className="text-red-500">*</span></label>
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={(e) => handleFileChange(e, 'result')}
                            className="p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <div>
                        <label className="font-semibold">Low Income Certificate <span className="text-red-500">*</span></label>
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={(e) => handleFileChange(e, 'incomeCertificate')}
                            className="p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                </div>
            </div>

            <div className="mb-6 flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                    className="h-5 w-5"
                />
                <label className="font-semibold">I declare that the data provided is correct and I accept all terms and conditions</label>
            </div>

            <div className="text-center">
                <button
                    onClick={handleSubmit}
                    className={`px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold ${!termsAccepted ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!termsAccepted}
                >
                    Apply
                </button>
            </div>
        </div>
        <Footer/>
                </>
    );
};

export default ApplyScholarship;
