'use client'

import { useState } from 'react'
import Image from 'next/image'

const therapists = [
  {
    name: 'Dr. Priyanka Kalra',
    specialization: 'Psychiatrist',
    experience: '10+ years',
    image: '/therapists/kalrapriyanka.jpeg',
    title: 'Psychiatrist',
    price: '₹2000',
    expertise: 'Depression, Anxiety, Counselling, OCD, Stress',
  },
  {
    name: 'Dr. Sunil Kumar',
    specialization: 'Psychologist & CBT Therapist',
    experience: '28 years',
    image: '/therapists/sunil-kumar.jpeg',
    title: 'Psychologist & CBT Therapist',
    price: '₹1100',
    expertise: 'Stress, Anxiety, Depression, Emotional regulation',
  },
  {
    name: 'Dr. Mitali Sharma',
    specialization: 'Clinical Psychologist',
    experience: '7 years',
    image: '/therapists/mitali-sharma.jpeg',
    title: 'Clinical Psychologist',
    price: '₹1200',
    expertise: 'Depression, Anxiety, PTSD, LGBTQIA+ mental health',
  },
  {
    name: 'Dr. Ritu',
    specialization: 'Psychologist',
    experience: '24 years',
    image: '/therapists/ritu.jpeg',
    title: 'Psychologist',
    price: '₹1200',
    expertise: 'Anxiety, Depression, OCD, Family & Couple counseling',
  },
]

function TherapistCard({
  therapist,
  index,
}: {
  therapist: (typeof therapists)[0]
  index: number
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="card p-6 text-center overflow-hidden">
      <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-primary-100 flex items-center justify-center">
        {!imgError ? (
          <Image
            src={therapist.image}
            alt={therapist.name}
            fill
            className="object-cover"
            sizes="96px"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-4xl" aria-hidden>👩‍⚕️</span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {therapist.name}
      </h3>
      <p className="text-primary-600 font-medium mb-2">
        {therapist.specialization}
      </p>
      <p className="text-gray-600 text-sm">{therapist.experience} Experience</p>
    </div>
  )
}

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
            <TherapistCard key={index} therapist={therapist} index={index} />
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
