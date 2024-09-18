import React, { useEffect, useState } from 'react';
import { FaMale, FaFemale, FaUsers } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { FaGraduationCap } from 'react-icons/fa';
import NotificationSlider from '../components/NotificationSlider';
import { TbSpeakerphone } from "react-icons/tb";
import FloatingMenu from '../components/FloatingMenu';
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
export default function Home() {
  const [countBoys, setCountBoys] = useState(0);
  const [countGirls, setCountGirls] = useState(0);
  const [countTotal, setCountTotal] = useState(0);
  const navigate=useNavigate();

  useEffect(() => {
    const incrementBoys = setInterval(() => {
      setCountBoys((prev) => (prev < 2500 ? prev + 4 : 2500));
    }, 1);

    const incrementGirls = setInterval(() => {
      setCountGirls((prev) => (prev < 3000 ? prev + 4 : 3000));
    }, 1);

    const incrementTotal = setInterval(() => {
      setCountTotal((prev) => (prev < 5500 ? prev + 4 : 5500));
    }, 1);

    return () => {
      clearInterval(incrementBoys);
      clearInterval(incrementGirls);
      clearInterval(incrementTotal);
    };
  }, []);

  const arr=[
    require('../assets/1.png'),require('../assets/2.png'),require('../assets/3.png'),require('../assets/4.png'),
  require('../assets/5.png'),require('../assets/6.png'),require('../assets/7.png'),require('../assets/8.png')
  ,require('../assets/9.png')
]

  return (
    <>
    <FloatingMenu/>
      <div className="bg-slate-100 px-4 flex justify-between">
        <div className="flex text-xs font-semibold space-x-4 pt-3">
          <h1>GOVERNMENT OF INDIA</h1>
          <h1>MINISTRY OF DEFENCE</h1>
        </div>
        <div className="flex space-x-5">
          <img
            src={require('../assets/g20.jpeg')}
            alt=""
            className="h-12 w-12 rounded-full contrast-200 brightness-75"
          />
          <img
            src={require('../assets/swachbharat.png')}
            alt=""
            className="h-12 w-12 rounded-full contrast-200 brightness-75"
          />
        </div>
      </div>

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

      {/* Counting Section */}
      <div className="flex justify-around mt-10">
        <div className="text-center rounded-full shadow-md shadow-black  h-60 w-60 pt-8">
          <FaMale className=" h-20 w-20 mx-auto text-pink-500" />
          <p className="text-pink-500 text-3xl font-bold">{countBoys}+</p>
          <p className="text-pink-500 text-lg font-semibold">Boys</p>
        </div>
        <div className="text-center rounded-full shadow-md shadow-black  h-60 w-60 pt-8">
          <FaFemale className="h-20 w-20 mx-auto text-pink-500" />
          <p className="text-pink-500 text-3xl font-bold">{countGirls}+</p>
          <p className="text-pink-500 text-lg font-semibold">Girls</p>
        </div>
        <div className="text-center rounded-full shadow-md shadow-black  h-60 w-60 pt-8 ">
          <FaUsers className="h-20 w-20 mx-auto text-pink-500" />
          <p className="text-pink-500 text-3xl font-bold ">{countTotal}+</p>
          <p className="text-pink-500 text-lg font-semibold">Total</p>
        </div>
      </div>
      <h1 className='mx-auto text-center py-5 text-sm text-slate-700'>Beneficiaries every year</h1>

      <div className='py-4 space-y-4 px-20 mt-2'>
        <h1 className='text-3xl font-extrabold'>PM Special Scholarship Scheme (PMSSS)</h1>
        <p className='text-md font-semibold'>The ‘Prime Minister’s Special Scholarship Scheme (PMSSS)’ ’ is being implemented to encourage technical and post-graduate education for the widows and wards of the deceased/ex-service personnel of Armed Forces. The scheme is funded out of National Defence Fund administered by Prime Minister’s Office. Scholarships are available for education at various technical institutions (medical, dental, veterinary, engineering, MBA, MCA and other equivalent technical institutions having AICTE/UGC approval).</p>

<p className='text-md font-semibold'>The Scheme was introduced in 2006. Five thousand five hundred (5500) scholarships are being awarded annually under this scheme. The amount of scholarships was Rs.2,000/- for boys and Rs.2,250/- for the girls per month and is paid annually. This has now been increased to Rs.2,500/- per month for boys and Rs.3,000/- per month for girls w.e.f. FY 2019-20. The payment is made through ECS into the bank account of the selected students. The scheme migrated from offline to online mode with effect from Academic Year 2016-17.</p>

      </div>


      <div className='flex justify-evenly mt-5 text-white font-extrabold text-2xl '>
        <div  className='h-20 w-60 bg-pink-600 rounded text-center pt-6 hover:bg-pink-700 cursor-pointer shadow-sm
        shadow-black hover:animate-bounce' onClick={()=>navigate('/otr')}>
            Student
        </div>
        <div className='h-20 w-60 bg-purple-600 rounded text-center pt-6 hover:bg-purple-700 cursor-pointer
        shadow-sm shadow-black hover:animate-bounce' onClick={()=>{navigate('/institutelogin')}}>
            Officers
        </div>
      </div>

      <div className="flex justify-around px-4 py-6 mt-8">
      {/* Left Section with Notification Slider */}
      <div className="w-96">
      <TbSpeakerphone className='text-6xl mx-auto font-extrabold rate-45 text-pink-600'/>
      <h1 className='text-center text-3xl mx-auto py-3 text-pink-600 font-extrabold'>Announcements</h1>
        <NotificationSlider />
      </div>

      {/* Right Section with Other Content */}
      <div className=" flex justify-around items-center w-96 ">
        <div className="text-center text-md font-semibold">
          <FaGraduationCap className="text-6xl text-pink-500 mx-auto " />
          <p className="text-3xl font-bold text-pink-500">Get your OTR</p>
          <p className="text-gray-700 py-6">One Time Registration (OTR) is a unique 14-digit number issued based on the Aadhaar/Aadhaar Enrolment ID (EID) and is applicable for the entire academic career of the student.</p>

<p className='py-4'>
    OTR simplifies the scholarship application process, thereby eliminating the need of registration in each academic year.
    </p>

<p>OTR is required to apply for scholarship on National Scholarship Portal.</p>
        <button className='text-sm hover:bg-pink-600 font-semibold p-3 mt-4 bg-pink-400 rounded-xl text-center' onClick={()=>{navigate('/otr')}}>Register Now</button>
        </div>
        {/* Add more sections here if needed */}

      </div>
    </div>

    <div className='py-4 justify-between flex px-10 bg-slate-50'>
      {
        arr.map((element,i)=>(
          <img src={element} alt=""  className='h-28 w-28 cursor-pointer rounded-full' key={i}/>
        ))
      }

    </div>

    <Footer/>

    </>
  );
}
