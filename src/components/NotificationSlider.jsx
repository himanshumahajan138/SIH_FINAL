import React, { useState, useRef, useEffect } from 'react';

const notifications = [
  'Notification 1: Students who applied for the scholarship...',
  'Notification 2: New guidelines for OTR registration...',
  'Notification 3: Application deadlines approaching...',
  'Notification 4: Scholarship disbursement process started...',
  'Notification 5: New updates for the academic year 2024-2025...',
];

export default function NotificationSlider() {
  const containerRef = useRef(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const scrollContainer = containerRef.current;

      const handleScroll = () => {
        setIsUserScrolling(true);
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

        // Calculate total scrollable height
        const maxScrollTop = scrollHeight - clientHeight;

        if (scrollTop >= maxScrollTop) {
          // User scrolled to the bottom, reset to top
          scrollContainer.scrollTop = 0;
        } else if (scrollTop === 0) {
          // User scrolled to the top, reset to bottom
          scrollContainer.scrollTop = maxScrollTop - clientHeight;
        }
      };

      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (!isUserScrolling && containerRef.current) {
      const interval = setInterval(() => {
        containerRef.current.scrollTop += 1;
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isUserScrolling]);

  return (
    <div
      ref={containerRef}
      className="h-96 overflow-auto bg-white shadow-lg rounded-md"
      style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #e0e0e0' }}
      onMouseEnter={() => setIsUserScrolling(true)}
      onMouseLeave={() => setIsUserScrolling(false)}
    >
      <div className="flex flex-col">
        {[...notifications, ...notifications].map((notification, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-32 p-2 hover:bg-slate-50 cursor-pointer bg-white border-b border-gray-200"
            onClick={() => alert(notification)} // Example click action
          >
            <span className="text-blue-700 hover:text-blue-900 font-medium">{notification}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
