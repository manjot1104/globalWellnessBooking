import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-800 to-gray-900">
      <div className="container-custom">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards better mental health. Book a session with one of our expert therapists today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/online-counselling" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Book Appointment
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
