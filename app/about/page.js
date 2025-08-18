import Header from '../../components/layout/Header/Header'
import AboutHeroSection from '../../components/sections/AboutHeroSection/AboutHeroSection'
import AboutIntroSection from '../../components/sections/AboutIntroSection/AboutIntroSection'
import AboutStorySection from '../../components/sections/AboutStorySection/AboutStorySection'
import AboutValuesSection from '../../components/sections/AboutValuesSection/AboutValuesSection'
import AboutMissionSection from '../../components/sections/AboutMissionSection/AboutMissionSection'
import CTASection from '../../components/sections/CTASection/CTASection'
import Footer from '../../components/layout/Footer/Footer'

export default function About () {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHeroSection />
      <AboutIntroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutMissionSection />
      <CTASection />
      <Footer />
    </main>
  )
}
