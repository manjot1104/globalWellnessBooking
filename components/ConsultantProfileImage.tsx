'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ConsultantProfileImage({
  src,
  alt,
  name,
}: {
  src: string
  alt: string
  name: string
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl bg-primary-100 flex items-center justify-center">
      {!imgError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 320px"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-8xl opacity-50" aria-hidden>
          {name.includes('Sunil') || name.includes('Prithvi') || name.includes('Prannay')
            ? '👨‍⚕️'
            : '👩‍⚕️'}
        </span>
      )}
    </div>
  )
}
