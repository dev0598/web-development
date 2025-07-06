import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {HTMLAttributes, useEffect, useRef} from "react";
import {twMerge} from "tailwind-merge";
import {usePresence, motion} from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Testimonial = (props: {
    quote: string;
    name: string;
    role: string;
    company: string;
    imagePositionY: number;
    image: string | StaticImport;
    className?: string;
} & HTMLAttributes<HTMLDivElement>) => {

    const {quote, name, role, company, imagePositionY, image, className, ...rest} = props;

    const {
        scope: quoteScope,
        entranceAnimation: quoteEntranceAnimation,
        exitAnimation: quoteExitAnimation
    } = useTextRevealAnimation();
    const {
        scope: citeScope,
        entranceAnimation: citeEntranceAnimation,
        exitAnimation: citeExitAnimation
    } = useTextRevealAnimation();
    const [isPresent, safeToRemove] = usePresence();

    // Track if animations are running to prevent race conditions
    const animationsRunning = useRef(false);

    useEffect(() => {
        if (isPresent) {
            animationsRunning.current = true;
            quoteEntranceAnimation()
                .then(() => citeEntranceAnimation())
                .then(() => {
                    animationsRunning.current = false;
                })
                .catch(() => {
                    animationsRunning.current = false;
                });
        } else {
            if (animationsRunning.current) {
                // If animations are still running, wait a bit before starting exit
                setTimeout(() => {
                    animationsRunning.current = true;
                    Promise.all([
                        quoteExitAnimation(),
                        citeExitAnimation()
                    ]).then(() => {
                        animationsRunning.current = false;
                        safeToRemove();
                    }).catch(() => {
                        animationsRunning.current = false;
                        safeToRemove();
                    });
                }, 100);
            } else {
                animationsRunning.current = true;
                Promise.all([
                    quoteExitAnimation(),
                    citeExitAnimation()
                ]).then(() => {
                    animationsRunning.current = false;
                    safeToRemove();
                }).catch(() => {
                    animationsRunning.current = false;
                    safeToRemove();
                });
            }
        }
    }, [isPresent, quoteEntranceAnimation, citeEntranceAnimation, quoteExitAnimation, citeExitAnimation, safeToRemove]);

    return (
        <div
            className={twMerge("grid grid-cols-1 md:grid-cols-5 md:gap-8 lg:gap-16 items-center justify-center", className)} {...rest}>
            <div className="aspect-video md:col-span-3 flex justify-center relative">
                <motion.div className="absolute h-full bg-stone-400 z-10"
                            initial={{
                                width: '100%',
                            }}
                            animate={{width: 0}}
                            exit={{width: '100%'}}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                >
                </motion.div>
                <Image src={image} alt={name}
                       className="border border-dotted border-stone-400 rounded-xl size-fit object-cover"
                       style={{objectPosition: `50% ${imagePositionY * 100}%`}}/>
            </div>
            <blockquote className="md:col-span-2">
                <div className="text-2xl md:text-4xl mt-8 md:mt-0 lg:text-5xl" ref={quoteScope}>
                    {quote}
                </div>
                <cite className="mt-4 md:mt-8 not-italic block md:text-lg lg:text-xl" ref={citeScope}>
                    {name}, {role} at {company}
                </cite>
            </blockquote>
        </div>
    );
}

export default Testimonial;