import React from 'react'
import { useState } from 'react';
import { Search, MapPin, Star, Calendar, ArrowRight } from 'lucide-react';

export default function TourismPlaces() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const destinations = [
    {
      id: 1,
      name: "Bali Paradise",
      location: "Bali, Indonesia",
      image: "/api/placeholder/800/500",
      category: "Beach",
      rating: 4.8,
      price: 1200,
      description: "Experience the stunning beaches and vibrant culture of Bali."
    },
    {
      id: 2,
      name: "Swiss Alpine Adventure",
      location: "Interlaken, Switzerland",
      image: "/api/placeholder/800/500", 
      category: "Mountain",
      rating: 4.9,
      price: 1800,
      description: "Explore the majestic Swiss Alps with breathtaking mountain views."
    },
    {
      id: 3,
      name: "Tokyo Explorer",
      location: "Tokyo, Japan",
      image: "/api/placeholder/800/500",
      category: "City",
      rating: 4.7,
      price: 1500,
      description: "Immerse yourself in the vibrant city life and culture of Tokyo."
    },
    {
      id: 4,
      name: "Amazon Rainforest Tour",
      location: "Manaus, Brazil",
      image: "/api/placeholder/800/500",
      category: "Adventure",
      rating: 4.6,
      price: 1350,
      description: "Discover the incredible biodiversity of the Amazon Rainforest."
    },
    {
      id: 5,
      name: "Rome Historical Journey",
      location: "Rome, Italy",
      image: "/api/placeholder/800/500",
      category: "Historical",
      rating: 4.8,
      price: 1400,
      description: "Walk through ancient history in the stunning city of Rome."
    },
    {
      id: 6,
      name: "Santorini Sunset",
      location: "Santorini, Greece",
      image: "/api/placeholder/800/500",
      category: "Beach",
      rating: 4.9,
      price: 1650,
      description: "Experience the world-famous sunsets of Santorini's white beaches."
    }
  ];

  const filteredDestinations = activeFilter === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter);

  const categories = ['All', 'Beach', 'Mountain', 'City', 'Adventure', 'Historical'];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">Wanderlust Travel</h1>
            <nav className="w-full sm:w-auto">
              <ul className="flex justify-center sm:justify-end space-x-4 sm:space-x-6 text-sm sm:text-base">
                <li className="cursor-pointer hover:text-blue-200">Home</li>
                <li className="cursor-pointer hover:text-blue-200 font-semibold border-b-2 border-white">Destinations</li>
                <li className="cursor-pointer hover:text-blue-200">About</li>
                <li className="cursor-pointer hover:text-blue-200">Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Discover Amazing Places</h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8">Find and book your perfect getaway with our curated selection of top destinations</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search destinations, activities, or experiences..."
              className="w-full py-2 sm:py-3 px-10 sm:px-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <Search className="absolute left-3 sm:left-4 top-2.5 sm:top-3.5 text-gray-400" size={16} />
            <button className="absolute right-1.5 sm:right-2 top-1 sm:top-1.5 bg-blue-500 text-white text-xs sm:text-sm py-1 sm:py-1.5 px-3 sm:px-6 rounded-full hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Filter Categories */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Explore Destinations</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button 
                key={category}
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm ${
                  activeFilter === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-blue-600 border border-blue-600'
                } hover:bg-blue-700 hover:text-white transition-colors`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-40 sm:h-44 md:h-48 object-cover"
              />
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-bold">{destination.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {destination.category}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  <MapPin size={14} className="mr-1" />
                  <span>{destination.location}</span>
                </div>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">{destination.description}</p>
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <Star size={14} className="text-yellow-400" />
                    <span className="ml-1 text-gray-700 text-xs sm:text-sm">{destination.rating}</span>
                  </div>
                  <span className="font-bold text-blue-600 text-sm sm:text-base">${destination.price}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-1.5 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors flex justify-center items-center text-xs sm:text-sm">
                  <span>View Details</span>
                  <ArrowRight size={14} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-50 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Get Travel Inspiration</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive exclusive offers, travel tips, and destination guides
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-3 sm:px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Wanderlust Travel</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Making travel accessible, affordable, and enjoyable for everyone since 2010.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Destinations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Travel Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">Support</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">Connect With Us</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs sm:text-sm">F</div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs sm:text-sm">I</div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs sm:text-sm">T</div>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center text-gray-400 text-xs sm:text-sm">
            <p>© 2025 Wanderlust Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
