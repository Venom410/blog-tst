import React from 'react';
import Marquee from 'react-fast-marquee';

const clientImages: string[] = [
  '/assets/client_1.png',
  '/assets/client_2.png',
  '/assets/client_3.png',
  '/assets/client_4.png'
];

const Clients: React.FC = () => {
  return (
    <div className='clients py-5 px-4 ml-10 mr-10'>
      <Marquee pauseOnClick direction='right'>
        {clientImages.map((image, index) => (
          <img key={index} src={image} alt={`Client ${index + 1}`} className='client-image mr-20' />
        ))}
      </Marquee>
    </div>
  );
}

export default Clients;
