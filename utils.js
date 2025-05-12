

export const navItemVariants = {
    hidden: {opacity: 0, y: -20},
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i*0.2,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};