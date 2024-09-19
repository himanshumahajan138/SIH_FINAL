import React, { useRef, useState, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';

const LivePhoto = () => {
  const [photo, setPhoto] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };

    startVideo();

    return () => {
      // Stop video stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get the data URL of the captured photo
      const photoURL = canvas.toDataURL('image/png');
      setPhoto(photoURL);
    }
  };

  return (
    <div className="relative flex justify-center items-center flex-col">
      {/* Circular container for video */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 mb-6">
        <video
          ref={videoRef}
          autoPlay
          className="w-full h-full object-cover"
        />
        {photo && (
          <img
            src={photo}
            alt="Captured"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
      {/* Camera icon */}
      <div
        onClick={capturePhoto}
        className="absolute flex justify-center items-center bg-pink-400 p-2 rounded-full cursor-pointer text-white shadow-lg border-4 border-white"
        style={{
          bottom: '10%', 
          right: '44%', 
          
          fontSize: '2rem',
        }}
      >
        <FaCamera size={32} />
      </div>
      <canvas
        ref={canvasRef}
        style={{ display: 'none' }} 
      />
    </div>
  );
};

export default LivePhoto;
