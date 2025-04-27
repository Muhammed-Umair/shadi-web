import React from 'react'

function Packages() {
  const Packages = [
    {
      id: 1,
      name: 'Cultural Explorer',
      price: '$299',
      description: 'Perfect for solo travelers who want to experience an authentic Indian wedding.',
      features: [
        'Attendance at the main wedding ceremony',
        'Traditional Indian attire rental',
        'Cultural orientation session',
        'Wedding gift for the couple',
        'Photo opportunities',
        'English-speaking guide'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Celebration Package',
      price: '$499',
      description: 'Our most popular option for couples or friends who want the complete experience.',
      features: [
        'Attendance at multiple ceremonies (Mehndi, Sangeet, Main Ceremony)',
        'Premium traditional Indian attire rental',
        'Henna application session',
        'Cultural orientation session',
        'Wedding gift for the couple',
        'Professional photos with the wedding party',
        'English-speaking guide',
        'Traditional Indian welcome gift'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Royal Experience',
      price: '$999',
      description: 'The ultimate luxury package for those who want to experience an Indian wedding like royalty.',
      features: [
        'VIP access to all wedding ceremonies',
        'Custom-designed premium Indian attire',
        'Private henna application session',
        'Personalized cultural orientation',
        'Luxury wedding gift for the couple',
        'Professional photoshoot with the wedding party',
        'Private English-speaking guide',
        'Luxury Indian welcome gift basket',
        'Transportation to all wedding events',
        'Traditional Indian jewelry rental',
        'Post-wedding dinner with the family'
      ],
      popular: false
    }
  ];

  const addons = [
    {
      id: 1,
      name: 'Traditional Jewelry Rental',
      price: '$50',
      description: 'Enhance your look with authentic Indian jewelry pieces.'
    },
    {
      id: 2,
      name: 'Professional Photography',
      price: '$100',
      description: 'Get professional photos of your experience at the wedding.'
    },
    {
      id: 3,
      name: 'Extended Cultural Tour',
      price: '$150',
      description: 'Add a guided tour of local attractions before or after the wedding.'
    },
    {
      id: 4,
      name: 'Private Transportation',
      price: '$80',
      description: 'Enjoy private transfers to and from the wedding venue.'
    }
  ];
  
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-pink-600 text-white py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Wedding Experience Packages</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">Choose the perfect package to experience the magic of an authentic Indian wedding celebration.</p>
        </div>
      </div>
      
      {/* Packages Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Select Your Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Packages.map(pkg => (
            <div 
              key={pkg.id} 
              className={`rounded-lg shadow-lg border ${pkg.popular ? 'border-pink-500' : 'border-gray-200'} overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl relative`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-pink-500 text-white py-1 px-3 sm:px-4 rounded-bl-lg text-xs sm:text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">{pkg.name}</h3>
                <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-3 sm:mb-4">{pkg.price}</div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{pkg.description}</p>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-2 sm:py-3 rounded font-bold transition text-sm sm:text-base ${pkg.popular ? 'bg-pink-600 hover:bg-pink-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add-ons Section */}
        <div className="mt-12 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-6 text-gray-800">Enhance Your Experience</h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">Customize your wedding experience with these additional services</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {addons.map(addon => (
              <div key={addon.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">{addon.name}</h3>
                <p className="text-pink-600 font-bold mb-2 sm:mb-3 text-base sm:text-lg">{addon.price}</p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{addon.description}</p>
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-1.5 sm:py-2 rounded transition text-sm sm:text-base">
                  Add to Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-100 py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">What does the package include?</h3>
              <p className="text-gray-600 text-sm sm:text-base">Each package includes attendance at specified wedding ceremonies, traditional attire rental, cultural orientation, and a dedicated guide to help you navigate the experience. Additional inclusions vary by package level.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">How do I select a wedding to attend?</h3>
              <p className="text-gray-600 text-sm sm:text-base">You can browse our upcoming weddings page to see available dates and locations. Once you find a wedding that interests you, you can select it during the booking process.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Is transportation included?</h3>
              <p className="text-gray-600 text-sm sm:text-base">Transportation to and from the wedding venue is included in the Royal Experience package. For other packages, you can add transportation as an add-on service.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">What should I know about attending an Indian wedding?</h3>
              <p className="text-gray-600 text-sm sm:text-base">Indian weddings are vibrant celebrations that may involve multiple days of ceremonies. All our packages include a cultural orientation session to prepare you for the experience. We also provide guidelines on appropriate behavior and dress code.</p>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Can I customize my package?</h3>
              <p className="text-gray-600 text-sm sm:text-base">Yes! After selecting your base package, you can add various enhancements to customize your experience. For special requests, please contact our customer service team.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-pink-600 text-white py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Experience the Magic?</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book your Indian wedding experience today and create memories that will last a lifetime.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-bold text-sm sm:text-lg transition">
            Browse Upcoming Weddings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Packages
