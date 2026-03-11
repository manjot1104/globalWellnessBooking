import Link from 'next/link'

export default function Footer() {
  const services = [
    { href: '/services#anxiety', label: 'Anxiety Counselling' },
    { href: '/services#depression', label: 'Depression Counselling' },
    { href: '/services#relationship', label: 'Relationship Counselling' },
    { href: '/services#stress', label: 'Stress Management' },
    { href: '/services#child', label: 'Child Counselling' },
  ]

  const usefulLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/online-counselling', label: 'Online Counselling' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/book-appointment', label: 'Book Appointment' },
  ]

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">Global Wellness</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional online mental health counselling services. Your journey to wellness starts here.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: support@mindcare.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Global Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
