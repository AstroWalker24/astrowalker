import React from 'react';
import { motion } from 'framer-motion';

import Mindcure from "../assets/images/pictures/mindcure_fake.png";
import Interview from "../assets/images/pictures/interview_platform.png";

export default function Featured() {

    // projects data for reusability
    const projects = [
        {
            title: "Mindcure",
            image: Mindcure,
            alt: "Mindcure Project Screenshot",
            description: "A mental health platform for personalized care.",
            link: "#",
        },
        {
            title: "Mona",
            image: Interview,
            alt: "Mona project screenshot",
            description: "An interview platform for job seekers and employers.",
            link: "#",
        },
    ];


    // container animation variants 
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
    };

    // card animation variants 
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        hover: { scale: 1.02, boxShadow: '0 8px 16px rgba(0,0,0,0.2)', transition: { duration: 0.2 } }
    };


    return (
        <section className='featured py-12 md:py-16 bg-[#F5F5DC] px-6 md:px-10 min-h-[600px] flex flex-col'>

            {/* header starts here  */}
            <motion.div
                className='mb-12'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className='font-poppinsdark text-4xl md:text-6xl lg:text-8xl text-gray-800'>Featured</h1>
                <h2 className='font-poppinsitalic text-4xl md:text-6xl lg:text-8xl text-gray-800 pl-6 md:pl-18'>Projects</h2>
            </motion.div>
            {/* header ends here  */}

            {/* project container starts here  */}
            <div className='flex md:flex-row flex-col gap-6 md:gap-10'>
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link}
                        className='group flex flex-col rounded-2xl shadow-md border border-black overflow-hidden hover:shadow-lg transition-shadow'
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        
                    >
                        <div className='relative h-[300px] md:h-[400px]'>
                            <img src={project.image} alt={project.alt} loading='lazy' className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className='p-6'>
                            <h3 className='font-poppinsitalic text-2xl md:text-3xl text-gray-800 mb-2'>/{project.title}</h3>
                            <p className='font-poppinsdark text-gray-700 text-sm md:text-lg'>{project.description}</p>
                        </div>
                    </motion.a>
                ))}
            </div>

        </section>
    )
}
