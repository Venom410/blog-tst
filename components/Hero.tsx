import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className='hero relative flex items-center justify-center h-screen bg-cover bg-center bg-hero-pattern'>
      <div className="hero-text text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-blue-950">Empowering Businesses Through Transformative Technology Solutions</h1>
        <p className="text-lg md:text-xl max-w-lg mx-auto mb-8">Leveraging Cutting-Edge, Innovative Technologies To Enable Organizational Growth, Efficiency, And Competitive Advantage</p>
        <div className='flex justify-center'>
          <Link href="/about">
            <p className='btn flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Explore more
              <Image src="/assets/dark_arrow.png" alt="Arrow" width={16} height={16} className="ml-2" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
