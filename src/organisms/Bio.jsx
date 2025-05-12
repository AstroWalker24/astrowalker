import React, { useEffect, useRef } from 'react';
import { delay, motion, scale, useInView } from 'framer-motion';

import Me from '../assets/images/pictures/meh2.jpg';


export default function Bio() {

    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { once: true });

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildrem: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8, stiffness: 100 } }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 1, delay: 0.5, type: 'spring', stiffness: 100 } }
    };

    const lineVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };






    return (
        <section className='bio-section bg-[#F5F5DC] flex flex-col md:py-6 md:px-16 px-10'>
            <motion.div
                className='heading flex justify-between items-center'
                ref={headingRef}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h1
                    className='md:text-8xl text-5xl font-fugazone    text-black'
                    variants={textVariants}
                >
                    Hey!
                </motion.h1>

            </motion.div>

            {/* bio contents container goes here  */}
            <motion.div
                className='bio-content flex w-full flex-col items-center gap-4 px-4 py-10 md:mt-10 md:flex-row md:items-start md:justify-between md:gap-8 lg:px-2'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div
                    variants={itemVariants}
                    className='text-center md:text-left md:pt-40'
                >
                    <motion.h1 className='hidden md:block font-poppinsdark text-black sm:text-4xl md:text-3xl'>

                        {"Built".split("").map((char, index) => (
                            <motion.span key={index} variants={lineVariants} style={{ display: "inline-block", marginRight: char === " " ? "0.25em" : '0' }}>
                                {char}
                            </motion.span>
                        ))}
                        <br />

                        {"by ".split("").map((char, index) => (
                            <motion.span key={index} variants={lineVariants} style={{ display: 'inline-block', marginRight: char === " " ? "0.25em" : "0" }}>
                                {char}
                            </motion.span>
                        ))}

                        <motion.span variants={lineVariants} className='font-poppinsitalic'>Nadeem, a</motion.span> <br />

                        {"developer based in ".split("").map((char, index) => (
                            <motion.span key={index} variants={lineVariants} style={{ display: 'inline-block', marginRight: char === " " ? "0.25em" : "0" }}>
                                {char}
                            </motion.span>
                        ))}
                        <br />

                        {"Ongole, currently part ".split("").map((char, index) => (
                            <motion.span key={index} variants={lineVariants} style={{ display: 'inline-block', marginRight: char === " " ? "0.25em" : "0" }}>
                                {char}
                            </motion.span>
                        ))}
                        <br />

                        {"of the design team at ".split("").map((char, index) => (
                            <motion.span key={index} variants={lineVariants} style={{ display: 'inline-block', marginRight: char === " " ? "0.25em" : "0" }}>
                                {char}
                            </motion.span>
                        ))}

                        <br />

                        <motion.span variants={lineVariants} className='font-poppinsitalic'>
                            @Fiducia
                        </motion.span>

                    </motion.h1>
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    className='order-first md:order-none'
                >
                    <motion.img
                        src={Me}
                        alt="Nadeem - Developer"
                        className='h-72 w-72 rounded-xl border-2 border-black object-cover md:h-80 md:w-80 lg:h-96 lg:w-96'
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>

                <motion.div
                    className='text-left md:text-left md:pt-32'
                    variants={itemVariants}
                >
                    <motion.p className='mt-6 font-poppinsdark text-base text-gray-700 md:mt-0 md:text-sm'>
                        I am a <span className='font-poppinsitalic'>Frontend Developer</span> <br />with over 3 years of experience <br />My work focuses on <br /> combining creativity and functionality <br /> to deliver exceptional <span className='font-poppinsitalic'>user experiences</span>.
                        <br /><br />

                        I am passionate about <br /> building user-friendly interfaces <br /> and constantly learning new technologies <br /> I am also a <span className='font-poppinsitalic'>part-time designer</span> <br /> creating visually appealing designs <br /> that enhance the overall user experience.
                    </motion.p>
                </motion.div>

            </motion.div>

        </section>
    )
}
