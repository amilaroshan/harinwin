'use client'

import Button from '../../ui/Button/Button'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/assets/logo.svg" 
            alt="Harinwin solutions" 
            width={160} 
            height={55}
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-8 items-center">
          <a href="/" className="text-gray-800 font-medium text-sm lg:text-base transition-colors duration-200 hover:text-primary">Home</a>
          <a href="/about" className="text-gray-800 font-medium text-sm lg:text-base transition-colors duration-200 hover:text-primary">About Us</a>
          <a href="/services" className="text-gray-800 font-medium text-sm lg:text-base transition-colors duration-200 hover:text-primary">Services</a>
          <a href="/contact" className="text-gray-800 font-medium text-sm lg:text-base transition-colors duration-200 hover:text-primary">Contact Us</a>
        </nav>
        
        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="/contact">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
              Get a Quote
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md text-gray-800 hover:text-primary transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
          <nav className="px-4 py-6 space-y-4">
            <a 
              href="/" 
              className="block text-gray-800 font-medium text-base transition-colors duration-200 hover:text-primary py-2"
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="block text-gray-800 font-medium text-base transition-colors duration-200 hover:text-primary py-2"
              onClick={closeMobileMenu}
            >
              About Us
            </a>
            <a 
              href="/services" 
              className="block text-gray-800 font-medium text-base transition-colors duration-200 hover:text-primary py-2"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a 
              href="/contact" 
              className="block text-gray-800 font-medium text-base transition-colors duration-200 hover:text-primary py-2"
              onClick={closeMobileMenu}
            >
              Contact Us
            </a>
            <div className="pt-4 border-t border-gray-200">
              <a href="/contact" className="block">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-sm"
                  onClick={closeMobileMenu}
                >
                  Get a Quote
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
