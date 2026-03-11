'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide footer on online-counselling page
  if (pathname === '/online-counselling') {
    return null
  }
  
  return <Footer />
}
