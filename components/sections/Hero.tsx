import Link from 'next/link'
import CircularText from '@/components/CircularText'
import AssociateConsultantDropdown from '@/components/AssociateConsultantDropdown'

const HERO_VIDEO_SRC = '/assets/hero-video.mp4'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary-900 pt-16 lg:pt-20">
      <div className="absolute top-20 lg:top-24 right-4 sm:right-6 lg:right-8 z-20">
        <AssociateConsultantDropdown align="right" />
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left – Text content */}
          <div className="flex flex-col justify-center py-6 lg:py-10">
            <p className="text-white/80 text-base md:text-lg mb-4 font-medium">
              Whatever you&apos;re facing, you don&apos;t have to face it alone. We&apos;re here to help.
            </p>
            <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl leading-tight mb-3">
              Talk to someone who truly understands you
            </h1>
            <p className="text-primary-400 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Find Clarity, Strength, and Peace
            </p>
            <p className="text-white/75 text-base md:text-lg mb-8 max-w-lg">
              Licensed therapists | 100% confidential | Affordable online sessions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about#therapists"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                Explore Our Experts
              </Link>
              <Link
                href="/online-counselling"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                Start Your Healing Journey
              </Link>
            </div>
          </div>

          {/* Right – Video */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[min(72vh,560px)] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 15%' }}
                aria-hidden
              >
                <source src={HERO_VIDEO_SRC} type="video/mp4" />
              </video>
            </div>

            <div className="absolute -bottom-4 -right-2 sm:bottom-4 sm:right-4 z-10 text-white drop-shadow-lg">
              <CircularText
                text="GLOBAL*WELLNESS*"
                onHover="speedUp"
                spinDuration={24}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
