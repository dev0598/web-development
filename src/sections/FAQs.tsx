"use client";

import {FC, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {twMerge} from "tailwind-merge";

const faqs = [
    {
        id: 1,
        question: "How can Ocellux aid rural diabetic screening?",
        answer:
            "Ocellux helps screen diabetic patients in rural areas using a portable, smartphone-based fundus camera. It captures retinal images and uses AI for instant analysis, enabling local health workers to detect early signs of diabetic retinopathy and refer patients before vision loss occurs without needing an ophthalmologist on-site.",
    },
    {
        id: 2,
        question: "How can SLIT PAL improve pediatric eye exams?",
        answer:
            "SLIT PAL, a portable slit lamp camera adapter, has made it easier for pediatric ophthalmologists to document and review anterior segment images. Its compatibility with existing slit lamps and smartphones allows for better diagnostics, education, and follow-up, especially for young or non-cooperative patients.",
    },
    {
        id: 3,
        question: "How can DigiMach enable remote pathology?",
        answer:
            "DigiMach digitizes microscope slides using a plug-and-play camera system, allowing pathologists to view, annotate, and collaborate in real time. This has enabled remote slide reviews, second opinions, and faster diagnostics in pathology labs without high-end digital equipment.",
    },
    {
        id: 4,
        question: "How Thermalook can be used for early cancer detection?",
        answer:
            "Thermalook leverages thermal imaging to detect abnormal heat patterns indicative of early cancer signs. It’s a radiation-free, non-invasive method that has been deployed in screening camps for breast, head-neck, and other cancers, helping in early detection and preventive care.",
    },
];

const FAQs: FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <section className="section" id="faqs">
            <div className="container">
                <h2 className="text-4xl md:text-7xl lg:text-8xl">Case Studies</h2>
                <div className="mt-10 md:mt-16 lg:mt-20">
                    {faqs.map(({question, answer}, index) => (
                        <div key={question}
                             className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq"
                             onClick={() => {
                                 if (index === selectedIndex) {
                                     setSelectedIndex(null);
                                 } else {
                                     setSelectedIndex(index)
                                 }
                             }}
                        >
                            <div
                                className={twMerge("absolute h-0 w-full bottom-0 left-0 bg-stone-300 -z-10 group-hover/faq:h-full transition-all duration-700", index === selectedIndex && 'h-full')}></div>
                            <div
                                className={twMerge("flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8", index === selectedIndex && "lg:px-8")}>
                                <div className="text-2xl md:text-3xl lg:text-4xl cursor-pointer">{question}</div>
                                <div
                                    className={twMerge("inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-300 bg-white cursor-pointer", index === selectedIndex && 'rotate-45')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                    </svg>
                                </div>
                            </div>
                            <AnimatePresence>
                                {index === selectedIndex && (
                                    <motion.div
                                        className="overflow-hidden lg:px-8"
                                        initial={{height: 0, opacity: 0, marginTop: 0}}
                                        animate={{height: "auto", opacity: 1, marginTop: 12}}
                                        exit={{height: 0, opacity: 0, marginTop: 0}}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.04, 0.62, 0.23, 0.98]
                                        }}
                                    >
                                        <p className="text-xl mt-4">{answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;