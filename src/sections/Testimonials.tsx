"use client";

import { FC, useRef, useState, useCallback } from "react";
import image1 from "@/assets/images/anself indiaai.jpg";
import image2 from "@/assets/images/gesia_2.jpg";
import image3 from "@/assets/images/guj_cm.jpg";
import image4 from "@/assets/images/techcelerate.jpg";
import image5 from "@/assets/images/iimb1.jpg";
import image6 from "@/assets/images/esc_stpi.jpg";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/Testimonial";

const testimonials = [
    {
        name: "IndiaAI Mission, Ministry of Electronics and IT, Government of India",
        company: "New Delhi",
        role: "March 2025",
        quote:
            "Selected as Top 30 AI startups in India",
        image: image1,
        imagePositionY: 0.2,
    },
    {
        name: "DMC, GESIA IT Association",
        company: "Ahmedabad",
        role: "October 2024",
        quote:
            "Winner at Digital Management Conclave, Pitchathon organised by GESIA IT Association",
        image: image2,
        imagePositionY: 0.2,
    },
    {
        name: "AIC GUSEC Startup Demo Day",
        company: "Ahmedabad",
        role: "May 2022",
        quote:
            "With Chief Minister of Gujarat Shri Bhupendra Patel and Former Education Minister Shri Jitu Vaghani",
        image: image3,
        imagePositionY: 0.2,
    },
    {
        name: "GUSEC and TiE Delhi-NCR ",
        company: "Delhi",
        role: "December 2022",
        quote:
            "Winner at a National Level Competition - GUSEC Techcelerate, powered by NSTEDB, DST, Govt. of India",
        image: image4,
        imagePositionY: 0.2,
    },
    {
        name: "IIM Bangalore, NSRCEL",
        company: "Bangalore",
        role: "May-January 2025",
        quote:
            "Top 30 Healthcare startup at NSRCEL IIMB under their LaunchPad and HealthCare Incubation Programs",
        image: image5,
        imagePositionY: 0.2,
    },
    {
        name: "ESC STPI",
        company: "Delhi",
        role: "October 2022",
        quote:
            "National Startup Initiative 2022, Building the next Unicorn",
        image: image6,
        imagePositionY: 0.2,
    },
];

const Testimonials: FC = () => {
    const titleRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: titleRef,
        offset: ['start end', 'end start'],
    });

    const transformTop = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const transformBottom = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    const handleClickPrev = useCallback(() => {
        if (isChanging) return; // Prevent multiple clicks during animation

        setIsChanging(true);
        setTestimonialIndex(curr => {
            if (curr === 0) {
                return testimonials.length - 1;
            }
            return curr - 1;
        });

        // Reset changing state after animation completes
        setTimeout(() => setIsChanging(false), 600);
    }, [isChanging]);

    const handleClickNext = useCallback(() => {
        if (isChanging) return; // Prevent multiple clicks during animation

        setIsChanging(true);
        setTestimonialIndex(curr => {
            if (curr === testimonials.length - 1) return 0;
            return curr + 1;
        });

        // Reset changing state after animation completes
        setTimeout(() => setIsChanging(false), 600);
    }, [isChanging]);

    return (
        <section className="section" id="testimonials">
            <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter" ref={titleRef}>
                <motion.span className="whitespace-nowrap"
                             style={{
                                 x: transformTop,
                             }}
                >
                    Notable Recognitions by Institutes for our work</motion.span>
                <motion.span className="whitespace-nowrap self-end text-red-orange-500"
                             style={{
                                 x: transformBottom,
                             }}
                >
                    Notable Recognitions by Institutes for our work</motion.span>
            </h2>
            <div className="container lg:items-center lg:justify-center">
                <div className="mt-20 w-full">
                    <AnimatePresence mode="wait" initial={false}>
                        <Testimonial
                            key={`${testimonials[testimonialIndex].name}-${testimonialIndex}`} // Better key for re-renders
                            name={testimonials[testimonialIndex].name}
                            company={testimonials[testimonialIndex].company}
                            role={testimonials[testimonialIndex].role}
                            quote={testimonials[testimonialIndex].quote}
                            image={testimonials[testimonialIndex].image}
                            imagePositionY={testimonials[testimonialIndex].imagePositionY}
                        />
                    </AnimatePresence>
                </div>

                <div className="flex justify-center items-center gap-x-10 mt-8 lg:mt-10">
                    {/* Previous Button + Label */}
                    <div className="flex flex-col items-center space-y-2 group">
                        <button
                            className={`border border-stone-300 text-stone-500 size-11 inline-flex items-center justify-center rounded-full transition-all duration-300 
                                    group-hover:bg-red-100 group-hover:text-red-600 group-hover:border-red-600 ${isChanging ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleClickPrev}
                            disabled={isChanging}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        </button>
                            <span className="text-sm text-stone-400 group-hover:text-stone-800 transition-colors duration-300 font-medium">
                                Previous
                            </span>
                    </div>

                    {/* Next Button + Label */}
                    <div className="flex flex-col items-center space-y-2 group">
                        <button
                            className={`border border-stone-300 text-stone-500 size-11 inline-flex items-center justify-center rounded-full transition-all duration-300 
                                    group-hover:bg-red-100 group-hover:text-red-600 group-hover:border-red-600 ${isChanging ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleClickNext}
                            disabled={isChanging}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        </button>
                        <span className="text-sm text-stone-400 group-hover:text-stone-800 transition-colors duration-300 font-medium">
                            Next
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;