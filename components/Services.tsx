import React from 'react';
import Image from 'next/image';

interface Service {
  img: string;
  icon: string;
  text: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    { img: '/assets/service_1.jpg', icon: '/assets/s_icon_1.png', text: 'Digital Engineering' },
    { img: '/assets/service_2.jpg', icon: '/assets/s_icon_2.png', text: 'Cloud & DevOps' },
    { img: '/assets/service_3.jpg', icon: '/assets/s_icon_3.png', text: 'Quality Assurance' },
    { img: '/assets/service_4.jpg', icon: '/assets/s_icon_4.png', text: 'Consulting & Strategy' },
    { img: '/assets/service_5.jpg', icon: '/assets/s_icon_5.png', text: 'Data Engineering' },
    { img: '/assets/service_6.jpg', icon: '/assets/s_icon_6.png', text: 'Regulatory & Compliance' },
  ];

  return (
    <div className='bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-8 bg-white p-8 rounded-lg mb-8 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200'>
      {services.map((service, index) => (
        <div key={index} className='relative group'>
          <Image src={service.img} alt="" width={400} height={300} className='w-full h-60 object-cover rounded-md transition-opacity duration-300 group-hover:opacity-80' />
          <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <Image src={service.icon} alt="" width={64} height={64} />
            <p className='text-white'>{service.text}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;
