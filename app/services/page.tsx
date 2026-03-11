import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services - Global Wellness Mental Health Counselling',
  description: 'Comprehensive mental health services including anxiety, depression, relationship counselling, stress management, and more.',
}

const services = [
  {
    id: 'anxiety',
    title: 'Anxiety Counselling',
    description: 'Anxiety can be overwhelming, but you don\'t have to face it alone. Our therapists specialize in helping you understand and manage anxiety disorders, panic attacks, and chronic worry.',
    benefits: [
      'Learn effective coping strategies',
      'Understand your triggers',
      'Develop relaxation techniques',
      'Build confidence and resilience',
    ],
    icon: '🧘',
  },
  {
    id: 'depression',
    title: 'Depression Counselling',
    description: 'Depression affects millions of people, but with the right support, recovery is possible. Our compassionate therapists provide evidence-based treatment to help you regain your motivation and joy.',
    benefits: [
      'Cognitive Behavioral Therapy (CBT)',
      'Mood regulation techniques',
      'Lifestyle modifications',
      'Support and understanding',
    ],
    icon: '💙',
  },
  {
    id: 'relationship',
    title: 'Relationship Counselling',
    description: 'Strengthen your relationships through improved communication, conflict resolution, and emotional connection. Whether you\'re dating, engaged, or married, we can help.',
    benefits: [
      'Improve communication skills',
      'Resolve conflicts constructively',
      'Rebuild trust and intimacy',
      'Navigate relationship transitions',
    ],
    icon: '💑',
  },
  {
    id: 'stress',
    title: 'Stress Management',
    description: 'Chronic stress can impact every aspect of your life. Learn practical techniques to manage work stress, life pressures, and prevent burnout.',
    benefits: [
      'Identify stress triggers',
      'Develop healthy coping mechanisms',
      'Work-life balance strategies',
      'Prevent burnout',
    ],
    icon: '🌿',
  },
  {
    id: 'child',
    title: 'Child Counselling',
    description: 'Support your child\'s emotional well-being with age-appropriate therapy. Our child psychologists create a safe space for children to express themselves and develop healthy coping skills.',
    benefits: [
      'Age-appropriate therapy',
      'Play therapy techniques',
      'Parental guidance',
      'School-related support',
    ],
    icon: '👶',
  },
  {
    id: 'career',
    title: 'Career Counselling',
    description: 'Navigate career transitions, overcome workplace challenges, and find clarity in your professional path. Get guidance on career decisions and work-related stress.',
    benefits: [
      'Career assessment',
      'Transition support',
      'Workplace stress management',
      'Goal setting and planning',
    ],
    icon: '💼',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Our <span className="text-primary-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Comprehensive mental health support tailored to your unique needs and circumstances
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/book-appointment" className="btn-primary inline-block">
                    Book a Session
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
                    <div className="aspect-square flex items-center justify-center">
                      <div className="text-9xl opacity-20">{service.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a session with one of our expert therapists and take the first step towards better mental health.
          </p>
          <Link href="/book-appointment" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
