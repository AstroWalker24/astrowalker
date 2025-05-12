import React from 'react';
import { motion } from 'framer-motion';

import Linkedin from '../assets/images/icons/linkedin.png';
import Github from '../assets/images/icons/github.png';
import Envelope from '../assets/images/icons/envelope.png';



import NameLogo from '../assets/images/logos/Logo_Name.png';

export default function Footer() {

    const quickLinks = [
        { name: "Bio", link: "#bio" },
        { name: "Projects", link: "#projects" },
        { name: "Skills", link: "#skills" },
    ];

    const contactInfo = {
        email: "walkerastro41@gmail.com",
        phone: "+91 9390224238",
        github: "https://github.com/AstroWalker41",
        linkedin: "https://www.linkedin.com/in/nadeem-shaik-15b610243/",
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };


    return (
        <footer className='bg-black text-white py-12 md:py-16 px-6 md:px-16'>
            <motion.div
                className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >

                <motion.div className='flex flex-col md:w-1/3 w-full' variants={itemVariants}>
                    <h1 className='font-poppinsdark text-2xl md:text-4xl leading-tight'>
                        Building <br />
                        <span className='font-poppinsitalic'>Interfaces</span> <br />
                        That perform
                    </h1>
                </motion.div>

                <motion.div className='flex flex-col md:w-1/3 w-full space-x-4' variants={itemVariants}>
                    <h2 className='font-poppinsdark text-lg md:text-xl'>/Quick Links</h2>
                    <ul className='flex flex-wrap gap-3 mt-4'>
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.link}
                                    className='bg-pink-500 hover:bg-pink-600 font-poppinsdark text-sm md:text-base uppercase rounded-full px-4 py-2 transition-colors duration-300'
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div className='flex flex-col md:w-1/3 w-full space-y-4' variants={itemVariants}>
                    <h2 className="font-poppinsdark text-lg md:text-xl">/Contact</h2>
                    <div className='space-y-2 text-gray-300 font-poppinsdark text-xs md:text-sm'>
                        <p>
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className='hover:text-pink-400 transition-colors duration-300 flex flex-row'
                            >   <img src={Envelope} alt="" className='pr-2' height={22} width={22} /> {contactInfo.email}
                            </a>
                        </p>
                        <p>
                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="hover:text-pink-400 transition-colors duration-300 flex flex-row"
                                aria-label="Call phone number"
                            >
                                <span className="inline mr-2">📞</span> {contactInfo.phone}
                            </a>
                        </p>

                        <p>
                            <a
                                href={contactInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-400 transition-colors duration-300 flex flex-row"
                                aria-label="Visit GitHub profile"
                            >
                                <img src={Github} className='mr-2' alt="" height={18} width={18} /> AstroWalker
                            </a>
                        </p>
                        <p>
                            <a
                                href={contactInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-400 transition-colors duration-300 flex flex-row"
                                aria-label="Visit LinkedIn profile"
                            >
                                <img src={Linkedin} height={18} width={18} className='mr-2' alt="" />LinkedIn
                            </a>
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className='flex flex-col md:flex-row items-center justify-center mt-12 md:mt-24 gap-6 md:gap-8'
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
            >
                <img
                    src={NameLogo}
                    alt="Nadeem Shaik logo"
                    height={180}
                    width={180}
                    loading="lazy"
                    className="object-contain"
                />
                <p className="font-poppinsbold text-4xl md:text-7xl lg:text-9xl uppercase text-center md:text-left">
                    Nadeem <span className="font-poppinsitalic md:text-9xl text-3xl ">Shaik</span>
                </p>
            </motion.div>
        </footer>
    )
}
