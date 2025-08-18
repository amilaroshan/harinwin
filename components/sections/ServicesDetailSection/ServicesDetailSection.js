import Image from 'next/image'

function ServicesDetailSection () {
  const services = [
    {
      id: 'hotel-booking',
      category: 'Hotel Booking System',
      title: 'Simplify Room Bookings and Manage Hotel Operations with Ease',
      features: [
        'Customizable booking engine',
        'Real-time availability updates',
        'Multiple room types and rate plans',
        'Guest communications via email/SMS',
        'Integration with channel managers & OTAs'
      ],
      image: '/assets/services/s1.png',
      imageAlt: 'Hotel reception with staff helping guests'
    },
    {
      id: 'flight-booking',
      category: 'Flight Booking Integration',
      title: 'Connect Traveler\'s to Global Flights with a Seamless Search & Book Experience',
      features: [
        'Multi-airline search with filter options',
        'Real-time availability & fare display',
        'E-ticket generation & confirmation',
        'Backend access for agents or corporate accounts'
      ],
      image: '/assets/services/s2.png',
      imageAlt: 'Professional woman working at airport'
    },
    {
      id: 'car-rental',
      category: 'Car Rental Management',
      title: 'Automate Your Vehicle Bookings with Flexible Rental Controls',
      features: [
        'Fleet and location management',
        'Hourly, daily, or custom rental durations',
        'Driver options and add-ons (GPS, insurance, etc.)',
        'Pricing by vehicle class or demand',
        'Status tracking and automated reminders'
      ],
      image: '/assets/services/s3.png',
      imageAlt: 'Happy woman receiving car keys'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 md:space-y-20">
        {services.map((service, index) => (
          <div key={service.id} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
            {/* Image */}
            <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src={service.image}
                  alt={service.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
              <div className="text-sm font-semibold text-[#3a7bc8] mb-3 uppercase tracking-wider">
                {service.category}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#093890] leading-tight mb-6">
                {service.title}
              </h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#093890] mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-[#3a7bc8] rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesDetailSection
