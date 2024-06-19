"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Domain {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const DomainsData: Domain[] = [
  {
    id: 1,
    title: "Digital Payments",
    description: "Our digital payments domain is focused on building and managing cutting-edge payment platforms. We specialize in integrating secure payment gateways, optimizing transaction processes, and ensuring seamless user experiences. Whether you need solutions for e-commerce, mobile payments, or peer-to-peer transactions, we deliver reliable and scalable payment solutions.",
    imageUrl: "/assets/domain_1.jpg"
  },
  {
    id: 2,
    title: "Equity Markets",
    description: "Our equity markets domain covers a wide range of financial services tailored for capital markets. We offer comprehensive solutions for algorithmic trading platforms, risk management systems, and real-time market analytics. Our expertise helps clients navigate the complexities of equity trading, ensuring high performance, reliability, and compliance with regulatory standards.",
    imageUrl: "/assets/domain_2.jpg"
  },
  {
    id: 3,
    title: "Ad Tech",
    description: "In our ad tech domain, we focus on delivering advertising technology solutions to maximize digital advertising performance. Our expertise includes ad fraud detection, audience targeting algorithms, and performance optimization tools. We help businesses optimize their ad spend, increase ROI, and reach the right audience with precision targeting.",
    imageUrl: "/assets/domain_3.jpg"
  },
  {
    id: 4,
    title: "Insurance",
    description: "Our insurance domain provides innovative solutions to address the challenges faced by insurance companies. We offer end-to-end solutions including insurance product development, claims management systems, and actuarial analysis tools. Our goal is to help insurers streamline processes, improve customer service, and drive profitability.",
    imageUrl: "/assets/domain_4.jpg"
  },
  {
    id: 5,
    title: "Lending",
    description: "In our lending domain, we specialize in leveraging data to make informed lending decisions. We offer solutions for credit risk modeling, loan origination systems, and customer behavior analysis. Our expertise helps lenders optimize lending processes, reduce risk, and enhance customer experience.",
    imageUrl: "/assets/domain_5.jpg"
  },
  {
    id: 6,
    title: "HealthCare",
    description: "Our healthcare domain offers technology solutions to improve patient care, streamline operations, and enhance efficiency. We provide solutions such as electronic health record systems, telemedicine platforms, and medical billing software. Our aim is to empower healthcare providers with technology to deliver better patient outcomes.",
    imageUrl: "/assets/domain_6.jpg"
  },
  {
    id: 7,
    title: "Agritech",
    description: "In our agritech domain, we leverage technology to address challenges in agriculture and food production. Our solutions cover precision agriculture, crop management systems, and supply chain optimization tools. We help farmers optimize resources, increase productivity, and ensure sustainability in agriculture.",
    imageUrl: "/assets/domain_7.jpg"
  },
  {
    id: 8,
    title: "Travel",
    description: "Our travel domain offers technology solutions to enhance travel experiences and streamline operations. We provide solutions including online booking platforms, travel itinerary management systems, and customer loyalty programs. Our aim is to make travel planning and booking seamless for travelers and efficient for businesses.",
    imageUrl: "/assets/domain_8.jpg"
  },
  {
    id: 9,
    title: "E-Commerce",
    description: "Our e-commerce domain delivers end-to-end solutions to create robust and scalable online stores. We offer services such as e-commerce website development, inventory management systems, and payment gateway integration. Our goal is to help businesses establish a strong online presence and drive sales in the competitive e-commerce landscape.",
    imageUrl: "/assets/domain_9.jpg"
  },
];

const Domain: React.FC = () => {
  const [domains] = useState<Domain[]>(DomainsData);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore our Expertise</h1>
          <p className="text-lg text-white">Discover the wide range of domains we specialize in and how we can help your business grow.</p>
        </div>
      </section>

      {/* Domains Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl font-semibold mb-8 text-center">Our Domains</h2>
        <div className="space-y-12">
          {domains.map((domain, index) => (
            <div
              key={domain.id}
              data-aos="fade-up"
              className={`domain-item flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} p-6 rounded-lg`}
            >
              <div className="w-full md:w-1/2">
                <img src={domain.imageUrl} alt={domain.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
              <div className="w-full md:w-1/2 md:pr-8 md:pl-8 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold mb-2">{domain.title}</h3>
                <p className="text-gray-700">{domain.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domain;
