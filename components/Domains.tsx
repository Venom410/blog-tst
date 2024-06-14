import React from 'react';
import Image from 'next/image';

interface Domain {
  img: string;
  icon: string;
  text: string;
}

const Domains: React.FC = () => {
  const domains: Domain[] = [
    { img: '/assets/domain_1.jpg', icon: '/assets/d_icon_1.png', text: 'Digital Payments' },
    { img: '/assets/domain_2.jpg', icon: '/assets/d_icon_2.png', text: 'Equity Market' },
    { img: '/assets/domain_3.jpg', icon: '/assets/d_icon_3.png', text: 'AdTech' },
    { img: '/assets/domain_4.jpg', icon: '/assets/d_icon_4.png', text: 'Insurance' },
    { img: '/assets/domain_5.jpg', icon: '/assets/d_icon_5.png', text: 'Lending' },
    { img: '/assets/domain_6.jpg', icon: '/assets/d_icon_6.png', text: 'Health Care' },
    { img: '/assets/domain_7.jpg', icon: '/assets/d_icon_7.png', text: 'AgriTech' },
    { img: '/assets/domain_8.jpg', icon: '/assets/d_icon_8.png', text: 'Travel' },
    { img: '/assets/domain_9.jpg', icon: '/assets/d_icon_9.png', text: 'E-Commerce' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain, index) => (
          <div key={index} className="relative group">
            <Image src={domain.img} alt="" width={300} height={200} className="w-full h-60 object-cover rounded-md transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Image src={domain.icon} alt="" width={64} height={64} />
              <p className="text-white">{domain.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domains;
