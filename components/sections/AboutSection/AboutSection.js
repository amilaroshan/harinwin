import Button from '../../ui/Button/Button'

function AboutSection () {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6 leading-tight">Trusted Expertise in Travel Booking Systems</h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-6 sm:mb-8">
            We are a dedicated small team passionate about keeping travel booking systems 
            running smoothly, efficiently, and securely. Our expertise lies in maintaining 
            the performance and reliability that your business depends on.
          </p>
          <Button variant="primary" size="md" className="w-full sm:w-auto">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
