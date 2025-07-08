'use client';

import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, MouseEvent, useEffect } from "react";

const navItems = [
  {
    href: '#intro',
    label: 'Vision'
  },
  {
    href: '#projects',
    label: 'Projects'
  },
  {
    href: '#testimonials',
    label: 'Recognitions'
  },
  {
    href: '#faqs',
    label: 'Case Studies'
  },
  {
    href: '#footer',
    label: 'Contact'
  },
]

const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer className="bg-stone-700 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="uppercase">One Spot available for next week</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight" ref={scope}>
                Let&apos;s build the future of preventive healthcare together.
              </h2>
              <a
                href="mailto:anselfdynamics@gmail.com?subject=Inquiry%20from%20website&body=Hi%2C%20I%20am%20reaching%20out%20to%20you%20via%20your%20webpage."
                className="inline-block mt-8 group/button"
              >
                <Button
                  variant="secondary"
                  iconAfter={
                    <div className="size-6 overflow-hidden">
                      <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  anselfdynamics@gmail.com
                </Button>
              </a>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label} onClick={handleClickNavItem}>
                    <Button variant="text" className="text-lg">{label}</Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-16 text-sm text-white/50 space-y-1">
          <p>
            <strong>Registered Address:</strong> FF-21, Nilkanth Plaza, Danteshwar, Vadodara, Gujarat – 390004
          </p>
          <p className="pt-4 py-16">
            Copyright &copy; Anself Dynamics Pvt Ltd &bull; All rights reserved
          </p>
        </div>
        {/* <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Anself Dynamics Pvt Ltd &bull; All rights reserved
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
