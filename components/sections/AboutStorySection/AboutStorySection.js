import Image from 'next/image'
import about1 from '@/assets/about/about1.jpg'


function AboutStorySection () {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src={about1}
                alt="Harinwin team collaboration"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="text-sm font-semibold text-[#3a7bc8] mb-4 uppercase tracking-wider">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#093890] leading-tight tracking-tight mb-6">
              Built by Developers,<br/>
              Designed for Travel
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              Harinwin was founded by a software developer who saw the inefficiencies in the travel booking process. What started as a personal project to streamline bookings has evolved into a full-fledged SaaS platform used by businesses across the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStorySection
