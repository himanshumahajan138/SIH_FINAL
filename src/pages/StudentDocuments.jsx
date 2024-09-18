import React from 'react';
import { FaEye, FaCheckCircle } from 'react-icons/fa'; // Importing icons
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function StudentDocument({ documents }) {
    const navigate=useNavigate();
    // Handle the view action
     documents =documents?documents: [
        { name: 'Adhar Card', file: null }, // Not uploaded
        { name: 'Domicile', file: new File([""], "domicile.pdf") }, // Uploaded file
        { name: '12th Marksheet', file: new File([""], "12th_marksheet.pdf") }, // Uploaded file
        { name: '10th Marksheet', file: null }, // Not uploaded
        { name: 'Low Income Certificate', file: new File([""], "income_certificate.pdf") }, // Uploaded file
        { name: 'Bank Account', file: null } // Not uploaded
    ];
    const handleViewDocument = (file) => {
        if (file) {
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL, '_blank');
        }
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
        <div className=" py-16 px-24 ">
            <h2 className="text-2xl font-bold mb-6">Uploaded Documents</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-lg shadow-black">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                            Document Name
                        </th>
                        <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                            View
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((doc, index) => (
                        <tr key={index} className="bg-white">
                            <td className="px-6 py-4 border-b border-gray-300 text-sm font-medium text-gray-900">
                                {doc.name}
                            </td>
                            <td className="px-6 py-4 border-b border-gray-300 text-sm font-medium">
                                {doc.file ? (
                                    <FaCheckCircle className="text-green-500 text-lg" />
                                ) : (
                                    <span className="text-red-500">Not Uploaded</span>
                                )}
                            </td>
                            <td className="px-6 py-4 border-b border-gray-300 text-sm font-medium">
                                {doc.file ? (
                                    <FaEye
                                    className="text-blue-500 text-lg cursor-pointer"
                                        onClick={() => handleViewDocument(doc.file)}
                                    />
                                ) : (
                                    <span className="text-gray-400">N/A</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Footer/>
                    </>
    );
}
