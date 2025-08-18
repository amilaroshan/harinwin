import Button from '../../ui/Button/Button'

function CTASection () {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary leading-tight mb-4 sm:mb-6">
            Ready to Keep Your Booking Systems at Peak Performance?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-8 sm:mb-10">
            Let Harinwin handle the system maintenance so you can focus on growing your business. 
            Our expert team ensures your platforms run smoothly 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a href="/contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Get Free Consultation
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              How it Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
