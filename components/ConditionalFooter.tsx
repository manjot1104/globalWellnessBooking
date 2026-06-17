'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide footer on booking pages (full-screen iframe)
  if (pathname === '/online-counselling' || pathname === '/book-appointment' || pathname.startsWith('/book/')) {
    return null
  }
  
  return <Footer />
}
