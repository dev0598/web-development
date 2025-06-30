"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const titleVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

const projectVariants = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

const imageVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        rotate: -5
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.2
        }
    }
};

const imageLayerVariants = {
    hidden: {
        opacity: 0,
        x: -20,
        y: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

const textVariants = {
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.1
        }
    }
};

const tagVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 10
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

export default function Works() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className={"container"} ref={ref}>
            <motion.div
                className={"flex flex-col gap-6 lg:gap-16 py-8 sm:py-12 lg:py-24"}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/*Title*/}
                <motion.div
                    className={"flex w-full items-center justify-center"}
                    variants={titleVariants}
                >
                    <motion.div
                        style={{
                            background: 'rgba(217, 217, 217, 0.40)',
                            boxShadow: '0px 0px 12px 0px rgba(116, 116, 116, 0.15)',
                            backdropFilter: 'blur(17.700000762939453px)'
                        }}
                        className={"text-xl sm:text-2xl md:text-3xl lg:text-6xl button-shine font-medium rounded-2xl sm:rounded-3xl py-3 sm:py-4 lg:py-5 px-8 sm:px-12 lg:px-16 cursor-pointer"}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0px 0px 20px 0px rgba(116, 116, 116, 0.25)',
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Works
                    </motion.div>
                </motion.div>

                {/*ProjectSection Details - First ProjectSection*/}
                <motion.div
                    className={"flex flex-col lg:flex-row gap-6 lg:gap-12 min-h-[580px] lg:h-[580px]"}
                    variants={projectVariants}
                >
                    {/*Image*/}
                    <motion.div
                        className={"relative w-full flex h-[300px] sm:h-[400px] lg:h-full order-1 lg:order-1"}
                        variants={imageVariants}
                    >
                        <motion.div
                            className={"absolute top-4 sm:top-6 lg:top-10 border-4 sm:border-6 lg:border-8 border-solid border-[#E5E7EB] w-[280px] sm:w-[320px] lg:w-[400px] h-[240px] sm:h-[320px] lg:h-[480px] bg-[#E5E7EB]"}
                            variants={imageLayerVariants}
                            whileHover={{
                                y: -5,
                                x: 5,
                                transition: { duration: 0.3 }
                            }}
                        />
                        <motion.div
                            className={"absolute left-4 sm:left-6 lg:left-10 border-4 sm:border-6 lg:border-8 border-solid border-[#F9FAFB] w-[280px] sm:w-[320px] lg:w-[400px] h-[240px] sm:h-[320px] lg:h-[480px] bg-[#F9FAFB]"}
                            variants={imageLayerVariants}
                            whileHover={{
                                y: 5,
                                x: -5,
                                transition: { duration: 0.3 }
                            }}
                        />
                    </motion.div>

                    {/*Description*/}
                    <motion.div
                        className={"flex w-full flex-col gap-4 lg:gap-8 h-full order-2 lg:order-2"}
                        variants={textVariants}
                    >
                        <motion.h2
                            className={"text-xl sm:text-2xl lg:text-[30px] font-medium"}
                            variants={textVariants}
                        >
                            Project Title
                        </motion.h2>

                        <motion.div
                            className={"flex flex-col gap-4"}
                            variants={textVariants}
                        >
                            <motion.p
                                className={"text-sm sm:text-base leading-relaxed"}
                                variants={textVariants}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus
                                volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                posuere cubilia curae.
                            </motion.p>
                            <motion.div
                                className={"flex flex-wrap gap-2 sm:gap-3 lg:gap-4"}
                                variants={textVariants}
                            >
                                {["Sub-Detail", "Sub-Detail", "Sub-Detail", "Sub-Detail", "Sub-Detail"].map((tag, index) => (
                                    <motion.div
                                        key={index}
                                        className={"flex items-center justify-center px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium bg-[#E5E7EB] cursor-pointer"}
                                        variants={tagVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "#D1D5DB",
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {tag}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/*ProjectSection Details - Second ProjectSection*/}
                <motion.div
                    className={"flex flex-col lg:flex-row gap-6 lg:gap-12 min-h-[580px] lg:h-[580px]"}
                    variants={projectVariants}
                >
                    {/*Description*/}
                    <motion.div
                        className={"flex w-full flex-col gap-4 lg:gap-8 h-full order-2 lg:order-1"}
                        variants={textVariants}
                    >
                        <motion.h2
                            className={"text-xl sm:text-2xl lg:text-[30px] font-medium"}
                            variants={textVariants}
                        >
                            Project Title
                        </motion.h2>

                        <motion.div
                            className={"flex flex-col gap-4"}
                            variants={textVariants}
                        >
                            <motion.p
                                className={"text-sm sm:text-base leading-relaxed"}
                                variants={textVariants}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus
                                volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                posuere cubilia curae.
                            </motion.p>
                            <motion.div
                                className={"flex flex-wrap gap-2 sm:gap-3 lg:gap-4"}
                                variants={textVariants}
                            >
                                {["Sub-Detail", "Sub-Detail", "Sub-Detail", "Sub-Detail", "Sub-Detail"].map((tag, index) => (
                                    <motion.div
                                        key={index}
                                        className={"flex items-center justify-center px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium bg-[#E5E7EB] cursor-pointer"}
                                        variants={tagVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "#D1D5DB",
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {tag}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/*Image*/}
                    <motion.div
                        className={"relative w-full flex h-[300px] sm:h-[400px] lg:h-full order-1 lg:order-2"}
                        variants={imageVariants}
                    >
                        <motion.div
                            className={"absolute top-4 sm:top-6 lg:top-10 right-4 sm:right-6 lg:right-8 border-4 sm:border-6 lg:border-8 border-solid border-[#E5E7EB] w-[280px] sm:w-[320px] lg:w-[400px] h-[240px] sm:h-[320px] lg:h-[480px] bg-[#E5E7EB]"}
                            variants={imageLayerVariants}
                            whileHover={{
                                y: -5,
                                x: -5,
                                transition: { duration: 0.3 }
                            }}
                        />
                        <motion.div
                            className={"absolute left-4 sm:left-6 lg:left-10 border-4 sm:border-6 lg:border-8 border-solid border-[#F9FAFB] w-[280px] sm:w-[320px] lg:w-[400px] h-[240px] sm:h-[320px] lg:h-[480px] bg-[#F9FAFB]"}
                            variants={imageLayerVariants}
                            whileHover={{
                                y: 5,
                                x: 5,
                                transition: { duration: 0.3 }
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}