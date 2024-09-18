import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function ScholarshipRecords() {
    // Sample data for student scholarships
    const navigate=useNavigate()
    const studentScholarships = [
        { date: '2024-01-05', paymentAmount: '₹20,000', accountNumber: 'XXXX-XXXX-XXXX-1234' },
        { date: '2024-02-10', paymentAmount: '₹15,000', accountNumber: 'XXXX-XXXX-XXXX-5678' },
        { date: '2024-03-15', paymentAmount: '₹18,500', accountNumber: 'XXXX-XXXX-XXXX-9101' },
    ];

    // Sample data for institute fees
    const instituteFees = [
        { instituteName: 'ABC Engineering College', paymentAmount: '₹50,000', accountNumber: 'XXXX-XXXX-XXXX-1111' },
        { instituteName: 'XYZ Medical College', paymentAmount: '₹60,000', accountNumber: 'XXXX-XXXX-XXXX-2222' },
        { instituteName: 'LMN Arts College', paymentAmount: '₹40,000', accountNumber: 'XXXX-XXXX-XXXX-3333' },
    ];

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
        <div className="min-h-screen bg-gray-100 p-10 px-20">
            <h1 className="text-4xl font-bold mb-8 text-center">Scholarship Records</h1>

            {/* Student Scholarship Table */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Student Scholarship</h2>
                <table className="min-w-full bg-white border border-gray-300 shadow-sm shadow-black">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Index
                            </th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Payment Amount
                            </th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Account Number
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentScholarships.map((scholarship, index) => (
                            <tr key={index} className="bg-white">
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-900">{index + 1}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-900">{scholarship.date}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-900">{scholarship.paymentAmount}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-900">{scholarship.accountNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Institute Fees Table */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Institute Fees</h2>
                <table className="min-w-full bg-white border border-gray-300 shadow-sm shadow-black">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Index
                            </th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Institute Name
                            </th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Payment Amount
                            </th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                Account Number
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {instituteFees.map((fee, index) => (
                            <tr key={index} className="bg-white">
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-900">{index + 1}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-900">{fee.instituteName}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-900">{fee.paymentAmount}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-900">{fee.accountNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
                        </>
    );
}
