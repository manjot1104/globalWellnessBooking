'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How does online counselling work?',
    answer: 'Online counselling works similarly to traditional in-person therapy, but sessions are conducted via secure video calls, phone calls, or text chat. You\'ll connect with a licensed therapist at your scheduled time and have a private, confidential session from the comfort of your own space.',
  },
  {
    question: 'Is online counselling as effective as in-person therapy?',
    answer: 'Yes, numerous studies have shown that online counselling can be just as effective as in-person therapy for many mental health concerns. The key is finding the right therapist and being comfortable with the format. Many clients actually prefer online therapy for its convenience and comfort.',
  },
  {
    question: 'How do I choose the right therapist?',
    answer: 'You can browse our therapist profiles to learn about their specializations, experience, and approach. Consider what issues you\'d like to address and what type of therapy style might work best for you. You can also book a consultation or request to be matched with a therapist based on your needs.',
  },
  {
    question: 'What should I expect in my first session?',
    answer: 'Your first session is typically an assessment where your therapist will ask about your background, current concerns, and goals for therapy. This helps them understand your situation and develop a personalized treatment plan. It\'s also a chance for you to see if you feel comfortable with the therapist.',
  },
  {
    question: 'How long are counselling sessions?',
    answer: 'Most individual counselling sessions last 50-60 minutes. Some therapists may offer shorter or longer sessions depending on your needs. Couples or family sessions may be longer, typically 75-90 minutes.',
  },
  {
    question: 'How much does online counselling cost?',
    answer: 'Our pricing varies depending on the therapist and session type. We offer competitive rates and some therapists accept insurance. Contact us for specific pricing information, and we can help you find an option that fits your budget.',
  },
  {
    question: 'Is my information confidential?',
    answer: 'Absolutely. We take your privacy and confidentiality very seriously. All sessions are conducted through secure, encrypted platforms. Your information is protected in accordance with HIPAA and other privacy regulations. We never share your information without your explicit consent.',
  },
  {
    question: 'Can I switch therapists if it\'s not a good fit?',
    answer: 'Yes, finding the right therapist is important for your success. If you feel that your current therapist isn\'t the right fit, you can request to switch to a different therapist at any time. We want to ensure you have the best possible experience.',
  },
  {
    question: 'What technology do I need for online sessions?',
    answer: 'For video sessions, you\'ll need a device with a camera and microphone (computer, tablet, or smartphone) and a stable internet connection. For phone sessions, any phone will work. For chat sessions, you just need a device with internet access. We\'ll provide instructions and support to help you get set up.',
  },
  {
    question: 'How do I cancel or reschedule an appointment?',
    answer: 'You can cancel or reschedule your appointment through your account dashboard or by contacting us directly. We ask for at least 24 hours notice for cancellations to avoid cancellation fees. We understand that emergencies happen and will work with you on a case-by-case basis.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked <span className="text-primary-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Find answers to common questions about online counselling and our services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card p-6 border-2 border-gray-200 hover:border-primary-300 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our team is here to help. Contact us and we'll get back to you as soon as possible.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
