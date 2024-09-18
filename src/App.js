
import './App.css';
import Home from './pages/Home';
import Comps from './components/StudentPortal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Otr from './pages/Otr'
import Studentregister from './pages/Studentregister';
import InstitutionRegister from './pages/Instituteregister';
import InstituteLogin from './pages/InstituteLogin';
import Applyscholarship from './pages/Applyscholarship';
import Saglogin from './pages/Saglogin';
import StudentDashboard from './pages/StudentDashboard';
import StudentDocument from './pages/StudentDocuments';
import ScholarshipRecords from './pages/ScholarshipRecords';
import EditStudentData from './pages/EditProfile';
import ChatWidget from './ChatWidget'; // Make sure ChatWidget.js is in the same directory


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Accessed by the logged in student only */}
          <Route path='/studentportal' element={<Comps />} />
          {/** */}
          <Route path='/otr' element={<Otr />} />
          <Route path='/studentregister' element={<Studentregister />} />
          <Route path='/studentdashboard' element={<StudentDashboard />} />
          <Route path='/studentdocuments' element={<StudentDocument />} />
          <Route path='/studentscholarshiprecords' element={<ScholarshipRecords />} />
          <Route path='/edit' element={<EditStudentData />} />
          <Route path='/instituteregister' element={<InstitutionRegister />} />
          <Route path='/institutelogin' element={<InstituteLogin />} />
          <Route path='/saglogin' element={<Saglogin />} />
          <Route path='/apply' element={<Applyscholarship />} />
        </Routes>
      </BrowserRouter>
      <ChatWidget />
    </>
  );
}

export default App;
