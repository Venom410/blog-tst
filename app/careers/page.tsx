import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Career = () => {
  return (
    <div className="careers-container py-12 px-4">
      <div className='hero relative flex items-center justify-center h-screen bg-cover bg-center bg-hero-pattern mb-20' 
           style={{ backgroundImage: "url('/assets/hero.jpg')" }}>
        <div className="hero-text text-center text-white bg-gray-900 bg-opacity-50 p-8 rounded-md">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Do you think you have everything to be a part of the team?</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Do you think working on the latest technologies is always your aspiration? Do you feel that your work speaks louder than your actions? Do you really think that you can work in a fast-paced environment with sharp, intelligent, and like-minded people like you? Well, if you think you can, you have just jumped into the right place. Quarks promises to provide you with all the opportunities where you can work on challenging projects, use cutting-edge technologies, and provide you continuous learning environment that is just right to enhance your career.
          </p>
          <Link href="/apply">
            <p className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105">
              See Opportunities
            </p>
          </Link>
        </div>
      </div>

      <div className="benefits-section py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Work With Us?</h2>
        <div className="benefits-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="benefit-item p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 text-center">
            <Image src="/assets/flexi_w.jpeg" alt="Flexible Working Hours" width={64} height={64} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Flexible Working Hours</h3>
            <p className="text-gray-600">We are not a 9 to 5 organization. Our flexible working hour policy ensures every employee in Quarks feels a sense of work-life balance.</p>
          </div>
          <div className="benefit-item p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 text-center">
            <Image src="/assets/room_t.jpeg" alt="Room to Grow" width={64} height={64} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Room to Grow</h3>
            <p className="text-gray-600">Work on challenging IT projects and unleash your potential. Our team leads are your mentors, helping you to work, learn, develop, and grow.</p>
          </div>
          <div className="benefit-item p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 text-center">
            <Image src="/assets/health_i.jpeg" alt="Health Insurance" width={64} height={64} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Health Insurance</h3>
            <p className="text-gray-600">Each Digicraft employee has medical insurance applicable in private hospitals across the country.</p>
          </div>
          <div className="benefit-item p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 text-center">
            <Image src="/assets/comp_s.jpeg" alt="Competitive Salary" width={64} height={64} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Competitive Salary</h3>
            <p className="text-gray-600">Our employees receive a high and inflation-independent salary on the last day of every working month.</p>
          </div>
          <div className="benefit-item p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 text-center">
            <Image src="/assets/vaccation.jpeg" alt="30 Days of Vacation" width={64} height={64} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">30 Days of Vacation</h3>
            <p className="text-gray-600">We offer a generous leave policy with 12 Casual Leaves and 18 Privilege Leaves per calendar year.</p>
          </div>
          <div className="benefit-item p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 text-center">
            <Image src="/assets/rewards_r.jpeg" alt="Rewards & Recognitions" width={64} height={64} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Rewards & Recognitions</h3>
            <p className="text-gray-600">Our R&R program is a token of appreciation for your efforts, ensuring you stay motivated.</p>
          </div>
          <div className="benefit-item p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 text-center">
            <Image src="/assets/office_c.jpeg" alt="Offices in City Centres" width={64} height={64} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Offices in City Centres</h3>
            <p className="text-gray-600">Our office is centrally located in prime business district, easily reachable by various modes of transport.</p>
          </div>
          <div className="benefit-item p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 text-center">
            <Image src="/assets/buddy_p.jpeg" alt="Buddy Program" width={64} height={64} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Buddy Program</h3>
            <p className="text-gray-600">Our Buddy Program helps new employees get accustomed to the organization structure and processes.</p>
          </div>
        </div>
      </div>

      <div className="culture-section py-12 mt-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 text-center">Life at Digicraft</h2>
        <div className="culture-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="culture-item p-6 bg-white rounded-md shadow-md text-center transition transform hover:scale-105">
            <Image src="/assets/play_w.jpeg" alt="Team Activities" width={64} height={64} className="mx-auto mb-4" />
            <p className="text-gray-600">A team that plays together stays together. We emphasize spending quality time with each other.</p>
          </div>
          <div className="culture-item p-6 bg-white rounded-md shadow-md text-center transition transform hover:scale-105">
            <Image src="/assets/diverse.jpeg" alt="Diversity and Inclusion" width={64} height={64} className="mx-auto mb-4" />
            <p className="text-gray-600">We encourage an open and diverse environment since our inception.</p>
          </div>
          <div className="culture-item p-6 bg-white rounded-md shadow-md text-center transition transform hover:scale-105">
            <Image src="/assets/work_b.jpeg" alt="Work-Life Balance" width={64} height={64} className="mx-auto mb-4" />
            <p className="text-gray-600">A healthy work-life balance is key to our success. We ensure our employees have it.</p>
          </div>
        </div>
      </div>

      <div className="cta-section text-center mb-12">
        <Link href="/apply">
          <p className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105">
            See Opportunities
          </p>
        </Link>
      </div>

      <div className="locations-section py-12">
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
