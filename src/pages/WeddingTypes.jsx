import React from 'react'
import img4 from '../assets/Bengali+Wedding.jpg'
import img5 from '../assets/gujrati-wedding.webp'
import img6 from '../assets/kashmiri.jpeg'
import img7 from '../assets/kerelian.jpg'
import img8 from '../assets/maharashtrian wed.jpeg'
/* import img9 from '../assets/punjabi-engagement-ceremony-3.jpg' */
import img10 from '../assets/rajasthani-wedding.jpg'
import img11 from '../assets/south indian wedding.jpeg'
import img12 from '../assets/northwedding2.jpg'

function WeddingTypes() {
  const WeddingTypes = [
    {
      id: 1,
      title: 'North Indian Wedding',
      image: img12,
      description: 'North Indian weddings, particularly Punjabi ones, are known for their energetic atmosphere with bhangra dancing, elaborate meals, and colorful ceremonies including Mehndi, Sangeet, and Baraat processions.',
      ceremonies: ['Roka', 'Engagement', 'Mehndi', 'Sangeet', 'Haldi', 'Baraat', 'Pheras', 'Vidaai']
    },
    {
      id: 2,
      title: 'South Indian Wedding',
      image: img11,
      description: 'South Indian weddings (Tamil, Telugu, Malayalam, and Kannada) focus on traditional rituals and religious ceremonies. They are typically more formal and traditional with beautiful silk sarees and distinctive gold jewelry.',
      ceremonies: ['Nischayathartham', 'Kashi Yatra', 'Oonjal', 'Kanyadaan', 'Mangalya Dharanam', 'Saptapadi']
    },
    {
      id: 3,
      title: 'Bengali Wedding',
      image: img4,
      description: 'Bengali weddings feature distinctive rituals, with the bride wearing the traditional red and white saree. These weddings emphasize cultural aspects and typically include elaborate feasts with unique Bengali cuisine.',
      ceremonies: ['Aiburo Bhaat', 'Dodhi Mangal', 'Gaye Holud', 'Shubho Drishti', 'Saat Paak', 'Sindoor Daan', 'Bou Bhaat']
    },
    {
      id: 4,
      title: 'Gujarati Wedding',
      image: img5,
      description: 'Gujarati weddings are joyous affairs with colorful attire, garba dancing, and unique customs. The ceremonies are festive and include many folk elements and traditional Gujarati cuisine.',
      ceremonies: ['Grah Shanti', 'Pithi', 'Garba', 'Mandap Muhurat', 'Jaimala', 'Kanyadaan', 'Pheras', 'Vidaai']
    },
    {
      id: 5,
      title: 'Maharashtrian Wedding',
      image: img8,
      description: 'Maharashtrian weddings are simpler and more traditional, with the bride wearing the Nauvaree saree. Ceremonies emphasize practical rituals and traditional values.',
      ceremonies: ['Sakhar Puda', 'Kelvan', 'Haldi', 'Simant Puja', 'Antarpat', 'Mangalashtak', 'Kanya Daan', 'Karmasampati']
    },
    {
      id: 6,
      title: 'Kashmiri Wedding',
      image: img6,
      description: 'Kashmiri weddings blend Hindu and Muslim traditions with distinctive attire including the traditional Pheran. The ceremonies include unique rituals and Wazwan feasts.',
      ceremonies: ['Livun', 'Wanvun', 'Mehndi Raat', 'Yenivol', 'Duribael', 'Pheras', 'Satraat']
    },
    {
      id: 7,
      title: 'Kerala Wedding',
      image: img7,
      description: 'Kerala Hindu weddings are simple and elegant, with the bride wearing the traditional Kerala Kasavu saree. Ceremonies take place in the morning and emphasize traditional values.',
      ceremonies: ['Nischayam', 'Pallum Vangal', 'Madhuram Veppu', 'Thalikettu', 'Nirapara', 'Grihapravesham']
    },
    {
      id: 8,
      title: 'Rajasthani Wedding',
      image: img10,
      description: 'Rajasthani weddings are grand affairs with royal influences, colorful attire, and elaborate ceremonies. They often take place in palaces or heritage venues with traditional folk music and dance.',
      ceremonies: ['Pitha Dastoor', 'Ganesh Sthapana', 'Mehendi', 'Sangeet', 'Baraat', 'Jai Mala', 'Pheras', 'Bidaai']
    }
  ]
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-pink-300 text-pink-800 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Indian Wedding Types</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">Discover the rich diversity of Indian wedding traditions from different regions of India, each with unique customs, attire, and ceremonies.</p>
        </div>
      </div>
      
      {/* Wedding Types Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16">
          {WeddingTypes.map((weddingType, index) => (
            <div key={weddingType.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 items-center`}>
              <div className="w-full lg:w-1/2">
                <img 
                  src={weddingType.image} 
                  alt={weddingType.title} 
                  className="rounded-lg shadow-lg w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-gray-800">{weddingType.title}</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{weddingType.description}</p>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Key Ceremonies:</h3>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {weddingType.ceremonies.map((ceremony, idx) => (
                    <span 
                      key={idx} 
                      className="bg-pink-100 text-pink-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {ceremony}
                    </span>
                  ))}
                </div>
                
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base transition">
                  Find {weddingType.title}s to Attend
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-100 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-gray-800">Ready to Experience an Indian Wedding?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 text-gray-600 max-w-2xl mx-auto">
            Browse our upcoming weddings and book your cultural experience today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-bold text-sm sm:text-base transition mb-3 sm:mb-0">
              Browse Upcoming Weddings
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-bold text-sm sm:text-base transition">
              Sign Up for Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeddingTypes
