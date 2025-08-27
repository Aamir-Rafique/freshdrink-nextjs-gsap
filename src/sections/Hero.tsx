'use client'
import { lovedDrinks, popularDrinks } from '@/constants'
import React from 'react'
import Image from 'next/image'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const videoRef = React.useRef<HTMLVideoElement | null>(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    // useGSAP(() => {

    //     //hero title
    //     const heroSplit = new SplitText(".title", {
    //         type: "chars"
    //     });

    //     //hero subtitle
    //     const paragraphSplit = new SplitText(".subtitle", {
    //         type: "lines"
    //     });

    //     // Apply text-gradient class once before animating
    //     heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    //     gsap.from(heroSplit.chars, {
    //         opacity: 0,
    //         yPercent: 100,
    //         duration: 1.8,
    //         ease: "expo.out",
    //         stagger: 0.06,
    //     });

    //     gsap.from(paragraphSplit.lines, {
    //         opacity: 0,
    //         yPercent: 100,
    //         // y: 100,
    //         duration: 1.8,
    //         ease: "expo.out",
    //         stagger: 0.06,
    //         delay: 1,
    //     });

    //     // Leafs animations (single timeline, single ScrollTrigger)
    //     gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "#home",
    //             start: "top top",
    //             end: "bottom top",
    //             scrub: 0.5,
    //             // markers: true,
    //         }
    //     })
    //         .to(".top-right-leaf", { y: 350 }, 0)
    //         .to(".top-left-leaf", { y: -300 }, 0)


    //     //   hero video animation (wait for metadata, then create timeline)
    //     const startValue = isMobile ? "top 50%" : "center 60%";
    //     const endValue = isMobile ? "120% top" : "bottom top";

    //     const setupVideoScroll = () => {
    //         if (!videoRef.current) return;
    //         const duration = videoRef.current.duration;
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: videoRef.current,
    //                 start: startValue,
    //                 end: endValue,
    //                 scrub: true,
    //                 pin: true,
    //             },
    //         }).to(videoRef.current, {
    //             currentTime: duration,
    //             ease: 'none',
    //         });
    //     };

    //     if (videoRef.current) {
    //         if (videoRef.current.readyState >= 1) {
    //             setupVideoScroll();
    //         } else {
    //             videoRef.current.onloadedmetadata = setupVideoScroll;
    //         }
    //     }

    // }, [isMobile]);

    return (
        <>
            <section id='home' className='min-h-screen relative px-5 md:px-15 md:bg-black/95 '>

                {/* Hero top */}
                <div className=' pt-40  md:pt-35 flex flex-col gap-2 '>
                    <div className='flex justify-center'>
                        <h1 className='z-10 title text-7xl md:text-[12rem]  font-modern-negra-demo bg-gradient-to-t from-[#FFFFFF] to-[#F1F1F1] bg-clip-text text-transparent'>
                            LEMONADE
                        </h1>
                    </div>

                    <p className='subtitle text-xl w-[80%] md:hidden '>
                        Every drink on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
                    </p>
                    <a href="#drink-menu" className='text-xl font-bold mt-2 md:hidden'>View drinks</a>
                </div>

                {/* hero  subtitles - if screen >= md:*/}
                <div className=' hidden  md:flex md:mt-26  justify-between '>
                    <div className=' w-1/4 flex flex-col gap-5 z-20'>
                        <p className='text-lg'>Cool. Crisp. Classic</p>
                        <h3 className='subtitle text-6xl text-yellow-200 font-modern-negra-demo '>
                            Sip the Spirit <br /> of Summer
                        </h3>
                    </div>
                    <div className=' w-1/4 flex flex-col gap-3 z-20'>
                        <div className='subtitle text-lg'>
                            Every cocktail on our menu is a blend of premium ingredients,
                            creative flair, and timeless recipes — designed to delight your
                            senses.
                        </div>
                        <a href="#drink-menu" className='text-xl font-bold mt-2 '>View drinks</a>
                    </div>
                </div>


                {/* hero center spacing */}
                {/* <div className='h-[38rem] md:h-[14rem]' /> */}

                {/* leafs images */}

                {/* top right */}
                <div className='top-right-leaf z-10 absolute h-35 w-25 md:h-[25rem] md:w-57 top-[55%] md:top-10 right-0'>
                    <Image
                        src='/images/hero-top-right-leaf.png'
                        alt='leaf-image'
                        fill
                        objectFit='cover'
                    />
                </div>

                {/* top left*/}
                <div className='top-left-leaf z-10 absolute h-30 w-30 md:h-66 md:w-66 top-[89%] md:top-60 left-0 md:-left-5'>
                    <Image
                        src='/images/hero-top-left-leaf.png'
                        alt='leaf-image'
                        fill
                        objectFit='cover'
                    />
                </div>
            </section>

            {/* Glass vid animation */}
            <div className="hidden md:flex absolute inset-0 ">
                <video
                    ref={videoRef}
                    muted
                    playsInline   //to prevent showing seekbar or vol up/down
                    preload="auto"
                    src="/videos/output.mp4"
                    className=' w-full absolute h-1/2 md:h-[80%] bottom-0 left-0 object-cover md:object-contain object-bottom'
                />
            </div>

        </>
    )
}

export default Hero
