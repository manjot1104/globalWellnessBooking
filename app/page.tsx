import Hero from '@/components/sections/Hero'
import AboutIntro from '@/components/sections/AboutIntro'
import ServicesOverview from '@/components/sections/ServicesOverview'
import Benefits from '@/components/sections/Benefits'
import OnlineCounselling from '@/components/sections/OnlineCounselling'
import Therapists from '@/components/sections/Therapists'
import Testimonials from '@/components/sections/Testimonials'
import BlogPreview from '@/components/sections/BlogPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <ServicesOverview />
      <Benefits />
      <OnlineCounselling />
      <Therapists />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
    </>
  )
}
