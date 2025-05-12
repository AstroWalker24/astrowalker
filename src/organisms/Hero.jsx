import React, { useState, useEffect } from 'react';
import { delay, motion } from 'framer-motion';

import Me from '../assets/images/pictures/meh.jpg'


export default function Hero() {

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.4 ,duration: 1.2, ease: 'easeOut' } },
    };

    const item1Variants = {
        hidden: {opacity: 0, y: -50},
        visible: {opacity: 1, y: 0}
    }
    const item2Variants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0}
    }




    return (
        <section className='bg-[#F5F5DC] h-auto flex flex-col justify-center  items-center md:px-6 md:pt-24 px-6 pt-28 pb-10'>
            <motion.div
                className='flex items-center flex-col'
                initial="hidden"
                animate="visible"
                variants={textVariants} 
            >
                <motion.h1 className='text-7xl md:text-[180px] font-poppinsdark uppercase text-black' variants={item1Variants}>Nadeem</motion.h1>
                <motion.h1 className='text-7xl md:text-[170px] font-poppinsitalic uppercase text-black' variants={item2Variants}>Shaik</motion.h1>
            </motion.div>

            <motion.img
                 src={Me}
                 className='flex h-48 w-24 md:hidden border-2 border-black mt-10 object-cover'
                 initial={{opacity: 0, scale: 0.8}}
                 animate={{opacity: 1, scale: 1}}
                 transition={{duration: 0.8, delay: 0.5}}
                />

            <div className='flex w-full justify-between items-center px-6 mt-4 md:mt-12 h-auto'>
                <motion.p
                 className='text-black uppercase text-sm md:text-5xl font-poppinsdark pt-24'
                 initial="hidden"
                 animate="visible"
                 variants={textVariants}
                >
                    @2025
                </motion.p>

                <motion.img
                 src={Me}
                 className='hidden md:w-24 md:h-40 md:object-cover md:flex border-2 border-black'
                 initial={{opacity: 0, scale: 0.8}}
                 animate={{opacity: 1, scale: 1}}
                 transition={{duration: 0.5, delay: 0.5}}
                />

                <motion.p
                 className='text-black uppercase text-sm md:text-xl font-poppinsitalic pt-24'
                 initial="hidden"
                 animate="visible"
                 variants={textVariants}
                >
                    /Building since 2022
                </motion.p>
            </div>
        </section>
    )
}
