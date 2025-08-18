import Header from '../components/layout/Header/Header'
import HeroSection from '../components/sections/HeroSection/HeroSection'
import AboutSection from '../components/sections/AboutSection/AboutSection'
import ServicesSection from '../components/sections/ServicesSection/ServicesSection'
import WhyChooseSection from '../components/sections/WhyChooseSection/WhyChooseSection'
import CTASection from '../components/sections/CTASection/CTASection'
import Footer from '../components/layout/Footer/Footer'

export default function Home () {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <CTASection />
      <Footer />
    </main>
  )
}

