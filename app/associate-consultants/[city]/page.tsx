import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AboutTherapistCard from '@/components/AboutTherapistCard'
import { getAssociateCity } from '@/data/associateConsultants'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = getAssociateCity(citySlug)

  if (!city) {
    return { title: 'City Not Found - Global Wellness' }
  }

  return {
    title: `Associate Consultants in ${city.name} - Global Wellness`,
    description: `Meet our associate consultants and psychologists in ${city.name}. Book an appointment today.`,
  }
}

export default async function AssociateConsultantsCityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city: citySlug } = await params
  const city = getAssociateCity(citySlug)

  if (!city) {
    notFound()
  }

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 mb-4 inline-block font-medium"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Associate Consultants in{' '}
            <span className="text-primary-600">{city.name}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our expert psychologists and counsellors available in {city.name}. Select a
            consultant to view their profile and book a session.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {city.consultants.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {city.consultants.map((consultant) => (
                <AboutTherapistCard key={consultant.name} member={consultant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg mb-6">
                Consultants for {city.name} will be added soon.
              </p>
              <Link href="/about#therapists" className="btn-primary inline-block">
                View All Experts
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
