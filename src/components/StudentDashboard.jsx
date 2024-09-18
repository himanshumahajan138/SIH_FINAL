import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Comps = () => {
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
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="px-20 space-y-6">
       
        <div className="text-center mb-8 mx-auto ">
          <h1 className="text-3xl font-extrabold text-gray-900 mx-auto text-center">Students Portal</h1>
          <p className="text-gray-600 mt-2">Welcome to the portal. Please find the necessary links below.</p>
        </div>

        <div className="grid grid-cols-3 gap-x-32 gap-6">

        {/* Your Profile Section */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col items-center space-y-6 h-96  w-80">
          <img src="https://scholarships.gov.in/public/assets2425/images/icons/stu-dash.svg" alt="Announcements" className="w-28 h-28 object-contain rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Profile</h2>
            <p className="text-gray-700">This section contains your profile which contains all the data the student have entered to the portal.</p>
            <p  className="mt-4 inline-block text-blue-600 cursor-pointer font-semibold hover:text-blue-800">Visit Profile</p>
          </div>
        </div>

        {/* OTR Section
        <div className="bg-green-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col h-96 w-80 items-center space-y-6">
          <img src="https://scholarships.gov.in/public/assets2425/images/icons/scor1.svg" alt="OTR" className="w-28 h-28 object-contain rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">OTR</h2>
            <p className="text-gray-700">One Time Registration (OTR) is a unique 14-digit number issued based on the Aadhaar/Aadhaar Enrolment ID (EID) and is applicable for the entire academic career of the student.</p>
            <p className="text-gray-700 mt-2">OTR is required to apply for scholarship on National Scholarship Portal.</p>
            <Link to="/login" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold cursor-pointer">Login</Link>
          </div>
        </div> */}

        {/* Apply for Scholarship Section */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col h-96 w-80 items-center space-y-6">
          <img src="https://scholarships.gov.in/public/assets2425/images/icons/Login.svg" alt="Apply For Scholarship" className="h-28 w-28 object-contain rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Apply For Scholarship</h2>
            <p className="text-gray-700">Login with your OTR ID and PASSWORD to fill your Fresh and Renewal Scholarship application form for AY 2024-25.</p>
            <p to="/login" className="mt-4 inline-block font-semibold cursor-pointer text-blue-600 hover:text-blue-800">Apply Now</p>
          </div>
        </div>

        {/* Previous Year Application Status Section */}
        <div className="bg-purple-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center flex-col h-96 w-80 space-y-6">
          <img src="https://scholarships.gov.in/public/assets2425/images/icons/Login.svg" alt="Previous Year Application Status" className="h-28 w-28 object-contain rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Previous Year Application Status</h2>
            <p className="text-gray-700">Login to check status of previous year's application.</p>
            <p to="/login" className="mt-4 inline-block font-semibold cursor-pointer text-blue-600 hover:text-blue-800">See Now</p>
          </div>
        </div>

        {/* Track Your Payment Section */}
        <div className="bg-red-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col h-96 w-80 items-center space-y-6">
          <img src="https://scholarships.gov.in/public/assets2425/images/icons/TrackYourPayment.svg" alt="Track Your Payment" className="h-28 w-28 object-contain rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Track Your Payment</h2>
            <p className="text-gray-700">Track your scholarship disbursement status on PFMS portal.</p>
            <p  className="mt-4 inline-block text-blue-600  hover:text-blue-800 font-semibold cursor-pointer">Track Your Payment</p>
          </div>
        </div>

        {/* Aadhaar Seva Kendra Section */}
        <div className="bg-teal-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col h-96 w-80 items-center space-y-6">
          <img src={require('../assets/edit.png')} alt="Aadhaar Seva Kendra" className="h-28 w-28 object-contain  brightness-90 contrast-75 rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Edit Your Profile</h2>
            <p className="text-gray-700">Make the edit request of your details if you have done any.</p>
            <Link to="/aadhaar-seva-kendra" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold cursor-pointer">Edit Now</Link>
          </div>
        </div>

        {/* Aadhaar Seeding Section */}
        <div className="bg-orange-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col h-96 w-80 items-center space-y-6">
          <img src="https://scholarships.gov.in/public/assets2425/images/icons/AadhaarSeeding.svg" alt="Aadhaar Seeding" className="h-28 w-28 object-conatin rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Aadhaar Seeding</h2>
            <p className="text-gray-700">Check your bank account seeding status with Aadhaar.</p>
            <Link to="/aadhaar-seeding" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold cursor-pointer">Check Bank Account (Aadhar Linked)</Link>
          </div>
        </div>

        {/* UDID Details Section */}
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col h-96 w-80 items-center space-y-6">
          <img src="https://scholarships.gov.in/public/assets2425/images/icons/Login.svg" alt="UDID Details" className="h-28 w-28 object-contain rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Documents Details</h2>
            <p className="text-gray-700">Check out the documents you have uploaded still date.</p>
            <Link to="/udid-details" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold cursor-pointer">See now</Link>
          </div>
        </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Comps;