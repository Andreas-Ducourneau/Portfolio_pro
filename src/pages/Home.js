import React from 'react'

//Components
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactBanner from '../components/ContactBanner';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  )
}

export default Home