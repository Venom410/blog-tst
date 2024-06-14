import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg">
          <label className="block mb-2 text-blue-600 font-medium">Your Name</label>
          <input 
            type="text" 
            name='name' 
            placeholder='Enter your name :' 
            required 
            className="input-field border border-gray-300 rounded-md p-2 w-full mb-4 focus:border-blue-500 focus:ring-blue-500"
          />
          <label className="block mb-2 text-blue-600 font-medium">Your Phone</label>
          <input 
            type="tel" 
            name='phone' 
            placeholder='Enter your mobile :' 
            required 
            className="input-field border border-gray-300 rounded-md p-2 w-full mb-4 focus:border-blue-500 focus:ring-blue-500"
          />
          <label className="block mb-2 text-blue-600 font-medium">Write your message here</label>
          <textarea 
            name="message" 
            rows='6' 
            placeholder='Enter your message' 
            required 
            className="input-field border border-gray-300 rounded-md p-2 w-full mb-4 focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
          <button 
            type='submit' 
            className='btn dark-btn bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-md hover:from-purple-500 hover:to-blue-500 transition duration-300'
          >
            Submit now
          </button>
        </form>
        {sending && <span className="text-blue-500 mt-2 block">Sending...</span>}
      </div>
    </div>
  );
};

export default Contactus;
