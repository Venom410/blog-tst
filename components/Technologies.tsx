import React from 'react';
import Marquee from 'react-fast-marquee';

const serviceImages = [
  '/assets/service_1.jpg',
  '/assets/service_2.jpg',
  '/assets/service_3.jpg',
  '/assets/service_4.jpg',
  '/assets/service_5.jpg',
  '/assets/service_6.jpg'
];

const serviceIcons = [
  '/assets/s_icon_1.png',
  '/assets/s_icon_2.png',
  '/assets/s_icon_3.png',
  '/assets/s_icon_4.png',
  '/assets/s_icon_5.png',
  '/assets/s_icon_6.png'
];

const domainImages = [
  '/assets/domain_1.jpg',
  '/assets/domain_2.jpg',
  '/assets/domain_3.jpg',
  '/assets/domain_4.jpg',
  '/assets/domain_5.jpg',
  '/assets/domain_6.jpg',
  '/assets/domain_7.jpg',
  '/assets/domain_8.jpg',
  '/assets/domain_9.jpg'
];

const domainIcons = [
  '/assets/d_icon_1.png',
  '/assets/d_icon_2.png',
  '/assets/d_icon_3.png',
  '/assets/d_icon_4.png',
  '/assets/d_icon_5.png',
  '/assets/d_icon_6.png',
  '/assets/d_icon_7.png',
  '/assets/d_icon_8.png',
  '/assets/d_icon_9.png'
];

const Technologies = () => {
  const serviceImagesInfinite = [...serviceImages, ...serviceImages];
  const serviceIconsInfinite = [...serviceIcons, ...serviceIcons, ...serviceIcons, ...serviceIcons];
  const domainImagesInfinite = [...domainImages, ...domainImages];
  const domainIconsInfinite = [...domainIcons, ...domainIcons, ...domainIcons, ...domainIcons];

  return (
    <div className='Technologies py-8 px-4'>
      <h2 className='text-2xl font-semibold text-center mb-4'>Service Images</h2>
      <Marquee direction='right' gradient={false} pauseOnClick={false} pauseOnHover={false} speed={60}>
        {serviceImagesInfinite.map((image, index) => (
          <div key={index} className='marquee-item'>
            <img src={image} alt={`Service ${index + 1}`} className='w-32 h-auto rounded-md mx-2' />
          </div>
        ))}
      </Marquee>
      
      <h2 className='text-2xl font-semibold text-center my-8'>Service Icons</h2>
      <Marquee direction='left' gradient={false} pauseOnClick={false} pauseOnHover={false} speed={80}>
        {serviceIconsInfinite.map((icon, index) => (
          <div key={index} className='marquee-item'>
            <img src={icon} alt={`Service Icon ${index + 1}`} className='w-12 h-auto rounded-md mx-2' />
          </div>
        ))}
      </Marquee>

      <h2 className='text-2xl font-semibold text-center my-8'>Domain Images</h2>
      <Marquee direction='right' gradient={false} pauseOnClick={false} pauseOnHover={false} speed={60}>
        {domainImagesInfinite.map((image, index) => (
          <div key={index} className='marquee-item'>
            <img src={image} alt={`Domain ${index + 1}`} className='w-32 h-auto rounded-md mx-2' />
          </div>
        ))}
      </Marquee>

      <h2 className='text-2xl font-semibold text-center my-8'>Domain Icons</h2>
      <Marquee direction='left' gradient={false} pauseOnClick={false} pauseOnHover={false} speed={80}>
        {domainIconsInfinite.map((icon, index) => (
          <div key={index} className='marquee-item'>
            <img src={icon} alt={`Domain Icon ${index + 1}`} className='w-12 h-auto rounded-md mx-2' />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Technologies;
