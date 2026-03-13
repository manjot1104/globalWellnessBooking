import Link from 'next/link'
import CircularText from '@/components/CircularText'

const HERO_VIDEO_SRC = '/assets/hero-video.mp4'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gray-900">
      {/* Video background – full width/height, object-cover */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"
          aria-hidden
        />
      </div>

      {/* Content overlay – left-aligned, responsive */}
      <div className="relative z-10 w-full container-custom section-padding">
        <div className="max-w-2xl">
          <p className="text-white/90 text-lg md:text-xl mb-3 font-medium">
            Whatever you&apos;re facing, you don&apos;t have to face it alone. We&apos;re here to help.
          </p>
          <h1 className="text-white/95 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Talk to someone who truly understands you
          </h1>
          <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Find Clarity, Strength, and Peace
          </p>
          <p className="text-white/90 text-base md:text-lg mb-8">
            Licensed therapists | 100% confidential | Affordable online sessions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center"
            >
              Explore Our Experts
            </Link>
            <Link
              href="/book-appointment"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center"
            >
              Start Your Healing Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Circular "Global Wellness" – right side on desktop, below content on mobile */}
      <div className="absolute right-4 md:right-8 lg:right-12 bottom-8 md:bottom-12 z-10 flex justify-end md:justify-center">
        <div className="text-white drop-shadow-lg">
          <CircularText
            text="GLOBAL*WELLNESS*"
            onHover="speedUp"
            spinDuration={24}
          />
        </div>
      </div>
    </section>
  )
}
