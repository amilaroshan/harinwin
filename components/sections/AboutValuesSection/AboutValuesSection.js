import { Search, Lightbulb, Shield } from 'lucide-react'
import Image from 'next/image'
import about2 from '@/assets/about/about2.jpg'

function AboutValuesSection () {
  const values = [
    {
      icon: Search,
      title: 'Transparency',
      description: 'Clear communication and honest practices in everything we do'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously improving and evolving our solutions'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Dependable service you can count on every time'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="text-sm font-semibold text-[#3a7bc8] mb-4 uppercase tracking-wider">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#093890] leading-tight tracking-tight mb-8">
              What We Stand For
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
              At Harinwin, we believe that technology should empower—not complicate—the way travel businesses operate. Our values are rooted in innovation, trust, and customer-first thinking. Every feature we build, and every solution we offer, is guided by our commitment to clarity, efficiency, and long-term reliability.
            </p>
            
            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-[#3a7bc8]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#093890] mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="order-first md:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src={about2}
                alt="Professional team working together"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutValuesSection
