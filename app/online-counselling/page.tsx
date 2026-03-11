import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Online Counselling - How It Works - MindCare',
  description: 'Learn how online counselling works at MindCare. Choose from video calls, phone sessions, or chat-based therapy.',
}

const steps = [
  {
    number: '1',
    title: 'Sign Up & Choose Your Therapist',
    description: 'Create your account and browse our team of licensed therapists. Read their profiles and select the one that best fits your needs.',
  },
  {
    number: '2',
    title: 'Book Your Session',
    description: 'Choose a convenient date and time for your session. We offer flexible scheduling including evenings and weekends.',
  },
  {
    number: '3',
    title: 'Connect & Start Your Session',
    description: 'On the day of your session, connect via your preferred method (video, phone, or chat) and begin your journey to wellness.',
  },
  {
    number: '4',
    title: 'Continue Your Progress',
    description: 'Schedule follow-up sessions as needed. Your therapist will work with you to create a personalized treatment plan.',
  },
]

const sessionTypes = [
  {
    title: 'Video Call Counselling',
    description: 'Have face-to-face conversations with your therapist through secure video calls. Experience the benefits of in-person therapy from the comfort of your home.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Face-to-face interaction', 'Visual cues and body language', 'Secure and private', 'HD quality video'],
  },
  {
    title: 'Phone Call Counselling',
    description: 'Speak with your therapist over the phone. Perfect for those who prefer audio-only sessions or have limited internet connectivity.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    features: ['Audio-only sessions', 'No video required', 'Flexible and convenient', 'Crystal clear audio'],
  },
  {
    title: 'Chat Counselling',
    description: 'Communicate with your therapist through secure text messaging. Ideal for those who prefer writing over speaking or need more time to express themselves.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    features: ['Text-based communication', 'Asynchronous messaging', 'Time to think and respond', 'Secure platform'],
  },
]

export default function OnlineCounsellingPage() {
  return (
    <div className="pt-20">
      {/* Embedded Booking Website */}
      <section className="min-h-screen bg-white">
        <div className="w-full h-screen">
          <iframe
            src="https://booking-employees.vercel.app"
            className="w-full h-full border-0"
            title="Online Counselling Booking"
            allow="fullscreen"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  )
}
