'use client'
import { lovedDrinks, popularDrinks } from '@/constants'
import React from 'react'
import Image from 'next/image'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
    const videoRef = React.useRef<HTMLVideoElement | null>(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {

        //hero title
        const heroSplit = new SplitText(".title", {
            type: "chars"
        });

        //hero subtitle
        const paragraphSplit = new SplitText(".subtitle", {
            type: "lines"
        });

        // Apply text-gradient class once before animating
        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            // y: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1,
        });

        // Leafs animations (single timeline, single ScrollTrigger)
        gsap.timeline({
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // markers: true,
            }
        })
            .to(".top-right-leaf", { y: 150 }, 0)
            .to(".top-left-leaf", { y: -300 }, 0)
            .to(".bottom-left-leaf", { x: 80, y: -80 }, 0)
            .to(".bottom-right-leaf", { x: -100, y: -100 }, 0);


        //   hero video animation
        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });

        if (videoRef.current) {                            //condition to ensure videoRef object is not null
            videoRef.current.onloadedmetadata = () => {
                if (videoRef.current) {
                    tl.to(videoRef.current, {
                        currentTime: videoRef.current.duration,
                    });
                }
            };
        }


    }, []);

    return (
        <>
            <section id='home' className='noisy relative h-fit w-full px-5 md:px-15 bg-black/95 overflow-hidden'>

                {/* Hero top */}
                <div className=' pt-40  md:pt-35 flex flex-col gap-2'>
                    <div className='flex justify-center'>
                        <h1 className='title text-7xl md:text-[12rem]  font-modern-negra-demo bg-gradient-to-t from-[#FFFFFF] to-[#F1F1F1] bg-clip-text text-transparent'>
                            LEMONADE
                        </h1>
                    </div>

                    <p className='subtitle text-xl md:hidden'>Every drink on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.</p>
                    <a href="#" className='text-xl font-bold mt-2 md:hidden'>View drinks</a>
                </div>

                {/* hero top sub-titles - if screen >= md:*/}
                <div className=' hidden  md:flex md:mt-26  justify-between '>
                    <div className=' w-1/4 flex flex-col gap-5 z-10'>
                        <p className='text-lg'>Cool. Crisp. Classic</p>
                        <h3 className='subtitle text-6xl text-yellow-200 font-modern-negra-demo '>
                            Sip the Spirit <br /> of Summer
                        </h3>
                    </div>
                    <div className=' w-1/4 flex flex-col gap-3 z-10'>
                        <div className='subtitle text-lg'>
                            Every cocktail on our menu is a blend of premium ingredients,
                            creative flair, and timeless recipes — designed to delight your
                            senses.
                        </div>
                        <a href="#" className='text-xl font-bold mt-2 '>View drinks</a>
                    </div>
                </div>


                {/* hero center spacing */}
                <div className='h-[38rem] md:h-[14rem]' />

                {/* leafs images */}

                {/* top right */}
                <div className='top-right-leaf absolute h-35 w-25 md:h-[25rem] md:w-57 top-[22%] md:top-10 right-0'>
                    <Image
                        src='/images/hero-top-right-leaf.png'
                        alt='leaf-image'
                        fill
                        objectFit='cover'
                    />
                </div>

                {/* top left*/}
                <div className='top-left-leaf absolute h-30 w-30 md:h-66 md:w-66 top-[34%] md:top-60 left-0 md:-left-5'>
                    <Image
                        src='/images/hero-top-left-leaf.png'
                        alt='leaf-image'
                        fill
                        objectFit='cover'

                    />
                </div>

                {/* bottom left*/}
                <div className='bottom-left-leaf absolute h-30 w-30 md:h-78 md:w-78 bottom-[53%] md:-bottom-30 left-0 md:-left-30 '>
                    <Image
                        src='/images/hero-bottom-left-leaf.png'
                        alt='leaf-image'
                        fill
                        objectFit='cover'

                    />
                </div>

                {/* bottom right*/}
                <div className='bottom-right-leaf absolute h-30 w-30  md:h-78 md:w-78 bottom-[27%] md:-bottom-30 right-0 md:-right-30'>
                    <Image
                        src='/images/hero-bottom-right-leaf.png'
                        alt='leaf-image'
                        fill
                        objectFit='cover'
                    />
                </div>


                {/* Hero Bottom */}
                <div className=' flex flex-col md:flex-row gap-25 md:gap-0 md:justify-between '>

                    {/* Popular Drinks */}
                    <div className='flex flex-col gap-8 md:z-10'>
                        <h2 className='text-xl font-bold'>Most popular drinks:</h2>
                        <div className='flex flex-col gap-7 md:gap-9'>
                            {popularDrinks.map((item) => (
                                <div key={item.title} className=' flex justify-between md:gap-26'>
                                    <div>
                                        <h3 className='text-xl font-modern-negra-demo text-yellow-200'>{item.title}</h3>
                                        <h4 className='text-sm font-semibold'>{item.info}</h4>
                                    </div>
                                    <span>
                                        <h2 className='text-xl font-semibold'>{item.price}</h2>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Loved Drinks */}
                    <div className='flex flex-col gap-8 mb-20 md:z-10'>
                        <h2 className='text-xl font-bold'>Most loved drinks:</h2>
                        <div className='flex flex-col gap-7 '>
                            {lovedDrinks.map((item) => (
                                <div key={item.title} className='flex justify-between md:gap-26'>
                                    <div>
                                        <h3 className='text-xl font-modern-negra-demo text-yellow-200'>{item.title}</h3>
                                        <h4 className='text-sm font-semibold'>{item.info}</h4>
                                    </div>
                                    <span>
                                        <h2 className='text-xl font-semibold'>{item.price}</h2>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Glass vid animation */}
            {/* <div className=" absolute inset-0 ">
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    src="/videos/hero-vid.mp4"
                    className='w-full absolute h-1/2 md:h-[80%]  bottom-0 left-0  object-cover md:object-contain object-bottom' 
                />
            </div> */}

        </>
    )
}

export default Hero
