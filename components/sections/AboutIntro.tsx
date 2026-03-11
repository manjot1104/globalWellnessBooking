import Link from 'next/link'

export default function AboutIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">MindCare</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              MindCare is a leading online mental health counselling platform dedicated to making 
              professional therapy accessible to everyone. We believe that mental health support 
              should be available whenever and wherever you need it.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team of licensed therapists and counsellors are committed to providing compassionate, 
              evidence-based care in a safe and confidential environment. Whether you're dealing with 
              anxiety, depression, relationship issues, or simply need someone to talk to, we're here to help.
            </p>
            <Link href="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Therapists</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Sessions Completed</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
