import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import ConditionalFooter from '@/components/ConditionalFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MindCare - Professional Online Mental Health Counselling',
  description: 'Get professional mental health support through online counselling. Expert therapists available for anxiety, depression, relationship issues, and more.',
  keywords: 'online counselling, mental health, therapy, anxiety counselling, depression counselling',
  openGraph: {
    title: 'MindCare - Professional Online Mental Health Counselling',
    description: 'Get professional mental health support through online counselling.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  )
}
