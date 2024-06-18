import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

interface Founder {
  img: string;
  name: string;
  title: string;
  description: string;
  linkedin: string;
}

const FoundersPage: React.FC = () => {
  const founders: Founder[] = [
    {
      img: '/assets/founder1.jpeg',
      name: "Tushir Aggarwal",
      title: "Co-Founder",
      description: "A seasoned technology leader with experience in leading engineering teams and platforms for different business domains including financial services, payments, insurance, healthcare, adTech, equities & telecom.",
      linkedin: "https://www.linkedin.com/in/tushiraggarwal/"
    },
    {
      img: '/assets/founder2.jpeg',
      name: "Prashant Raj Goel",
      title: "Co-Founder",
      description: "Seasoned leader with over 20 years experience leading delivery success stories for various business domains including banking, financial services, payments, insurance, education, data protection, healthcare, risk & compliance.",
      linkedin: "https://www.linkedin.com/in/prashant-goel-32605a9/"
    },
    {
      img: '/assets/founder3.jpeg',
      name: "Ankit Bansal",
      title: "Co-Founder",
      description: "With over 15 years of experience as an engineering maverick, I have a proven track record of driving transformative change across diverse industries. In influential roles at Paytm, Tata 1mg, and MoooFarm, I led cross-functional teams to develop cutting-edge solutions that disrupted their markets, showcasing my ability to spearhead groundbreaking initiatives.",
      linkedin: "https://www.linkedin.com/in/ankit-bansal-5a957293/"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Our Company</h1>
          <p className="text-xl md:text-2xl mb-8">Connecting Ideas. Empowering Innovation.</p>
          <Link href="#founders">
            <p className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
              Meet Our Founders
            </p>
          </Link>
        </div>
        <div className="absolute bottom-4 w-full text-center text-white animate-bounce">
          <Link href="#founders">
            <p className="text-2xl cursor-pointer">&darr;</p>
          </Link>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Meet Our Founders</h2>

          <div className="mb-12">
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ipsum quis lorem dignissim consectetur. Nullam vehicula mi sit amet eros maximus lacinia.
            </p>
          </div>

          {/* Founder Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <img src={founder.img} alt={founder.name} className="w-32 h-32 rounded-full mb-4 shadow-md" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">{founder.name}</h3>
                <p className="text-blue-500 mb-2">{founder.title}</p>
                <p className="text-gray-600 text-center mb-4">{founder.description}</p>
                <Link href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                  <FaLinkedin className="mr-1" />
                  LinkedIn
                </Link>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">What Others Say About Our Founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <p className="text-gray-700 italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ipsum quis lorem dignissim consectetur."</p>
                <p className="text-gray-600 mt-2">- Client Name, Company Name</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <p className="text-gray-700 italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ipsum quis lorem dignissim consectetur."</p>
                <p className="text-gray-600 mt-2">- Client Name, Company Name</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <p className="text-gray-700 italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ipsum quis lorem dignissim consectetur."</p>
                <p className="text-gray-600 mt-2">- Client Name, Company Name</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Company Founded - Year</li>
              <li>Major Milestone 1 - Year</li>
              <li>Major Milestone 2 - Year</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundersPage;
