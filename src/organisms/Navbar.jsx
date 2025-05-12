import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { navItemVariants } from '../../utils';

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize); // actively listen for resize events 

        return () => {
            window.removeEventListener('resize', handleResize); // cleanup function to prevent memory leaks
        };
    }, []);

    // function to handle link clicks
    const handleClickAnimation = (event) => {
        if (isMobile ) {
            event.preventDefault(); // prevent default behavior 
            
            const target = event.currentTarget;

            if (target){
                target.classList.add('animate-click');
                setTimeout(()=>{
                    target.classList.remove('animate-click');
                    window.location.href = target.href;
                }, 300)
            }
            else{
                console.error('Target element not found');
            }
        }
    };



    return (
        <nav className='bg-[#F5F5DC] p-6 flex justify-between items-center border border-b-1 border-black md:h-auto h-10'>
            <motion.div
                className='flex space-x-10'
                initial="hidden"
                animate="visible"
            >
                {['Bio', 'Work'].map((item, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={navItemVariants}
                        initial="hidden"
                        animate="visible"
                        className='relative group'
                    >
                        <a href="#"
                            onClick={handleClickAnimation}
                            className={`text-black uppercase font-poppinsdark md:text-lg text-xs block`}

                        >
                            {item}
                        </a>
                        <motion.div
                            className="absolute h-0.5 w-full opacity-0 bg-gray-600 bottom-0 left-0 group-hover:opacity-100 transition-opacity duration-300"
                        />

                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className='relative group'
                custom={2}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
            >
                <a href="#contact" className='text-black uppercase font-poppinsdark md:text-lg text-xs block' onClick={handleClickAnimation}>Contact</a>
                <motion.div
                    className='absolute h-0.5 w-full opacity-0 bg-gray-600 bottom-0 left-0 group-hover:opacity-100 transition-opacity duration-300'
                >

                </motion.div>
            </motion.div>


        </nav>
    )
}
