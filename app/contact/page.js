import Header from '../../components/layout/Header/Header'
import ContactHeroSection from '../../components/sections/ContactHeroSection/ContactHeroSection'
import ContactInfoSection from '../../components/sections/ContactInfoSection/ContactInfoSection'
import ContactFormSection from '../../components/sections/ContactFormSection/ContactFormSection'
import Footer from '../../components/layout/Footer/Footer'

export default function Contact () {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
