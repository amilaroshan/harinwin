function AboutHeroSection () {
  return (
    <section 
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 md:py-24"
      style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#093890] leading-tight tracking-tight mb-6">
            About Us
          </h1>
        </div>
      </div>
    </section>
  )
}

export default AboutHeroSection
