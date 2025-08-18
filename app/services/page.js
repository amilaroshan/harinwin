import Header from '../../components/layout/Header/Header'
import ServicesHeroSection from '../../components/sections/ServicesHeroSection/ServicesHeroSection'
import ServicesIntroSection from '../../components/sections/ServicesIntroSection/ServicesIntroSection'
import ServicesDetailSection from '../../components/sections/ServicesDetailSection/ServicesDetailSection'
import ServicesFeaturesSection from '../../components/sections/ServicesFeaturesSection/ServicesFeaturesSection'
import ServicesCTASection from '../../components/sections/ServicesCTASection/ServicesCTASection'
import Footer from '../../components/layout/Footer/Footer'

export default function Services () {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHeroSection />
      <ServicesIntroSection />
      <ServicesDetailSection />
      <ServicesFeaturesSection />
      <ServicesCTASection />
      <Footer />
    </main>
  )
}
