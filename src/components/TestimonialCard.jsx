import React from 'react'

function TestimonialCard({ name, role, image, testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0">
        <img 
          src={image || "https://via.placeholder.com/100"} 
          alt={name} 
          className="w-full h-full object-cover rounded-full border-2 border-pink-200"
        />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <div className="text-pink-600 text-lg sm:text-xl font-semibold mb-1">{name || "Guest Name"}</div>
        <div className="text-gray-500 text-sm mb-3">{role || "Wedding Guest"}</div>
        <p className="text-gray-700 text-sm sm:text-base italic">
          {testimonial || "This wedding experience was truly magical. The traditions, colors, and celebrations were beyond anything I could have imagined!"}
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard
