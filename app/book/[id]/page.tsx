import type { Metadata } from 'next'

const BOOKING_BASE = 'https://booking-employees.vercel.app'

export const metadata: Metadata = {
  title: 'Book Appointment - Global Wellness',
  description: 'Book an online counselling session with our expert therapist.',
}

export default async function BookEmployeePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="pt-20">
      <section className="min-h-screen bg-white">
        <div className="w-full h-[calc(100vh-5rem)]">
          <iframe
            src={`${BOOKING_BASE}/employee/${id}`}
            className="w-full h-full border-0"
            title="Book Appointment"
            allow="fullscreen"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  )
}
