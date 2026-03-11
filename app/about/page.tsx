import type { Metadata } from 'next'

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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Licensed professionals with years of experience in mental health counselling
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Johnson', role: 'Clinical Psychologist', specialization: 'Anxiety & Depression', exp: '10+ years' },
              { name: 'Dr. Michael Chen', role: 'Marriage & Family Therapist', specialization: 'Relationships', exp: '8+ years' },
              { name: 'Dr. Emily Rodriguez', role: 'Child Psychologist', specialization: 'Child & Adolescent', exp: '12+ years' },
              { name: 'Dr. James Wilson', role: 'Licensed Counsellor', specialization: 'Stress Management', exp: '15+ years' },
              { name: 'Dr. Lisa Anderson', role: 'Trauma Specialist', specialization: 'PTSD & Trauma', exp: '9+ years' },
              { name: 'Dr. David Kim', role: 'Career Counsellor', specialization: 'Career Development', exp: '7+ years' },
            ].map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.specialization}</p>
                <p className="text-gray-500 text-xs">{member.exp} Experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
