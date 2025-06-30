"use client";

import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";

const Intro: FC = () => {
  // const [scope, animate] = useAnimate();
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } =useTextRevealAnimation();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);


  // useEffect(() => {
  //   new SplitType(scope.current.querySelector('h2'), {
  //     types:'lines,words',
  //     tagName: 'span',
  //   });
  // }, [scope]);

  // useEffect(() => {
  //   if (inView) {
  //       animate(scope.current.querySelectorAll('.word'), 
  //       {
  //         transform: "translateY(0%)",
  //       },
  //       {
  //         duration: 0.5,
  //         delay: stagger(0.2),
  //       },
  //     ); 
  //   }
  // }, [inView]);
  return (
    <section className="py-24 mt-12 md:py-32 md:mt-16 lg:py-40 lg:mt-20" id="intro" ref={sectionRef}>
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[90%]" ref={scope}>
        Our Vision is to provide Affordable, Accessible & Easy to use medical devices driven by artificial intelligence to reduce the burden of healthcare systems
        </h2>
      </div>
    </section>
  );
};

export default Intro;
