import { Facebook, Instagram, Linkedin, Mail, Map, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../lib/utils';
import { useToast } from '../hooks/use-toast';
import { Title } from '@radix-ui/react-toast';



const ContactSection = () => {

    const {toast} = useToast();
    const [isSubmitting, setisSubmitting] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault()
        setisSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description:"Thank you for your message .I will get back to you soon"
            })
            setisSubmitting(false);

        }, 1500);
    }


  return (
    <section id='contact' className="py-24 px-4 relative bg-secondary/30 ">
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Get In <span className='text-primary'>Touch</span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Have a project in mind or want to collaborate ? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6'>
                        {" "}
                        Contact Information</h3>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary'/>{" "}
                            </div>
                            <div>
                                <h4 className='font-medium'>Email</h4>
                                <a className='text-muted-foreground hover:text-primary transition-colors' href="mailto:chikhaleanuj38@gmail.com">
                                    chikhaleanuj38@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary'/>{" "}
                            </div>
                            <div>
                                <h4 className='font-medium'>Phone</h4>
                                <a className='text-muted-foreground hover:text-primary transition-colors' href="tel:+919172174109">
                                    +91 9172174109
                                </a>
                            </div>
                        </div>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 text-primary'/>{" "}
                            </div>
                            <div>
                                <h4 className='font-medium'>Location</h4>
                                <a className='text-muted-foreground hover:text-primary transition-colors'>
                                    Chakan, pune, Maharashtra, India
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <h4 className='font-medium mb-4'>Connect with Me</h4>
                        <div className='flex space-x-4 justify-center '>
                            <a href="https://www.linkedin.com/in/anuj-chikhale-b88519292/"> 
                                <Linkedin/>
                            </a>
                            <a href="#"> 
                                <Instagram/>
                            </a>
                            <a href="#"> 
                                <Facebook/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='bg-card p-8 rounded-lg shadow-xs'
                    onSubmit={handleSubmit}>
                    <h3 className='text-2xl font-semibold mb-6'> Send a Message</h3>
                    <form action="" className='space-y-6'>
                        <div>
                            <label className='block text-sm font-medium mb-2' htmlFor="name"> Your Name </label>
                            <input 
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary'
                                type='text'
                                id='name'
                                name='name'
                                required
                                placeholder='Name...' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-2' htmlFor="email"> Your Email </label>
                            <input 
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary'
                                type='email'
                                id='email'
                                email='email'
                                required
                                placeholder='abc@xyz.com...' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-2' htmlFor="name"> Your Message</label>
                            <input 
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary resize-none'
                                type='text'
                                id='message'
                                name='message'
                                required
                                placeholder='Message...' />
                        </div>
                        <button type='submit' disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                        )}>{isSubmitting ? "Sending..." : "Send Message "}<Send size={16}/></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection