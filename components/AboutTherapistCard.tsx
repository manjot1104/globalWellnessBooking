'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Member {
  name: string
  role: string
  image: string
}

export default function AboutTherapistCard({ member }: { member: Member }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="relative group overflow-hidden rounded-lg">
      <div className="aspect-[3/4] bg-gradient-to-br from-primary-200 to-secondary-300 flex items-center justify-center relative overflow-hidden">
        {!imgError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-8xl opacity-50">
            {member.name.includes('Sunil') || member.name.includes('Prithvi') ? '👨‍⚕️' : '👩‍⚕️'}
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none" />
      </div>
      <div className="absolute bottom-12 left-0 right-0 bg-primary-400/90 backdrop-blur-sm px-3 py-2">
        <h3 className="text-white font-semibold text-sm md:text-base text-center">
          {member.name}
        </h3>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 px-3 py-2">
        <p className="text-white font-medium text-xs md:text-sm text-center">
          {member.role}
        </p>
      </div>
    </div>
  )
}
