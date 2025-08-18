import { Shield, Clock, Monitor, Headphones } from 'lucide-react'
import Button from '../../ui/Button/Button'
import Image from 'next/image'
import whyImg from '@/assets/why.png'

function WhyChooseSection () {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with industry compliance standards'
    },
    {
      icon: Clock,
      title: 'Optimised Performance',
      description: '24/7 monitoring and performance optimization'
    },
    {
      icon: Monitor,
      title: 'System Reliability',
      description: '99.9% uptime guarantee with proactive maintenance'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Dedicated support team available round the clock'
    }
  ]

  return (
    <section 
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-12 md:py-16 lg:py-20"
      style={{ backgroundImage: 'url(/assets/whybg.jpg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-1 gap-8 md:gap-12 lg:gap-20 items-center relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#093890] leading-tight tracking-tight mb-4 sm:mb-6">
            Why Businesses<br className="hidden sm:block"/> Choose Harinwin
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-6 sm:mb-8 lg:mb-10">
            We specialize in keeping travel booking systems fast, secure, and reliable. 
            Our dedicated team ensures your platforms perform at peak efficiency with 
            comprehensive maintenance and 24/7 support.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-2 mb-6 sm:mb-8 lg:mb-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 p-4 sm:p-5 rounded-xl shadow-sm transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-2 sm:mb-3">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#3a7bc8]" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#093890] mb-1 sm:mb-2 leading-tight">{feature.title}</h3>
                {/* <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p> */}
              </div>
            ))}
          </div>
          
          <Button variant="primary" size="md">
            Our Services
          </Button>
        </div>
        
        
      </div>
      
      {/* Why.png image positioned at bottom right edge */}
      <div className="absolute bottom-0 right-0 z-20 w-[500px] h-fit hidden lg:block">
        <Image 
          src={whyImg}
          alt="Why choose Harinwin illustration"
          className="w-full h-autp"
          priority
        />
      </div>
    </section>
  )
}

export default WhyChooseSection
