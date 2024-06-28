import React, { useState } from 'react';
import ContactForm from './ContactForm';
const Contactus = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      alert('Message sent!');
    }, 2000);
  };

  return (
    <div className='contact flex flex-col md:flex-row justify-between w-full py-16 px-4 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200'>
      <div className="contact-col flex-1 md:mr-12 mb-8 md:mb-0">
        <h3 className="text-3xl font-semibold flex items-center text-blue-600">
          Send us a message <img src="/assets/msg_icon.png" alt="" className="w-8 ml-4" />
        </h3>
        <p className="text-gray-600 mt-4">
          Feel free to reach out through the contact form or find our contact information 
          below. Your feedback, questions, and suggestions are important to us as we 
          strive to provide exceptional service to our clients.
        </p>
        <ul className="mt-6">
          <li className="flex items-center mb-4">
            <img src="/assets/mail_icon.jpg" alt="" className="w-6 mr-2" />admin@digicraft.com
          </li>
          <li className="flex items-center mb-4">
            <img src="/assets/phone_icon.jpg" alt="" className="w-6 mr-2" />+91 1234567890
          </li>
          <li className="flex items-center mb-4">
            <img src="/assets/location_icon.jpg" alt="" className="w-6 mr-2" />Address to the office goes here
          </li>
        </ul>
      </div>
      <div className="contact-col flex-1">
       
      <div className="bg-white p-8 rounded-lg mb-8 shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <ContactForm />
          
        </div>
    
     </div>
    </div>
  );
};

export default Contactus;
