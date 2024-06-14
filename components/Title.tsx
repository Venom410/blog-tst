import React from 'react';

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center my-12 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200">
      <p className="text-lg text-blue-600 uppercase">{subTitle}</p>
      <h2 className="text-3xl font-bold text-gray-900 mt-2">{title}</h2>
    </div>
  );
};

export default Title;
