import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function InstitutionRegister() {
    const navigate = useNavigate();
    const [activeState, setActiveState] = useState('Guidelines');
    const [steps, setSteps] = useState([]);
    const [guidelinesChecked, setGuidelinesChecked] = useState(false);
    const [registrationData, setRegistrationData] = useState({
        institutionName: '',
        address: '',
        contactEmail: '',
        contactPhone: '',
        accreditation: '',
        affiliation: '',
        state:'',
        city:'',
        bankAccount: '',
        universityAffiliationNumber: '',
        panNumber: '',
        president:'',
        presidentContact:''
    });
    const [documents, setDocuments] = useState({
        idProof: null,
        accreditationCert: null,
        affiliationCert: null,
        bankProof: null
    });
    const [allGuidelinesChecked, setAllGuidelinesChecked] = useState(false);
    const [verificationChecked, setVerificationChecked] = useState(false);

    const isRegistrationComplete = Object.values(registrationData).every(field => field !== '');
    const isDocumentsComplete = Object.values(documents).every(doc => doc !== null);
    const canFinish = allGuidelinesChecked && verificationChecked && isRegistrationComplete && isDocumentsComplete;

    // Handle file upload and persist in state
    const handleFileUpload = (e, key) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setDocuments(prevDocuments => ({
                ...prevDocuments,
                [key]: file
            }));
        } else {
            alert('Wrong format! Please upload a PDF.');
        }
    };

    // Proceed to the next step
    const handleNextStep = () => {
        if (activeState === 'Guidelines' && guidelinesChecked) {
            setSteps(prevSteps => [...prevSteps, 'Guidelines']);
            setActiveState('Registration');
        } else if (activeState === 'Registration' && isRegistrationComplete) {
            setSteps(prevSteps => [...prevSteps, 'Registration']);
            setActiveState('Documents');
        } else if (activeState === 'Documents' && isDocumentsComplete) {
            setSteps(prevSteps => [...prevSteps, 'Documents']);
            setActiveState('Finish');
        }
    };

    // Move to the previous step
    const handleBackStep = () => {
        if (activeState === 'Registration') {
            setActiveState('Guidelines');
        } else if (activeState === 'Documents') {
            setActiveState('Registration');
        } else if (activeState === 'Finish') {
            setActiveState('Documents');
        }
    };

    const handleFinish = () => {
        if (canFinish) {
            alert('Institution Registration Completed Successfully!');
            // You can add the submission logic here
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
                        <h1 className="text-4xl font-extrabold cursor-pointer" onClick={() => navigate('/')}>PMSSS</h1>
                        <h3 className="text-lg font-semibold">Academic Year 2024-2025</h3>
                    </div>
                </div>

                <Navbar />
            </div>

            <div className="flex items-center justify-around px-20 mt-2">
                {['Guidelines', 'Registration', 'Documents', 'Finish'].map((step, index) => (
                    <React.Fragment key={step}>
                        <h1 className={`${steps.includes(step) ? 'text-pink-500 bg-pink-100' : 'bg-slate-100'} ${activeState === step ? 'border-2 border-black' : ''} text-lg p-4 font-semibold rounded-xl shadow-sm cursor-pointer shadow-black`}>
                            {step}
                        </h1>
                        {index < 3 && <hr className={`h-1 w-60 mx-2 ${steps.includes(step) ? 'bg-pink-400' : 'bg-gray-300'}`} />}
                    </React.Fragment>
                ))}
            </div>

            <div className="p-10 px-20">
                {/* Guidelines */}
                {activeState === 'Guidelines' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Please read the following guidelines carefully:</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Ensure all institutional information provided is accurate and up-to-date.</li>
                            <li>Double-check your contact details, including email and phone number, before submission.</li>
                            <li>All uploaded documents must be in PDF format and should not exceed the size limit specified.</li>
                            <li>Make sure to fill out all required fields marked with a star (*).</li>
                            <li>Only authorized and genuine documents should be uploaded; any discrepancies may lead to disqualification.</li>
                            <li>Review the privacy policy and terms of service before submitting your application.</li>
                        </ul>
                        <div className="mt-4">
                            <input
                                type="checkbox"
                                id="guidelines-check"
                                checked={guidelinesChecked}
                                onChange={(e) => setGuidelinesChecked(e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor="guidelines-check" className="font-semibold">
                                I have read and agree to the guidelines
                            </label>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded"
                                onClick={handleBackStep}
                                disabled={activeState === 'Guidelines'}
                            >
                                Back
                            </button>
                            <button
                                className={`px-4 py-2 bg-blue-500 text-white rounded ${!guidelinesChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!guidelinesChecked}
                                onClick={handleNextStep}
                            >
                                Save and Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* Registration */}
                {activeState === 'Registration' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Fill in your details:</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Institution Name", value: registrationData.institutionName, field: "institutionName" },
                                { label: "Address", value: registrationData.address, field: "address" },
                                { label: "Contact Email", value: registrationData.contactEmail, field: "contactEmail" },
                                { label: "Contact Phone", value: registrationData.contactPhone, field: "contactPhone" },
                                { label: "Accreditation", value: registrationData.accreditation, field: "accreditation" },
                                { label: "Affiliation", value: registrationData.affiliation, field: "affiliation" },
                                { label: "State", value: registrationData.state, field: "state" },
                                { label: "City", value: registrationData.city, field: "city" },
                                { label: "Bank Account Details", value: registrationData.bankAccount, field: "bankAccount" },
                                { label: "University Affiliation Number", value: registrationData.universityAffiliationNumber, field: "universityAffiliationNumber" },
                                { label: "PAN Number", value: registrationData.panNumber, field: "panNumber" },
                                { label: "President or Principal", value: registrationData.president, field: "president" },
                                { label: "President Contact", value: registrationData.presidentcontact, field: "presidentContact" },
                            ].map(({ label, value, field }, index) => (
                                <div key={index} className="flex flex-col">
                                    <label className="font-semibold">
                                        {label} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={`Enter ${label}`}
                                        value={value}
                                        onChange={(e) => setRegistrationData({ ...registrationData, [field]: e.target.value })}
                                        className="p-2 border w-full border-gray-300 rounded mt-1"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded"
                                onClick={handleBackStep}
                            >
                                Back
                            </button>
                            <button
                                className={`px-4 py-2 bg-blue-500 text-white rounded ${!isRegistrationComplete ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!isRegistrationComplete}
                                onClick={handleNextStep}
                            >
                                Save and Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* Documents */}
                {activeState === 'Documents' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Upload the necessary documents:</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Institution ID Proof", value: documents.idProof, key: "idProof" },
                                { label: "Accreditation Certificate", value: documents.accreditationCert, key: "accreditationCert" },
                                { label: "Affiliation Certificate", value: documents.affiliationCert, key: "affiliationCert" },
                                { label: "Bank Proof", value: documents.bankProof, key: "bankProof" }
                            ].map(({ label, value, key }, index) => (
                                <div key={index} className="flex flex-col">
                                    <label className="font-semibold">{label}</label>
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={(e) => handleFileUpload(e, key)}
                                        className="mt-1"
                                    />
                                    {value && <p className="text-green-500">Uploaded</p>}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded"
                                onClick={handleBackStep}
                            >
                                Back
                            </button>
                            <button
                                className={`px-4 py-2 bg-blue-500 text-white rounded ${!isDocumentsComplete ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!isDocumentsComplete}
                                onClick={handleNextStep}
                            >
                                Save and Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* Finish */}
                {activeState === 'Finish' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Finish and submit your registration:</h2>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="all-guidelines-check"
                                checked={allGuidelinesChecked}
                                onChange={(e) => setAllGuidelinesChecked(e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor="all-guidelines-check" className="font-semibold">
                                I accept all the guidelines and verify the accuracy of the information provided.
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="verification-check"
                                checked={verificationChecked}
                                onChange={(e) => setVerificationChecked(e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor="verification-check" className="font-semibold">
                                I have reviewed all the details and documents.
                            </label>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded"
                                onClick={handleBackStep}
                            >
                                Back
                            </button>
                            <button
                                className={`px-4 py-2 bg-green-500 text-white rounded ${!canFinish ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!canFinish}
                                onClick={handleFinish}
                            >
                                Finish
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </>
    );
}
