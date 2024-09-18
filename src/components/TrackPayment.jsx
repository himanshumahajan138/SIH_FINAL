import React, { useState } from 'react';

export default function TrackPayment({ paymentData,setIsModalOpen }) {
    // const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Sample Payment Data (Test Case)
    // Replace this with actual paymentData or fetch it from the backend
    paymentData = paymentData || {
        applied: true,
        instituteVerified: true,
        sagVerified: true,
        financeBureauVerified: false,
        paymentReceived: false
    };

    // if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-11/12 max-w-3xl rounded-lg p-8 relative shadow-lg">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                >
                    ✖
                </button>

                <h2 className="text-2xl font-bold mb-6 text-center">Track Your Payment</h2>

                {/* No Record Display */}
                {!paymentData.applied && (
                    <div className="text-center text-red-500 text-lg">No Record Found</div>
                )}

                {/* Progress Tracker */}
                {paymentData.applied && (
                    <div className="flex items-center justify-between">
                        {[
                            { label: 'Applied', status: paymentData.applied },
                            { label: 'Institute Verified', status: paymentData.instituteVerified },
                            { label: 'SAG Verified', status: paymentData.sagVerified },
                            { label: 'Finance Bureau Verified', status: paymentData.financeBureauVerified },
                            { label: 'Payment Received', status: paymentData.paymentReceived }
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                {/* Circle for each step */}
                                <div className="flex flex-col items-center">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white ${
                                            step.status ? 'bg-pink-500' : 'bg-gray-300'
                                        }`}
                                    >
                                        {index + 1}
                                    </div>
                                    <span className="text-sm mt-2 text-center font-medium">
                                        {step.label}
                                    </span>
                                </div>

                                {/* Horizontal Line between circles (except the last step) */}
                                {index < 4 && (
                                    <div
                                        className={`flex-1 h-1 ${
                                            step.status ? 'bg-pink-500' : 'bg-gray-300'
                                        }`}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
