'use client';

import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

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
    hidden: { opacity: 0, y: 50, scale: 0.8 },
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
    hidden: { opacity: 0, y: 60 },
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
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const textVariants = {
    hidden: { opacity: 0, x: -30 },
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
    hidden: { opacity: 0, scale: 0.8, y: 10 },
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

const backButtonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

interface ProjectProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    conclusionTitle: string;
    conclusion: string;
    conclusionPoints?: string[];
}

const ProjectSection = ({
    title,
    subtitle,
    description,
    conclusionTitle,
    image,
    conclusion,
    conclusionPoints
}: ProjectProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl" ref={ref}>
            <motion.div
                className="flex flex-col items-start justify-center mt-6 sm:mt-10 mb-20 sm:mb-40 gap-6 sm:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Back Button */}
                <motion.button
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors duration-200 group"
                    variants={backButtonVariants}
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.history.back()}
                >
                    <ArrowLeft size={20} className="group-hover:translate-x-[-2px] transition-transform duration-200" />
                    <span className="text-sm sm:text-base font-medium">Back to Works</span>
                </motion.button>

                {/* Title */}
                <motion.h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight" variants={titleVariants}>
                    {title}
                </motion.h1>

                {/* Full Width Image */}
                <motion.div className="w-full aspect-video rounded-lg overflow-hidden" variants={imageVariants}>
                    <Image
                        src={image}
                        alt="Project Image"
                        width={1920}
                        height={1080}
                        className="object-cover w-full h-full border border-stone-400 rounded-xl border-dotted"
                    />
                </motion.div>

                {/* Subtitle & Description */}
                <motion.div className="flex flex-col items-start justify-center gap-3 sm:gap-4 w-full" variants={textVariants}>
                    <motion.h2 className="rounded font-semibold text-lg sm:text-xl" variants={tagVariants}>
                        {subtitle}
                    </motion.h2>
                    <motion.div className="space-y-4" variants={projectVariants}>
                        {description.split("\n").map((para, i) => (
                        <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {para}
                        </p>
                        ))}
                    </motion.div>
                    {/* <motion.p className="text-sm sm:text-base text-gray-700 leading-relaxed" variants={projectVariants}>
                        {description}
                    </motion.p> */}
                </motion.div>

                {/* Conclusion */}
                <motion.div className="flex flex-col gap-3 sm:gap-4 w-full" variants={textVariants}>
                    <motion.h2 className="text-lg sm:text-xl font-semibold" variants={tagVariants}>
                        {conclusionTitle}
                    </motion.h2>
                    <motion.p className="text-sm sm:text-base text-gray-700 leading-relaxed" variants={projectVariants}>
                        {conclusion}
                    </motion.p>

                    <motion.ul>
                        {conclusionPoints?.map((c, i) => (
                            <motion.li
                                key={i}
                                className="text-sm sm:text-base text-gray-700 leading-relaxed"
                                variants={tagVariants}
                            >
                                <span className="mr-2">✨</span>{c}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ProjectSection;
