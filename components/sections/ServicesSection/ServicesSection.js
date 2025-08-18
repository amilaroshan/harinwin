import Image from 'next/image'
import ServiceCard from '../../ui/ServiceCard/ServiceCard'

function ServicesSection () {
  const services = [
    {
      icon: '/assets/services/1.png',
      title: 'Flight Booking Platforms',
      description: 'Maintain ticketing systems, schedules, and uptime for global and regional flight booking tools.',
      buttonText: 'Learn More',
      buttonVariant: 'outline',
      isHighlighted: true
    },
    {
      icon: '/assets/services/2.png',
      title: 'Hotel Booking Systems',
      description: 'Ensure seamless check-ins, calendar syncing, and reservation reliability for your hotel clients.',
      buttonText: 'Request a Demo',
      buttonVariant: 'primary',
      isHighlighted: false
    },
    {
      icon: '/assets/services/3.png',
      title: 'Car Rental Booking',
      description: 'Maintain ticketing and uptime for car rental booking systems with real-time availability.',
      buttonText: 'Learn More',
      buttonVariant: 'primary',
      isHighlighted: false
    }
  ]

  return (
    <section className="bg-[#F0EDE4] py-12 sm:py-16 md:py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#093890] mb-2 leading-tight tracking-tight">Our Expertise</h2>
          <p className="text-lg sm:text-xl text-[#4a4a4a] leading-relaxed">
            Redefining Travel Bookings with Smart Technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              buttonVariant={service.buttonVariant}
              isHighlighted={service.isHighlighted}
            />
          ))}
        </div>
        
        <div className="text-center">
          <a href="#all-services" className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold text-base sm:text-lg transition-all duration-200 hover:text-[#3a7bc8] hover:translate-x-1 group">
            View our Entire Services
            <span className="text-lg sm:text-xl transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
