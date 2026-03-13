import Link from 'next/link'
import Image from 'next/image'
import ServiceCardVideo from '@/components/ServiceCardVideo'

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
    video: '/assets/video-call.mp4',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Face-to-face interaction', 'Visual cues and body language', 'Secure and private', 'HD quality video'],
  },
  {
    title: 'Phone Call Counselling',
    description: 'Speak with your therapist over the phone. Perfect for those who prefer audio-only sessions or have limited internet connectivity.',
    video: '/assets/phone-call.mp4',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    features: ['Audio-only sessions', 'No video required', 'Flexible and convenient', 'Crystal clear audio'],
  },
  {
    title: 'Chat Counselling',
    description: 'Communicate with your therapist through secure text messaging. Ideal for those who prefer writing over speaking or need more time to express themselves.',
    video: '/assets/chat.mp4',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    features: ['Text-based communication', 'Asynchronous messaging', 'Time to think and respond', 'Secure platform'],
  },
]

export default function OnlineCounselling() {
  return (
    <>
      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Online Counselling <span className="text-primary-600">Works</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with online counselling is simple and straightforward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-primary-600">Session Type</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the format that feels most comfortable for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sessionTypes.map((type, index) => (
              <div key={index} className="card p-0 overflow-hidden flex flex-col">
                <ServiceCardVideo
                  src={type.video}
                  fallback={
                    <div className="flex items-center justify-center w-full h-full min-h-[200px] bg-gradient-to-br from-primary-50 to-secondary-50">
                      {type.icon}
                    </div>
                  }
                  aspectRatio="video"
                  className="rounded-t-xl"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-1">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-appointment"
                    className="mt-6 btn-primary text-center block w-full"
                  >
                    Book Online Counselling
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-primary-600">Online Counselling?</span>
              </h2>
              <div className="space-y-4">
                {[
                  'Access therapy from anywhere with an internet connection',
                  'Save time and money on travel expenses',
                  'More flexible scheduling options',
                  'Comfortable environment in your own space',
                  'Same quality care as in-person therapy',
                  'Increased privacy and confidentiality',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-4 sm:p-6 overflow-hidden">
              <div className="relative w-full aspect-[4/5] min-h-[320px] rounded-xl overflow-hidden bg-primary-50">
                <Image
                  src="/assets/image.jpeg"
                  alt="Why choose online counselling"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
