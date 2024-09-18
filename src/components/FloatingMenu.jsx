import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown, FaQuestionCircle, FaBullhorn, FaLifeRing } from 'react-icons/fa';

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-center">
      {isOpen && (
        <div className="mb-4 flex flex-col items-center space-y-2 p-4 shadow-md shadow-black rounded-lg bg-slate-100">
          <div className="flex items-center justify-center p-2 b text-black rounded-full shadow-lg cursor-pointer hover:bg-blue-700">
            <FaQuestionCircle className="mr-2" />
            <span>FAQs</span>
          </div>
          <div className="flex items-center justify-center p-2 b text-black rounded-full shadow-lg cursor-pointer hover:bg-green-700">
            <FaBullhorn className="mr-2" />
            <span>Announcements</span>
          </div>
          <div className="flex items-center justify-center p-2 b text-black rounded-full shadow-lg cursor-pointer hover:bg-red-700">
            <FaLifeRing className="mr-2" />
            <span>Helpdesk</span>
          </div>
        </div>
      )}
      <div
        onClick={toggleMenu}
        className="flex items-center justify-center p-3 bg-pink-500 text-white rounded-full shadow-lg cursor-pointer hover:bg-pink-700"
      >
        {isOpen ? <FaArrowDown /> : <FaArrowUp />}
      </div>
    </div>
  );
}
