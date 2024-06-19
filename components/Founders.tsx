import React, { useState } from 'react';
import Image from 'next/image';

interface Founder {
  img: string;
  name: string;
  title: string;
  description: string;
  linkedin: string;
}

const founders: Founder[] = [
  {
    img: '/assets/founder1.jpeg',
    name: 'Tushir Aggarwal',
    title: 'Co-Founder',
    description:
      'A seasoned technology leader with experience in leading engineering teams and platforms for different business domains including financial services, payments, insurance, healthcare, adTech, equities & telecom.',
    linkedin: "https://www.linkedin.com/in/tushiraggarwal/"
  },
  {
    img: '/assets/founder2.jpeg',
    name: 'Prashant Raj Goel',
    title: 'Co-Founder',
    description:
      'Seasoned leader with over 20 years experience leading delivery success stories for various business domains including banking, financial services, payments, insurance, education, data protection, healthcare, risk & compliance.',
    linkedin: "https://www.linkedin.com/in/prashant-goel-32605a9/"
  },
  {
    img: '/assets/founder3.jpeg',
    name: 'Ankit Bansal',
    title: 'Co-Founder',
    description:
      'With over 15 years of experience as an engineering maverick, I have a proven track record of driving transformative change across diverse industries. In influential roles at Paytm, Tata 1mg, and MoooFarm, I led cross-functional teams to develop cutting-edge solutions that disrupted their markets, showcasing my ability to spearhead groundbreaking initiatives.',
    linkedin: "https://www.linkedin.com/in/ankit-bansal-5a957293/"
  },
];

const Founders: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + founders.length) % founders.length);
  };

  return (
    <div className="flex items-center justify-center mt-8 relative max-w-screen-md mx-auto">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-colors z-10"
      >
        <Image src="/assets/prev_btn.jpg" alt="Previous" width={24} height={24} />
      </button>
      <div className="slider overflow-hidden relative w-full">
        <ul
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {founders.map((founder, index) => (
            <li key={index} className="flex-shrink-0 w-full h-full px-2">
              <div className="profile-card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-center hover:shadow-xl transition duration-300">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-600 flex-shrink-0 relative">
                  <Image src={founder.img} alt={founder.name} width={112} height={112} className="object-cover" />
                  <div className="absolute inset-0 border-4 border-blue-600 rounded-full opacity-0 hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">{founder.name}</h3>
                  <span className="text-sm text-gray-600">{founder.title}</span>
                </div>
                <p className="text-gray-700 flex-1 my-4 px-4">{founder.description}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 px-4 py-2 text-white rounded-md hover:bg-blue-500 transition-all duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-colors z-10"
      >
        <Image src="/assets/next_btn.jpg" alt="Next" width={24} height={24} />
      </button>
    </div>
  );
};

export default Founders;
