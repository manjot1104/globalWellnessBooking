import type { Metadata } from 'next'
import Image from 'next/image'
import AboutTherapistCard from '@/components/AboutTherapistCard'

export const metadata: Metadata = {
  title: 'About Us - Global Wellness Mental Health Counselling',
  description: 'Learn about Global Wellness, our mission, values, and team of expert therapists dedicated to your mental health.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            About <span className="text-primary-600">Global Wellness</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            We're committed to making professional mental health support accessible, affordable, and effective for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                At Global Wellness, we believe that mental health is just as important as physical health. 
                Our mission is to break down barriers to mental health care by providing accessible, 
                high-quality online counselling services.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We understand that seeking help can be challenging, which is why we've created a 
                platform that prioritizes your comfort, privacy, and well-being. Our team of licensed 
                therapists is dedicated to supporting you on your journey to better mental health.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compassion</h4>
                    <p className="text-gray-600">We approach every client with empathy and understanding.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Confidentiality</h4>
                    <p className="text-gray-600">Your privacy and security are our top priorities.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-gray-600">We maintain the highest standards in therapy and care.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accessibility</h4>
                    <p className="text-gray-600">Mental health care should be available to everyone.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="therapists" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Meet Our Team of Expert <span className="text-primary-600">Psychologists</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto italic">
              Every face here is someone ready to listen, understand, and walk with you through your healing journey.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Dr. Priyanka Kalra', role: 'Psychiatrist', image: '/therapists/kalrapriyanka.jpeg' },
              { name: 'Dr. Sunil Kumar', role: 'Psychologist & CBT Therapist', image: '/therapists/sunil-kumar.jpeg' },
              { name: 'Dr. Mitali Sharma', role: 'Clinical Psychologist', image: '/therapists/mitali-sharma.jpeg' },
              { name: 'Dr. Ritu', role: 'Psychologist', image: '/therapists/ritu.jpeg' },
              { name: 'Dr. Vanita Kumari', role: 'Psychologist', image: '/therapists/vanita734722.jpeg' },
              { name: 'Prithvi Padam', role: 'Psychologist', image: '/therapists/prithvipadam.jpeg' },
              { name: 'Priyanka Leekha', role: 'Counselling Psychologist', image: '/therapists/leekha.priyanka.jpeg' },
              { name: 'Ramandeep Kaur', role: 'Psychologist', image: '/therapists/lordslove89.jpeg' },
            ].map((member, index) => (
              <AboutTherapistCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
