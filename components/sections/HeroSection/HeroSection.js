import Button from '../../ui/Button/Button'
import Image from 'next/image'
import heroImg from '@/assets/hero.png'

function HeroSection () {
  return (
    <section 
      className="relative overflow-hidden min-h-[calc(100vh-88px)] h-full flex flex-col justify-between bg-cover bg-center bg-bottom bg-no-repeat max-h-[780px] sm:max-h-[780px]" 
      style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}
      id="home"
    >
    
      
      {/* Top content section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 md:pb-0 relative z-10 flex-1 flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight tracking-tight mb-4 sm:mb-6 max-w-4xl mx-auto">
            Streamline Your Travel Booking Experience Now
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Our expert maintenance services ensure your booking system runs smoothly, allowing you to focus on providing exceptional travel experiences.
          </p>
          <a href="/contact">
            <Button variant="primary" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Get Free Consultation
            </Button>
          </a>
        </div>
      </div>
      
      {/* Hero image section at bottom */}
      <div className="relative z-10 px-4 sm:px-6 pb-0 translate-y-[0px] sm:translate-y-[-30px]">
        <div className="flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
            <Image 
              src={heroImg} 
              alt="Team celebrating success with travel booking" 
              width={800} 
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
