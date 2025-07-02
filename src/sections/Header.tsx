'use client';

import {FC, MouseEvent, useEffect, useState} from "react";
import Button from "@/components/Button";
import {motion, useAnimate} from "motion/react";
import Link from "next/link";
import Image from "next/image";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
    {
        label: "Our Vision",
        href: "#intro",
    },
    {
        label: "Our Selected Works",
        href: "#projects",
    },
    {
        label: "Our Recognitions",
        href: "#testimonials",
    },
    {
        label: "Case Studies",
        href: "#faqs",
    },
    {
        label: "Contact Us",
        href: "#contact",
    },
];

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [topLineScope, topLineAnimate] = useAnimate();
    const [bottomLineScope, bottomLineAnimate] = useAnimate();
    const [navScope, navAnimate] = useAnimate();

    useEffect(() => {
        if (isOpen) {
            topLineAnimate([
                [
                    topLineScope.current,
                    {
                        translateY: 4,
                    },

                    {
                        duration: 0.2,
                    }
                ],
                [
                    topLineScope.current,
                    {
                        rotate: 45,
                    },
                    {
                        duration: 0.2,
                    }

                ],
            ]);

            bottomLineAnimate([
                [
                    bottomLineScope.current,
                    {
                        translateY: -4,
                    },

                    {
                        duration: 0.2,
                    }
                ],
                [
                    bottomLineScope.current,
                    {
                        rotate: -45,
                    },

                    {
                        duration: 0.2,
                    }
                ],
            ]);
            navAnimate(navScope.current,
                {
                    height: "100%",
                },
                {
                    duration: 0.4,
                }
            );
        } else {
            topLineAnimate([
                [
                    topLineScope.current,
                    {
                        rotate: 0,
                    }
                ],
                [
                    topLineScope.current,
                    {
                        translateY: 0
                    }
                ]
            ]);
            bottomLineAnimate([
                [
                    bottomLineScope.current,
                    {
                        rotate: 0,
                    }
                ],
                [
                    bottomLineScope.current,
                    {
                        translateY: 0
                    }
                ]
            ]);

            navAnimate(navScope.current, {height: 0});
        }
    }, [isOpen, topLineAnimate, topLineScope, bottomLineAnimate, bottomLineScope, navScope, navAnimate,]);
    const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsOpen(false);

        const url = new URL(e.currentTarget.href);
        const hash = url.hash;

        const target = document.querySelector(hash);

        if (!target) return;
        target.scrollIntoView({behavior: 'smooth'});

        // element.scrollIntoView({ })
    }
    return (
        <header>
            <div className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-400 z-50"
                 ref={navScope}
            >
                <nav className="mt-32 flex flex-col">
                    {navItems.map(({label, href}) => (
                        <a href={href} key={label}
                           className="text-white border-t last:border-b border-stone-500 py-8 group/nav-item relative isolate z-100"
                           onClick={handleClickMobileNavItem}
                        >
                            <div className="container !max-w-full flex items-center justify-between">
                                <span
                                    className="text-3xl group-hover/nav-item:pl-8 transition-all duration-500">{label}</span>
                                <div className="group-hover/nav-item:pr-8 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10">
                            </div>
                        </a>
                    ))}
                </nav>
            </div>
            <div className="container !max-w-full fixed top-0 left-0 w-full backdrop-blur-md z-50">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex">
                        <a href="/">
                            <Image src={"/logo.svg"} alt={"logo"} width={250} height={50}/>
                        </a>
                    </div>
                    <div className="flex items-center justify-center md:gap-4">
                        <div
                            className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-white cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"

                            >
                                <motion.rect x="3" y="7" width="18" height="2" fill="currentColor"
                                             ref={topLineScope}
                                             style={{
                                                 transformOrigin: '12px 8px',
                                                 // transform: "translateY(4px) rotate(45deg)",
                                             }}/>
                                <motion.rect x="3" y="15" width="18" height="2" fill="currentColor"
                                             ref={bottomLineScope}
                                             style={{
                                                 transformOrigin: '12px 16px',
                                                 // transform: "translateY(-4px) rotate(-45deg)",
                                             }}/>
                            </svg>
                        </div>
                        <Link href={"#contact"}>
                            <Button
                                variant="primary"
                                className="hidden md:inline-flex cursor-pointer">
                                Contact Us
                            </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
