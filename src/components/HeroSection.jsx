import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl tracking-tight'>
                    <span className='text-purple-600 '>Hi, I'm </span>
                    <span className="opacity-0 animate-fade-in-delay-2 text-gradient">Anuj </span>
                    <span className="opacity-0 animate-fade-in-delay-4 text-gradient">Chikhale</span>
                </h1>
                <p className='opacity-0 animate-fade-in-delay-6 text-gradient'>I specialize in building responsive and visually appealing frontend interfaces using modern JavaScript
                    frameworks like React. With a strong eye for design and usability, I focus on delivering smooth user experiences.
                    On the backend, I build reliable and efficient APIs using Node.js and Express, covering authentication, database integration (MongoDB), and RESTful services.
                    My strength lies in turning Figma designs into fully functional web apps, optimizing performance, accessibility, and SEO.
                </p>
                <div className='pt-4 opacity-0 animate-fade-in-delay-8 text-gradient'>
                    <a href="#projects" className='cosmic-button'>View my work</a>
                </div>

            </div>
        </div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
            <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
            <ArrowDown className='h-5 w-5 text-primary'/>
        </div>
    </section>
  )
}

export default HeroSection