import React from 'react';

const CourseCard = ({ title, description, image }) => {
  return (
    <div className="w-full max-w-[300px] border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:-translate-y-1">
      <img src={image} alt={`${title} cover`} className="w-full h-[150px] object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-base text-gray-600 mb-4">{description}</p>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors duration-200">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default CourseCard;