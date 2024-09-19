import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import LivePhoto from './LivePhoto'

function App() {
  const [activeStep, setActiveStep] = useState('login'); // Start with login screen
  const [loginOption, setLoginOption] = useState('aadhaar'); // Track selected login option
  const [stepCompleted, setStepCompleted] = useState({
    guidelines: false,
    mobile: false,
    ekyc: false,
    finish: false
  });

  // Registration States
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');
  const [emailOtp, setEmailOtp] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [aadhaarOtp, setAadhaarOtp] = useState('');
  const [isAadhaarAssigned, setIsAadhaarAssigned] = useState(true);

  // Login States
  const [loginAadhaar, setLoginAadhaar] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginOtrId, setLoginOtrId] = useState('');
  const [loginOtrPassword, setLoginOtrPassword] = useState('');

  // Function to check if the form is completely filled
  const isFormComplete = () => {
    switch (activeStep) {
      case 'mobile':
        return mobileNumber && mobileOtp && email && emailOtp;
      case 'ekyc':
        return aadhaar && aadhaarOtp;
      default:
        return false;
    }
  };

  const handleStepChange = (step) => {
    switch (step) {
      case 'mobile':
        if (!stepCompleted.guidelines) return;
        break;
      case 'ekyc':
        if (!stepCompleted.mobile) return;
        break;
      case 'finish':
        if (!stepCompleted.ekyc) return;
        break;
      default:
        break;
    }
    setActiveStep(step);
  };

  const handleGetOtp = (type) => {
    alert(`OTP has been sent to your ${type}`);
  };

  const handleLogin = () => {
    if (loginOption === 'aadhaar') {
      
      alert('Logging in with Aadhaar and Password');
    } else if (loginOption === 'otr') {
      
      alert('Logging in with OTR ID and Password');
    }
  };

  useEffect(() => {
    if (activeStep === 'mobile') {
      setStepCompleted(prevState => ({
        ...prevState,
        mobile: isFormComplete()
      }));
    } else if (activeStep === 'ekyc') {
      setStepCompleted(prevState => ({
        ...prevState,
        ekyc: isFormComplete()
      }));
    }
  }, [mobileNumber, mobileOtp, email, emailOtp, aadhaar, aadhaarOtp, activeStep]);
  

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
            <h1 className="text-4xl font-extrabold cursor-pointer" onClick={()=>navigate('/')}>PMSSS</h1>
            <h3 className="text-lg font-semibold">Academic Year 2024-2025</h3>
          </div>
        </div>

        {/* Navbar component */}
        <Navbar />
      </div>
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Top Row: Login and Register */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => {
            setActiveStep('login');
            setLoginOption(null); 
          }}
          className={`px-4 py-2 font-medium ${activeStep === 'login' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-700'} focus:outline-none`}
        >
          Login
        </button>
        <button
          onClick={() => {
            setActiveStep('guidelines');
            setLoginOption(null); 
          }}
          className={`px-4 py-2 font-medium ${activeStep === 'guidelines'||activeStep === 'mobile'||activeStep === 'ekyc'||activeStep === 'finish' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-700'} focus:outline-none`}
        >
          Register
        </button>
      </div>

      {activeStep === 'login' && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setLoginOption('aadhaar')}
              className={`px-4 py-2 font-bold ${loginOption === 'aadhaar' ? 'text-white border-b-2 bg-pink-500' : 'text-gray-700'} focus:outline-none`}
            >
              Login with Aadhaar
            </button>
            <button
              onClick={() => setLoginOption('otr')}
              className={`px-4 py-2 font-bold ${loginOption === 'otr' ? 'text-white border-b-2 bg-pink-500' : 'text-gray-700'} focus:outline-none`}
            >
              Login with OTR ID
            </button>
          </div>

          {loginOption === 'aadhaar' && (
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-xl shadow-pink-200">
              <h2 className="text-2xl font-bold mb-4">Login with Aadhaar</h2>
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar No.*</label>
                <input
                  type="text"
                  placeholder="Enter Aadhaar Number"
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                  value={loginAadhaar}
                  onChange={(e) => setLoginAadhaar(e.target.value)}
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <button
                onClick={handleLogin}
                className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </div>
          )}

          {loginOption === 'otr' && (
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-xl shadow-pink-200">
              <h2 className="text-2xl font-bold mb-4">Login with OTR ID</h2>
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">OTR ID*</label>
                <input
                  type="text"
                  placeholder="Enter OTR ID"
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                  value={loginOtrId}
                  onChange={(e) => setLoginOtrId(e.target.value)}
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                  value={loginOtrPassword}
                  onChange={(e) => setLoginOtrPassword(e.target.value)}
                />
              </div>
              <button
                onClick={handleLogin}
                className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </div>
          )}
        </div>
      )}

  
      {activeStep !== 'login' && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => handleStepChange('guidelines')}
              className={`px-4 py-2 font-medium ${stepCompleted.guidelines ? 'text-pink-500' : 'text-gray-700'} ${!stepCompleted.guidelines && activeStep !== 'guidelines' ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={!stepCompleted.guidelines && activeStep !== 'guidelines'}
            >
              Guidelines
            </button>
            <button
              onClick={() => handleStepChange('mobile')}
              className={`px-4 py-2 font-medium ${stepCompleted.mobile ? 'text-pink-500' : 'text-gray-700'} ${!stepCompleted.guidelines ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={!stepCompleted.guidelines}
            >
              Register Mobile No.
            </button>
            <button
              onClick={() => handleStepChange('ekyc')}
              className={`px-4 py-2 font-medium ${stepCompleted.ekyc ? 'text-pink-500' : 'text-gray-700'} ${!stepCompleted.mobile ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={!stepCompleted.mobile}
            >
              eKYC
            </button>
            <button
              onClick={() => handleStepChange('finish')}
              className={`px-4 py-2 font-medium ${stepCompleted.finish ? 'text-pink-500' : 'text-gray-700'} ${!stepCompleted.ekyc ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={!stepCompleted.ekyc}
            >
              Finish
            </button>
          </div>

          {activeStep === 'guidelines' && (
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-xl shadow-pink-200">
              <h2 className="text-2xl font-semibold mb-4">Guidelines</h2>
              <p className="text-sm mb-4">
                One Time Registration (OTR) Guidelines for Scholarships Hosted on PMSS<br />
                Mandatory Requirement: One Time Registration (OTR) is mandatory for applying for various scholarship schemes on National Scholarship Portal/other portals.<br />
                Essential Requirement for OTR: Active mobile number is mandatory for OTR.<br />
                No payment of fee is required for OTR.<br />
                Steps for Registration:<br />
                1. Once allotted an OTR, student can apply for scholarship later when the portal is open for application submission.<br />
                2. Upon successful registration, a reference number will be sent on the registered mobile number.<br />
                3. Download and install NSP OTR app and Aadhaar Face RD services on android based devices.<br />
                4. Perform the Face-Authentication using the generated reference number for OTR sent on your mobile no.<br />
                5. After successful Face-Authentication OTR will be generated.<br />
                6. Please apply for Scholarship using OTR. Merely generation of OTR does not tantamount to application for scholarship.<br />
                Aadhaar Requirement: Aadhaar is required for OTR. If Aadhaar is not assigned, registration can be done using Enrollment ID (EID) for Aadhaar. If a minor student has not been assigned Aadhaar yet, registration can be done using Aadhaar of her parent or legal guardian.<br />
                It is advised to update other relevant demographic records (name, dob, gender) to match with Aadhaar/EID.<br />
                Parent/legal guardian of minor applying with their Aadhaar must ensure that while making an application for Aadhaar enrolment of minor shall use the same demographic details (of minor) as used in the OTR.<br />
                One OTR ID is allowed per student. However, parent/legal guardian can generate up to a maximum of two OTRs (for two minor children)<br />
                In case more than one OTR is found for a student, she would be liable for debarment from scholarships.
              </p>
              <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={(e) => {
                    setStepCompleted({ ...stepCompleted, guidelines: e.target.checked });
                  }}
                />
                <span className="ml-2">I have read and understood the guidelines for One Time Registration.</span>
              </label>
              <button
                onClick={() => handleStepChange('mobile')}
                className={`px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${!stepCompleted.guidelines ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={!stepCompleted.guidelines}
              >
                Continue
              </button>
            </div>
          )}

          {activeStep === 'mobile' && (
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-xl shadow-pink-200">
              <h2 className="text-2xl font-semibold mb-4">Register Mobile No.</h2>
              <p className="mb-4">Please enter your mobile number and complete the verification process.</p>
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number*</label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="px-4 py-2 border border-gray-300 rounded w-full"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                  <button
                    onClick={() => handleGetOtp('mobile')}
                    className="ml-2 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none"
                  >
                    Get OTP
                  </button>
                </div>
              </div>
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP*</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                  value={mobileOtp}
                  onChange={(e) => setMobileOtp(e.target.value)}
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP (Email)*</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                  value={emailOtp}
                  onChange={(e) => setEmailOtp(e.target.value)}
                />
                <button
                  onClick={() => handleGetOtp('email')}
                  className="mt-2 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none"
                >
                  Get OTP
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Note:<br />
               Student/Parent/Legal guardian must read the instructions carefully before registration.<br />
             Student/Parent/Legal guardian is advised to submit the requisite details carefully before submission of the OTR registration form. Correction/editing will not be allowed after submission.<br />
             Any wrong/false information may lead to rejection.<br />
             Student/Parent/Legal guardian is advised to submit their active mobile number and e-mail address in the OTR registration form. All correspondence/communication will be done on the submitted mobile/e-mail only.<br />
             Student is advised to refer to PMSS for regular updates.
            </p>
              <button
                onClick={() => {
                  if (isFormComplete()) {
                    setStepCompleted(prevState => ({ ...prevState, mobile: true }));
                    handleStepChange('ekyc');
                  }
                }}
                className={`px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 ${!isFormComplete() ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={!isFormComplete()}
              >
                Continue
              </button>
            </div>
          )}

          {activeStep === 'ekyc' && (
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-xl shadow-pink-200">
              <LivePhoto/>
              <h2 className="text-2xl font-semibold mb-4">eKYC</h2>
              <p className="mb-4">Complete your eKYC process.</p>
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar No.*</label>
                <input
                  type="text"
                  placeholder="Enter Aadhaar Number"
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                  value={aadhaar}
                  onChange={(e) => setAadhaar(e.target.value)}
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP*</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                  value={aadhaarOtp}
                  onChange={(e) => setAadhaarOtp(e.target.value)}
                />
                <button
                  onClick={() => handleGetOtp('aadhaar')}
                  className="mt-2 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none"
                >
                  Get OTP
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Note:<br />
                Parent/Legal Guardian/Student must read the instructions carefully before registration.<br />
                Parent/Legal Guardian/Student is advised to fill the requisite details carefully before submission of the application form, as correction/editing will not be allowed after submission.<br />
                Any wrong/false information may lead to rejection.<br />
                Parent/Legal Guardian/Student is advised to refer to National Scholarship Portal for regular updates.
              </p>
              <button
                onClick={() => {
                  if (isFormComplete()) {
                    setStepCompleted(prevState => ({ ...prevState, ekyc: true }));
                    handleStepChange('finish');
                  }
                }}
                className={`px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 ${!isFormComplete() ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={!isFormComplete()}
              >
                Continue
              </button>
            </div>
          )}
{activeStep === 'finish' && (
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-xl shadow-pink-200">
    <h2 className="text-2xl font-semibold mb-4">Registration Completed!</h2>
    <p className="mb-4">You have successfully completed all the steps.</p>
    <button
      onClick={() => {
        // Navigate to dashboard or perform any action needed
        alert('Navigating to dashboard...');
        navigate('/studentregister')
        // Example of navigation logic (replace with actual implementation)
        // window.location.href = '/dashboard';
      }}
      className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
    >
      Create Profile
    </button>
  </div>
)}


        </div>
      )}
    </div>

    <Footer/>
    </>
  );
}

export default App;
