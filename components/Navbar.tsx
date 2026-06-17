'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/online-counselling', label: 'Online Counselling' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black shadow-lg text-white'
          : 'bg-white'
      }`}
    >
      <div className="w-full">
        <div className="flex flex-nowrap items-center w-full h-16 lg:h-20">
          {/* Logo — flush left */}
          <Link href="/" className="flex flex-nowrap items-center gap-3 shrink-0 pl-4 sm:pl-6 lg:pl-8">
            <div className="w-10 h-10 lg:w-12 lg:h-12 relative flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="Global Wellness Logo"
                width={48}
                height={48}
                className={`object-contain ${isScrolled ? 'logo-no-bg-white' : 'logo-no-bg'}`}
                priority
                unoptimized
              />
            </div>
            <span className={`text-base lg:text-lg xl:text-xl font-bold whitespace-nowrap ${isScrolled ? 'text-white' : 'text-primary-600'}`}>Global Wellness</span>
          </Link>

          {/* Desktop Navigation — flush right */}
          <div className="hidden lg:flex flex-1 flex-nowrap items-center justify-end gap-5 xl:gap-7 2xl:gap-8 min-w-0 pr-4 sm:pr-6 lg:pr-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm xl:text-base font-medium whitespace-nowrap px-1.5 py-1 transition-colors duration-200 ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-primary-600'}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919501032237"
              className={`text-sm xl:text-base font-medium whitespace-nowrap transition-colors duration-200 flex items-center gap-2 shrink-0 ml-2 xl:ml-4 ${
                isScrolled
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 95010 32237
            </a>
            <Link
              href="/book-appointment"
              className={`whitespace-nowrap text-sm font-semibold py-2.5 px-5 xl:px-6 rounded-lg ml-2 xl:ml-3 transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary-500 hover:bg-primary-400 text-white'
                  : 'bg-primary-500 hover:bg-primary-600 text-white shadow-md'
              }`}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors shrink-0 ml-auto mr-4 sm:mr-6"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden py-6 px-4 sm:px-6 lg:px-8 border-t ${isScrolled ? 'border-gray-700' : 'border-gray-200'}`}>
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3.5 px-3 font-medium transition-colors rounded-lg text-base ${isScrolled ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="tel:+919501032237"
              className={`block mt-6 py-3.5 px-6 rounded-lg text-center font-semibold transition-colors ${
                isScrolled
                  ? 'border border-primary-400 text-primary-300 hover:bg-primary-500/20'
                  : 'border border-primary-600 text-primary-600 hover:bg-primary-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Call: +91 95010 32237
            </a>
            <Link
              href="/book-appointment"
              className="block mt-4 py-3.5 px-6 btn-primary text-center rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
