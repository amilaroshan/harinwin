import Button from '../../ui/Button/Button'

function ServicesCTASection () {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#093890] leading-tight mb-4 sm:mb-6">
            Let&apos;s Power Your Next Booking Experience
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-8 sm:mb-10">
            Tell us about your travel business, and we&apos;ll help you configure a solution that fits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a href="/contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Get free consultation
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              How it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCTASection
