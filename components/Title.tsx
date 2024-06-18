import React from 'react';

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center my-12 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 py-10">
      <p className="text-xl md:text-2xl text-blue-700 font-semibold">{subTitle}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">{title}</h2>
    </div>
  );
};

export default Title;
