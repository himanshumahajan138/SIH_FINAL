import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
export default function StudentDashboard({ data }) {
    const navigate=useNavigate();
    const studentData =data?data: {
        profileImage: '', // Replace with the actual image URL or base64 string
        name: 'Prince',
        fatherName: 'John Doe',
        motherName: 'Jane Doe',
        address: '123 Street, City, Country',
        phoneNumber: '9876543210',
        adhaarCard: '1234 5678 9012',
        college: 'XYZ University',
        collegeId: '123456',
        school12th: 'ABC High School',
        marks12th: '85%',
        school10th: 'DEF High School',
        marks10th: '90%',
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
        <div className="max-w-5xl mx-auto bg-slate-50 pt-4 pb-20 my-8 shadow-lg shadow-pink-300 rounded-lg p-6">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
                {studentData.profileImage ? (
                    <img
                    src={studentData.profileImage}
                    alt="Profile"
                    className="w-36 h-36 rounded-full object-cover shadow-lg"
                    />
                ) : (
                    <div className="w-36 h-36 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        <span>No Image</span>
                    </div>
                )}
            </div>

            {/* Student Details */}
            <div className="grid grid-cols-2 gap-6 ml-20">
                {/* Name */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">Name</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.name || 'N/A'}</p>
                </div>

                {/* Father's Name */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">Father's Name</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.fatherName || 'N/A'}</p>
                </div>

                {/* Mother's Name */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">Mother's Name</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.motherName || 'N/A'}</p>
                </div>

                {/* Address */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">Address</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.address || 'N/A'}</p>
                </div>

                {/* Phone Number */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">Phone Number</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.phoneNumber || 'N/A'}</p>
                </div>

                {/* Aadhaar Card */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">Aadhaar Card</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.adhaarCard || 'N/A'}</p>
                </div>

                {/* College */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">College</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.college || 'N/A'}</p>
                </div>

                {/* College ID */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">College ID</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.collegeId || 'N/A'}</p>
                </div>

                {/* 12th School Name */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">12th School Name</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.school12th || 'N/A'}</p>
                </div>

                {/* 12th Marks Details */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">12th Marks Details</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.marks12th || 'N/A'}</p>
                </div>

                {/* 10th School Name */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">10th School Name</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.school10th || 'N/A'}</p>
                </div>

                {/* 10th Marks Details */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-2xl w-80 min-h-36">
                    <h3 className="text-sm font-semibold text-gray-600">10th Marks Details</h3>
                    <p className="text-xl mt-3 font-bold text-gray-900">{studentData.marks10th || 'N/A'}</p>
                </div>
            </div>
        </div>
        <Footer/>
                    </>
    );
}
