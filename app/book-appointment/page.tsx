import type { Metadata } from 'next'

const BOOKING_BASE = 'https://booking-employees.vercel.app'

export const metadata: Metadata = {
  title: 'Book Appointment - Global Wellness',
  description: 'Login to book an online counselling session with our expert therapists.',
}

export default function BookAppointmentPage() {
  return (
    <div className="pt-20">
      <section className="min-h-screen bg-white">
        <div className="w-full h-[calc(100vh-5rem)]">
          <iframe
            src={`${BOOKING_BASE}/login`}
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
