import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import TrackPayment from './TrackPayment';

const Comps = () => {
  const navigate=useNavigate();
  const[isModalOpen,setIsModalOpen]=useState(false)
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
            <p  className="mt-4 inline-block text-blue-600 cursor-pointer font-semibold hover:text-blue-800" onClick={()=>navigate('/studentdashboard')}>Visit Profile</p>
          </div>
        </div>

        {/* Apply for Scholarship Section */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col h-96 w-80 items-center space-y-6">
          <img src="https://scholarships.gov.in/public/assets2425/images/icons/Login.svg" alt="Apply For Scholarship" className="h-28 w-28 object-contain rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Apply For Scholarship</h2>
            <p className="text-gray-700 text-md">Login with your OTR ID and PASSWORD to fill your Fresh and Renewal Scholarship application form for AY 2024-25.</p>
            <p  className="mt-4 inline-block font-semibold cursor-pointer text-blue-600 hover:text-blue-800" onClick={()=>navigate('/apply')}>Apply Now</p>
          </div>
        </div>


        {/* Track Your Payment Section */}
        <div className="bg-red-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col h-96 w-80 items-center space-y-6">
          <img src="https://scholarships.gov.in/public/assets2425/images/icons/TrackYourPayment.svg" alt="Track Your Payment" className="h-28 w-28 object-contain rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Track Your Payment</h2>
            <p className="text-gray-700">Track your scholarship disbursement status on PFMS portal.</p>
            <p  className="mt-4 inline-block text-blue-600  hover:text-blue-800 font-semibold cursor-pointer" onClick={()=>{setIsModalOpen(true)}}>Track Your Payment</p>
          </div>
        </div>

        {/* tracking the payment */}
        {
          isModalOpen && <TrackPayment setIsModalOpen={setIsModalOpen}/>
        }

        {/* Aadhaar Seva Kendra Section */}
        <div className="bg-teal-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col h-96 w-80 items-center space-y-6">
          <img src={require('../assets/edit.png')} alt="Aadhaar Seva Kendra" className="h-28 w-28 object-contain  brightness-90 contrast-75 rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Edit Your Profile</h2>
            <p className="text-gray-700">Make the edit request of your details if you have done any.</p>
            <p to="/aadhaar-seva-kendra" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold cursor-pointer" onClick={()=>{navigate('/edit')}}> Edit Now</p>
          </div>
        </div>

        {/* Previous shcolarship records Seeding Section */}
        <div className="bg-orange-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col h-96 w-80 items-center space-y-6">
          <img src="https://scholarships.gov.in/public/assets2425/images/icons/TrackYourPayment.svg" alt="Aadhaar Seeding" className="h-28 w-28 object-conatin rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Scholarship Records</h2>
            <p className="text-gray-700">Check out your previous scholarship amounts that are given to you and your institute.</p>
            <p to="/aadhaar-seeding" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
             onClick={()=>{navigate('/studentscholarshiprecords')}}>Check out</p>
          </div>
        </div>

        {/* Documents uploaded at first time Details Section */}
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col h-96 w-80 items-center space-y-6">
          <img src="https://scholarships.gov.in/public/assets2425/images/icons/Login.svg" alt="UDID Details" className="h-28 w-28 object-contain rounded-lg" />
          <div>
            <h2 className="text-xl font-bold mb-4">Documents Details</h2>
            <p className="text-gray-700">Check out the documents you have uploaded still date.</p>
            <p to="/udid-details" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold cursor-pointer" onClick={()=>navigate('/studentdocuments')}>See now</p>
          </div>
        </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Comps;