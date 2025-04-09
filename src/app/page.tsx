import CTASection from '@/components/frontend/Cta'
import HeroSection from '@/components/frontend/HeroSection'
import Projects from '@/components/frontend/Projects'
import TechStack from '@/components/frontend/TechStacks'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <TechStack/>
      <Projects/>
      <CTASection/>
    </div>
  )
}

export default page