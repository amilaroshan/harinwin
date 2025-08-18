import { Linkedin } from 'lucide-react'
import Image from 'next/image'

function Footer () {
  return (
    <footer className="bg-dark-blue text-white py-10 sm:py-12 md:py-14 pb-4 sm:pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-15 mb-8 sm:mb-10">
          <div className="flex flex-col text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-4">
              <Image 
                src="/assets/logo.svg" 
                alt="Harinwin solutions" 
                width={160} 
                height={55}
                className="h-8 sm:h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-white/80 max-w-xs mx-auto sm:mx-0">
              Fuel your business growth and witness immediate results today.
            </p>
          </div>
          
          <div className="flex flex-col text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-5">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="/about" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/contact" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="/services" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">Services</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-5">Connect With Us</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <a href="#" className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-4 sm:pt-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-5">
          <div className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
            ©2025 Harinwin. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#" className="text-white/60 hover:text-white/80 transition-colors duration-200 text-xs sm:text-sm text-center">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white/80 transition-colors duration-200 text-xs sm:text-sm text-center">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white/80 transition-colors duration-200 text-xs sm:text-sm text-center">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
