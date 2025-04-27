import React from 'react'

function Services() {
  const services = [
    {
      id: 1,
      title: 'Wedding Guest Experience',
      icon: 'fas fa-user-friends',
      description: 'Attend authentic Indian weddings as a special guest. We handle everything from invitations to attire rental.',
      link: '/packages'
    },
    {
      id: 2,
      title: 'Cultural Orientation',
      icon: 'fas fa-book-open',
      description: 'Learn about Indian wedding customs, rituals, and etiquette before attending. Our experts will prepare you for the experience.',
      link: '/cultural-orientation'
    },
    {
      id: 3,
      title: 'Traditional Attire Rental',
      icon: 'fas fa-tshirt',
      description: 'Rent authentic Indian wedding attire including sarees, lehengas, kurta pajamas, and accessories.',
      link: '/attire-rental'
    },
    {
      id: 4,
      title: 'Photography Services',
      icon: 'fas fa-camera',
      description: 'Capture your experience with our professional photography services. Available as an add-on to any package.',
      link: '/photography'
    },
    {
      id: 5,
      title: 'Translation Services',
      icon: 'fas fa-language',
      description: 'Our multilingual guides will help you communicate and understand the ceremonies and conversations.',
      link: '/translation'
    },
    {
      id: 6,
      title: 'Transportation',
      icon: 'fas fa-car',
      description: 'Convenient transportation to and from wedding venues. Available as a standalone service or package add-on.',
      link: '/transportation'
    },
    {
      id: 7,
      title: 'Extended Cultural Tours',
      icon: 'fas fa-map-marked-alt',
      description: 'Combine your wedding experience with guided tours of local attractions and cultural sites.',
      link: '/cultural-tours'
    },
    {
      id: 8,
      title: 'Virtual Wedding Experience',
      icon: 'fas fa-video',
      description: 'Can\'t travel? Join selected Indian weddings virtually through our live streaming service.',
      link: '/virtual-experience'
    }
  ];

  return (
     <div>
      {/* Hero Banner */}
      <div className="bg-pink-600 text-white py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">Discover the range of services we offer to make your Indian wedding experience authentic, comfortable, and memorable.</p>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transition transform hover:-translate-y-1 hover:shadow-xl">
              <div className="text-pink-600 text-3xl sm:text-4xl mb-3 sm:mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{service.description}</p>
              <a href={service.link} className="text-pink-600 hover:text-pink-800 font-semibold transition text-sm sm:text-base">
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Featured Service */}
      <div className="bg-gray-100 py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">Wedding Guest Experience</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Our signature service allows you to immerse yourself in authentic Indian wedding celebrations as a special guest. We take care of all the details so you can focus on enjoying the experience.</p>
              
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">What's Included:</h3>
              <ul className="space-y-2 sm:space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Official invitation to the wedding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Traditional Indian attire rental</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Pre-wedding orientation session</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">English-speaking guide during the ceremonies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Wedding gift for the couple</span>
                </li>
              </ul>
              
              <a href="/packages" className="bg-pink-600 hover:bg-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded inline-block transition text-sm sm:text-base">
                View Packages
              </a>
            </div>
            
            <div className="w-full lg:w-1/2">
              <img src="/images/guest-experience.jpg" alt="Wedding Guest Experience" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonial */}
      <div className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-yellow-500 text-3xl sm:text-4xl mb-4 sm:mb-6">
            <i className="fas fa-quote-left"></i>
          </div>
          <p className="text-xl sm:text-2xl italic mb-6 sm:mb-8 max-w-4xl mx-auto text-gray-700">
            "ShaadiGlobal made it so easy to experience an authentic Indian wedding. The traditional outfits they provided made us feel like part of the celebration, and our guide helped us understand all the beautiful ceremonies. It was truly the highlight of our trip to India!"
          </p>
          <div className="flex items-center justify-center">
            <img src="/images/testimonial-avatar.jpg" alt="Emma and Tom" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4" />
            <div className="text-left">
              <div className="font-bold text-base sm:text-lg text-gray-800">Emma and Tom Williams</div>
              <div className="text-gray-600 text-sm sm:text-base">London, UK</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact CTA */}
      <div className="bg-pink-600 text-white py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Need a Custom Service?</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact our team to discuss custom arrangements or special requests for your Indian wedding experience.
          </p>
          <a href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-bold text-sm sm:text-lg inline-block transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services
