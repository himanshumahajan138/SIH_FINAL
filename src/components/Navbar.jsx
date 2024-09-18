import React, { useState } from 'react';
import { FaBars, FaUserGraduate, FaUniversity, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate=useNavigate();
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className='pr-8'>
      <div className="flex justify-end pt-10 pr-4">
        <FaBars className="text-3xl cursor-pointer" onClick={toggleDrawer} />
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-slate-100 shadow-lg z-50 transform transition-transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } w-80 p-4`}
      >
        <button
          className="mr-0 right-0 text-4xl mb-4 focus:outline-none "
          onClick={toggleDrawer}
        >
          &times;
        </button>

        <div className="space-y-6">
          <div>
            <h2 className="flex items-center text-lg font-bold">
              <FaUserGraduate className="mr-2 text-2xl text-pink-600" /> Student
            </h2>
            <ul className="ml-6 mt-2 space-y-2">
              <li className='text-md font-semibold cursor-pointer hover:font-bold' onClick={()=>navigate('/otr')}>Apply For One Time Registration (OTR)</li>
              {/* if logedd in then student registration */}
              <li className='text-md font-semibold cursor-pointer hover:font-bold' onClick={()=>navigate('/studentregister')}>Student Registration</li>

              <li className='text-md font-semibold cursor-pointer hover:font-bold' onClick={()=>{navigate('/otr')}}>Student Login</li>
              <li className='text-md font-semibold cursor-pointer hover:font-bold' onClick={()=>{navigate('/studentportal')}}>Student Portal</li>
              
            </ul>
          </div>

        

          <div>
            <h2 className="flex items-center text-lg font-bold">
              <FaUsers className="mr-2 text-2xl text-pink-600" /> Officers
            </h2>
            <ul className="ml-6 mt-2 space-y-2">
              <li className='text-md font-semibold cursor-pointer hover:font-bold' onClick={()=>navigate('/institutelogin')}>Institute Login</li>
              <li className='text-md font-semibold cursor-pointer hover:font-bold' onClick={()=>{navigate('/instituteregister')}}>Institute Register</li>
              {/* <li className='text-md font-semibold cursor-pointer hover:font-bold'>Nodal Officers</li> */}
              <li className='text-md font-semibold cursor-pointer hover:font-bold' onClick={()=>{navigate('/saglogin')}}>SAG login</li>
            </ul>
          </div>
          <div className='px-3 py-2 bg-slate-200' >
            <ul className='space-y-1 '>

            <li className='text-md font-semibold cursor-pointer hover:font-bold'> About Scholarship</li>
            <li className='text-md font-semibold cursor-pointer hover:font-bold'>Helpdesk</li>
            <li className='text-md font-semibold cursor-pointer hover:font-bold'>Contact us</li>
            <li className='text-md font-semibold cursor-pointer hover:font-bold'>Chatbot</li>
            </ul>
           
          </div>
        </div>
      </div>
    </div>
  );
}
