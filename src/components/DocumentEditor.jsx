import React, { useState } from 'react';
import '../App.css'; // For custom styles

const DocumentEditor = () => {
  const [formData, setFormData] = useState({
    name: '',
    candidateId: '',
    classYear: '',
    course: '',
    rollNumber: '',
    sessionStart: '',
    sessionEnd: '',
    hostelName: '',
    hostelAddress: '',
    wardenSignature: '',
    studentSignature: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="/path/to/your/cleaned_image.jpg"
        alt="Document"
        className="w-full"
      />

      {/* Input Fields */}
      <div className="absolute top-10 left-24">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-transparent border-none"
          placeholder="Name"
        />
      </div>
      
      <div className="absolute top-20 left-24">
        <input
          type="text"
          name="candidateId"
          value={formData.candidateId}
          onChange={handleChange}
          className="bg-transparent border-none"
          placeholder="Candidate ID"
        />
      </div>

      {/* More input fields for other handwritten areas */}
      {/* Use Tailwind's positioning for accurate placement */}
    </div>
  );
};

export default DocumentEditor;
