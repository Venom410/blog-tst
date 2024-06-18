"use client";
import React, { useState, useEffect, useRef } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Digital Engineering",
    description: "Our digital engineering services are designed to help you build and manage cutting-edge digital platforms. We offer end-to-end solutions, from conceptualization to deployment, leveraging the latest technologies and best practices. Our team of experts specializes in software development, UI/UX design, and system architecture to ensure your digital products are scalable, secure, and innovative.",
    imageUrl: "/assets/service_1.jpg"
  },
  {
    id: 2,
    title: "Cloud and DevOps",
    description: "We offer comprehensive cloud and DevOps services to streamline your operations and enhance scalability. Our solutions include cloud migration, infrastructure setup, continuous integration/delivery, and automation. By adopting industry-leading cloud platforms and DevOps practices, we optimize your processes, improve reliability, and accelerate time-to-market.",
    imageUrl: "/assets/service_2.jpg"
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Our quality assurance services ensure that your products meet the highest standards of quality and reliability. We conduct rigorous testing processes, including functional testing, performance testing, and security testing, to identify and eliminate defects early in the development lifecycle. With our QA expertise, you can deliver flawless software that delights your users.",
    imageUrl: "/assets/service_3.jpg"
  },
  {
    id: 4,
    title: "Consulting and Strategy",
    description: "We provide expert consulting and strategic planning services to help you achieve your business goals. Our consultants collaborate closely with you to understand your challenges, devise tailored strategies, and implement solutions that drive growth and efficiency. Whether it's market analysis, digital transformation, or organizational optimization, we have the insights and expertise to guide you.",
    imageUrl: "/assets/service_4.jpg"
  },
  {
    id: 5,
    title: "Data Engineering",
    description: "Our data engineering services help you harness the power of data to drive informed decision-making. From data collection and storage to processing and visualization, we offer end-to-end data solutions. Our experts specialize in building data pipelines, implementing analytics platforms, and developing machine learning models to unlock valuable insights from your data assets.",
    imageUrl: "/assets/service_5.jpg"
  },
  {
    id: 6,
    title: "Regulatory and Compliance",
    description: "We assist you in navigating regulatory requirements and ensuring compliance with industry standards. Our compliance experts stay up-to-date with regulatory changes and help you implement policies and procedures to mitigate risks and maintain compliance. Whether it's GDPR, HIPAA, or industry-specific regulations, we provide comprehensive compliance solutions.",
    imageUrl: "/assets/service_6.jpg"
  }
];

const Service: React.FC = () => {
  const [services] = useState<Service[]>(servicesData);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            ref.classList.add("fade-in");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Solutions</h1>
          <p className="text-lg text-white">Our expertise in various domains empowers your business with the right technology solutions to drive growth and efficiency.</p>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl font-semibold mb-8 text-center">Our Services</h2>
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row items-center md:space-x-8 transition-opacity duration-1000 ease-in-out opacity-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              ref={(el) => serviceRefs.current[index] = el}
            >
              <div className="md:w-1/2">
                <img src={service.imageUrl} alt={service.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Service;
