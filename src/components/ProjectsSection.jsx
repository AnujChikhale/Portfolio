import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'


const projects = [
    {
      id: 1,
      title: "Employee Management System",
      description: "A frontend web application built using React and Vite, designed to simplify employee and task management workflows. The system features a responsive user interface, dynamic employee and task listings, task status tracking, and clean modular components. Styled with Tailwind CSS, the app ensures fast performance, smooth navigation, and modern design principles. Ideal for managing teams, tasks, and productivity, this project showcases efficient frontend development practices with a focus on real-world use cases.",
      image: ["/projects/EMS-employee.png"],
      tags: ["React","tailwind","vite"],
      demoUrl:"#",
      githubUrl: "https://github.com/AnujChikhale/Employee-Management-system"
    },
    {
      id: 2,
      title: "Vaishnavi Technosis",
      description: "A full-stack MERN (MongoDB, Express.js, React, Node.js) project built for a robotics automation firm. The platform includes a modern responsive frontend, dynamic blog section, project slider, contact form with email notifications, and SEO-optimized pages using React Helmet. It also integrates Cloudinary for media hosting and Nodemailer for form submissions. Deployed using Vercel (frontend) and Render (backend), the app demonstrates scalable and production-ready development practices. It is now live on vaishnavitechnosis.com",
      image: ["/projects/VT.png"],
      tags: ["React","tailwind","vite","express","Mongodb","Node"],
      demoUrl:"#",
      githubUrl: "https://github.com/AnujChikhale/VaishnaviTechnosis"
    },
    {
      id: 3,
      title: "Nobel Haul",
      description: "A basic fullsatck project used for transporting goods by sharing vehicles",
      image: ["/projects/nobelhaul.png"],
      tags: ["React","tailwind","vite","express","Mongodb","Node"],
      demoUrl:"#",
      githubUrl: "#"
    },
]

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-4 realtive'>
      <div className='conatiner mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> Featured <span className='text-primary '> Projects</span></h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my resent Projects . Each Project was carefully crafted with attention to detail, performance, and user experience.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
          {projects.map((project, key)=>(
            <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
              </div>

              <div className='p-6'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag)=>(
                      <span className='px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground'>{tag}</span>
                    ))}
                  </div>
              
              <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
              <p>{project.description}</p>
              <div className='flex justify-between item-center'>
                <div className='flex space-x-3'>
                  <a className='text-foreground/80 hover:text-primary transition-colors duration-300'
                     href={project.demoUrl}
                     target='_blank'>
                      <ExternalLink size={20}/></a>
                  <a className='text-foreground/80 hover:text-primary transition-colors duration-300' 
                     href={project.githubUrl}
                     target='_blank'>
                     <Github size={20}/></a>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank' href="https://github.com/AnujChikhale">Check my Github<ArrowRight size={16}/></a>
        </div>
      
      </div>
    </section>
  )
}

export default ProjectsSection