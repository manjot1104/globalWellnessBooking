import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ConsultantProfileImage from '@/components/ConsultantProfileImage'
import { getAssociateConsultant } from '@/data/associateConsultants'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const result = getAssociateConsultant(slug)

  if (!result) {
    return { title: 'Consultant Not Found - Global Wellness' }
  }

  return {
    title: `${result.consultant.name} - Global Wellness`,
    description: result.consultant.about ?? `Meet ${result.consultant.name}, ${result.consultant.role} at Global Wellness.`,
  }
}

export default async function AssociateConsultantProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const result = getAssociateConsultant(slug)

  if (!result) {
    notFound()
  }

  const { consultant, city } = result

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <Link
            href={`/associate-consultants/${city.slug}`}
            className="text-primary-600 hover:text-primary-700 mb-4 inline-block font-medium"
          >
            ← Back to {city.name}
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <ConsultantProfileImage
              src={consultant.image}
              alt={consultant.name}
              name={consultant.name}
            />
            <div className="lg:col-span-2">
              <p className="text-primary-600 font-semibold mb-2">{city.name}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {consultant.name}
              </h1>
              <p className="text-xl text-primary-600 font-medium mb-6">{consultant.role}</p>
              {consultant.about && (
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {consultant.name}</h2>
                  <p>{consultant.about}</p>
                </div>
              )}
              {consultant.therapies && consultant.therapies.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Therapies Offered</h2>
                  <div className="space-y-6">
                    {consultant.therapies.map((therapy, index) => (
                      <div key={therapy.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-primary-600 mb-3">
                          {index + 1}. {therapy.title}
                        </h3>
                        <ul className="space-y-2">
                          {therapy.points.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-gray-700">
                              <span className="text-primary-500 mt-1.5 shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-8">
                <Link href="/book-appointment" className="btn-primary inline-block">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {city.description && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Global Wellness</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{city.description}</p>
          </div>
        </section>
      )}
    </div>
  )
}
