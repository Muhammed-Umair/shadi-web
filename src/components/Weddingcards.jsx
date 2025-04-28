import React from 'react'
import { Link } from 'react-router-dom';

function Weddingcards({image, title, date, location, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
      <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/400x250?text=Wedding+Image';
          }}
        />
      </div>
      <div className="p-4 sm:p-5 md:p-6 flex-grow">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2 text-sm sm:text-base">
          <i className="far fa-calendar-alt mr-2"></i>
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          <i className="fas fa-map-marker-alt mr-2"></i>
          <span>{location}</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">{description}</p>
        <div className="mt-auto">
          <Link 
            to={link} 
            className="block text-center bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded transition text-sm sm:text-base"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Weddingcards
