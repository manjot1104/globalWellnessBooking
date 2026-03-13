import Link from 'next/link'
import ServiceCardVideo from '@/components/ServiceCardVideo'

const services = [
  {
    title: 'Anxiety Counselling',
    description: 'Learn effective strategies to manage anxiety, panic attacks, and worry.',
    icon: '🧘',
    href: '/services#anxiety',
    video: '/assets/anxiety.mp4',
  },
  {
    title: 'Depression Counselling',
    description: 'Get support to overcome depression and regain your motivation for life.',
    icon: '💙',
    href: '/services#depression',
    video: '/assets/depression.mp4',
  },
  {
    title: 'Relationship Counselling',
    description: 'Strengthen your relationships and improve communication with your partner.',
    icon: '💑',
    href: '/services#relationship',
    video: '/assets/relationship.mp4',
  },
  {
    title: 'Stress Management',
    description: 'Develop healthy coping mechanisms to manage work and life stress.',
    icon: '🌿',
    href: '/services#stress',
    video: '/assets/stress.mp4',
  },
  {
    title: 'Child Counselling',
    description: 'Support your child\'s emotional well-being with age-appropriate therapy.',
    icon: '👶',
    href: '/services#child',
    video: '/assets/child.mp4',
  },
  {
    title: 'Career Counselling',
    description: 'Navigate career transitions and find clarity in your professional path.',
    icon: '💼',
    href: '/services#career',
    video: '/assets/career.mp4',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive mental health support tailored to your unique needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="card p-0 overflow-hidden hover:border-primary-300 border-2 border-transparent flex flex-col"
            >
              <ServiceCardVideo
                src={service.video}
                fallback={<span className="text-5xl">{service.icon}</span>}
                className="w-full"
                aspectRatio="video"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
                <span className="text-primary-600 font-medium hover:text-primary-700">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
