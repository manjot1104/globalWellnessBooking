const therapists = [
  {
    name: 'Dr. Sarah Johnson',
    specialization: 'Anxiety & Depression',
    experience: '10+ years',
    image: '👩‍⚕️',
  },
  {
    name: 'Dr. Michael Chen',
    specialization: 'Relationship Counselling',
    experience: '8+ years',
    image: '👨‍⚕️',
  },
  {
    name: 'Dr. Emily Rodriguez',
    specialization: 'Child & Adolescent',
    experience: '12+ years',
    image: '👩‍⚕️',
  },
  {
    name: 'Dr. James Wilson',
    specialization: 'Stress Management',
    experience: '15+ years',
    image: '👨‍⚕️',
  },
]

export default function Therapists() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-primary-600">Expert Therapists</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Licensed professionals dedicated to your mental health and well-being
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapists.map((therapist, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="text-6xl mb-4">{therapist.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {therapist.name}
              </h3>
              <p className="text-primary-600 font-medium mb-2">
                {therapist.specialization}
              </p>
              <p className="text-gray-600 text-sm">{therapist.experience} Experience</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/about#therapists" className="btn-primary">
            View All Therapists
          </a>
        </div>
      </div>
    </section>
  )
}
