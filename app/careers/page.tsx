import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Career = () => {
  return (
    <div className="careers-container">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Do you think you have everything to be a part of the team?</h1>
          <p className="text-lg md:text-xl mb-6">
            Do you think working on the latest technologies is always your aspiration? Do you feel that your work speaks louder than your actions?
            Do you really think that you can work in a fast-paced environment with sharp, intelligent, and like-minded people like you? Well, if you think you can, you have just jumped into
            the right place. Quarks promises to provide you with all the opportunities where you
            can work on challenging projects, use cutting-edge technologies, and provide you continuous
            learning environment that is just right to enhance your career.
          </p>
          <Link href="/apply">
            <p className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105">
              See Opportunities
            </p>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <div className="benefits-section py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Work With Us?</h2>
        <div className="benefits-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: '/assets/flexi_w.jpeg', title: 'Flexible Working Hours', description: 'We are not a 9 to 5 organization. Our flexible working hour policy ensures every employee in Quarks feels a sense of work-life balance.' },
            { img: '/assets/room_t.jpeg', title: 'Room to Grow', description: 'Work on challenging IT projects and unleash your potential. Our team leads are your mentors, helping you to work, learn, develop, and grow.' },
            { img: '/assets/health_i.jpeg', title: 'Health Insurance', description: 'Each Digicraft employee has medical insurance applicable in private hospitals across the country.' },
            { img: '/assets/comp_s.jpeg', title: 'Competitive Salary', description: 'Our employees receive a high and inflation-independent salary on the last day of every working month.' },
            { img: '/assets/vaccation.jpeg', title: '30 Days of Vacation', description: 'We offer a generous leave policy with 12 Casual Leaves and 18 Privilege Leaves per calendar year.' },
            { img: '/assets/rewards_r.jpeg', title: 'Rewards & Recognitions', description: 'Our R&R program is a token of appreciation for your efforts, ensuring you stay motivated.' },
            { img: '/assets/office_c.jpeg', title: 'Offices in City Centres', description: 'Our office is centrally located in prime business district, easily reachable by various modes of transport.' },
            { img: '/assets/buddy_p.jpeg', title: 'Buddy Program', description: 'Our Buddy Program helps new employees get accustomed to the organization structure and processes.' }
          ].map((benefit, index) => (
            <div key={index} className="benefit-item p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 text-center">
              <Image src={benefit.img} alt={benefit.title} width={64} height={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Culture Section */}
      <div className="culture-section py-12 mt-20 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 text-center">Life at Digicraft</h2>
        <div className="culture-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: '/assets/play_w.jpeg', description: 'A team that plays together stays together. We emphasize spending quality time with each other.' },
            { img: '/assets/diverse.jpeg', description: 'We encourage an open and diverse environment since our inception.' },
            { img: '/assets/work_b.jpeg', description: 'A healthy work-life balance is key to our success. We ensure our employees have it.' }
          ].map((culture, index) => (
            <div key={index} className="culture-item p-6 bg-white rounded-md shadow-md text-center transition transform hover:scale-105">
              <Image src={culture.img} alt="Culture" width={64} height={64} className="mx-auto mb-4" />
              <p className="text-gray-600">{culture.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section text-center mb-12 px-4">
        <Link href="/apply">
          <p className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105">
            See Opportunities
          </p>
        </Link>
      </div>

      {/* Locations Section */}
      <div className="locations-section py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Office Location</h2>
        <div className="locations-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="location-item p-6 bg-white rounded-md shadow-md text-center transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Gurugram</h3>
            <p className="text-gray-600">Complete address to the office goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
