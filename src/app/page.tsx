import FreelanceProjects from '@/components/frontend/FreelanceProjects'
import HeroSection from '@/components/frontend/HeroSection'
import Projects from '@/components/frontend/Projects'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <Projects/>
      <FreelanceProjects/>
    </div>
  )
}

export default page