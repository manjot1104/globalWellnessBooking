'use client'

import { useState } from 'react'

interface ServiceCardVideoProps {
  src: string
  fallback: React.ReactNode
  className?: string
  aspectRatio?: 'video' | 'square'
}

export default function ServiceCardVideo({
  src,
  fallback,
  className = '',
  aspectRatio = 'video',
}: ServiceCardVideoProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 ${aspectRatio === 'square' ? 'aspect-square' : 'aspect-video'} rounded-xl overflow-hidden ${className}`}>
        {fallback}
      </div>
    )
  }

  return (
    <div className={`rounded-xl overflow-hidden ${aspectRatio === 'square' ? 'aspect-square' : 'aspect-video'} bg-gray-200 ${className}`}>
      <video
        src={src}
        muted
        loop
        playsInline
        autoPlay
        className="w-full h-full object-cover"
        onError={() => setError(true)}
        aria-hidden
      />
    </div>
  )
}
