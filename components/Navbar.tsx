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
          ? 'bg-gray-900 shadow-lg text-white'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="Global Wellness Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-primary-600'}`}>Global Wellness</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-primary-600'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/online-counselling"
              className={isScrolled ? 'bg-primary-500 hover:bg-primary-400 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300' : 'btn-primary'}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
          <div className={`md:hidden py-6 px-4 sm:px-6 border-t ${isScrolled ? 'border-gray-700' : 'border-gray-200'}`}>
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-2 font-medium transition-colors rounded-lg text-base ${isScrolled ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/online-counselling"
              className="block mt-4 py-3 px-6 btn-primary text-center rounded-lg"
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
