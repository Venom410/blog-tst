import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Videoplayer from './Videoplayer';

const About: React.FC = () => {
  const [playState, setPlayState] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setPlayState(true);
  };

  const handleVideoClick = () => {
    if (videoRef.current && !document.fullscreenElement) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleExitFullscreen = () => {
    if (document.fullscreenElement === null) {
      setPlayState(false);
    }
  };

  return (
    <div className='about flex flex-col md:flex-row items-center justify-between w-90vw mx-auto my-20 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200'>
      <div className="about-left w-full md:w-1/2 relative" onClick={handleVideoClick}>
        <img
          src="/assets/about_img.jpg"
          alt="About Image"
          className='about-img w-full cursor-pointer'
          onClick={handlePlayClick}
        />
        {!playState && (
          <img
            src="/assets/play_icon.jpg"
            alt="Play Icon"
            className='play-icon w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
            onClick={handlePlayClick}
          />
        )}
      </div>
      <div className="about-right w-full md:w-1/2 px-8 mt-4 md:mt-0">
        <Link href='/about'>
          <h3 className="font-semibold text-xl mb-2">About Company</h3>
        </Link>
        <h2 className="text-3xl mb-4">Pioneering Digital Transformation Through Innovative Solutions</h2>
        <p className="text-gray-600">We Seamlessly Blend Strategy, Design, Technology, And Data Science To Help Businesses Navigate The Digital Landscape. Our Multidisciplinary Experts Co-Create Tailored, Future-Ready Strategies That Unlock Growth Through Intelligent Automation And Data-Driven Insights</p>
      </div>

      {/* Video player component */}
      {playState && (
        <Videoplayer playState={playState} setPlayState={setPlayState} />
      )}
    </div>
  );
}

export default About;
