'use client'
import { lovedDrinks, popularDrinks } from '@/constants'
import React from 'react'
import Image from 'next/image'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
// import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(TextPlugin);


const Hero = () => {
    const topRightLeafRef = React.useRef<HTMLDivElement>(null);
    const topLeftLeafRef = React.useRef<HTMLDivElement>(null);
    const bottomLeftLeafRef = React.useRef<HTMLDivElement>(null);
    const bottomRightLeafRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {

        // Hero top - title text
        gsap.from(".hero-title", {
            opacity: 0,
            y: 40,
            duration: 1,
            // ease: "back",
            stagger: 0.1,
            delay: 0.5
        });

        // hero top - sub title text
        gsap.from(".hero-subtitle-1 p", {
            opacity: 0,
            y: 40,
            duration: 1,
            // ease: "back",
            stagger: 0.1,
            delay: 0.5
        });

        gsap.from(".hero-subtitle-2 p", {
            opacity: 0,
            y: 40,
            duration: 1,
            // ease: "back",
            stagger: 0.1,
            delay: 0.5
        });


        //hero-vid-animation
        gsap.fromTo(".hero-vid-anim", {
        }, {
            // bottom:0,
        });


        // Leafs animations
        if (topRightLeafRef.current) {
            gsap.to(
                topRightLeafRef.current,
                {
                    y: 150,
                    scrollTrigger: {
                        trigger: topRightLeafRef.current,
                        start: 'top 10%',
                        end: 'bottom 10%',
                        scrub: 0.5,
                        // markers: true,
                    }
                }
            )
        }
        if (topLeftLeafRef.current) {
            gsap.to(
                topLeftLeafRef.current,
                {
                    y: -300,
                    scrollTrigger: {
                        trigger: topLeftLeafRef.current,
                        start: 'top 35%',
                        end: 'bottom 20%',
                        scrub: 1,
                        // markers: true,
                    }
                }
            )
        }

        if (bottomLeftLeafRef.current) {
            gsap.to(
                bottomLeftLeafRef.current,
                {
                    x: 80,
                    y: -80,
                    scrollTrigger: {
                        trigger: bottomLeftLeafRef.current,
                        start: 'top 100%',
                        end: 'top 50%',
                        scrub: 1,
                        // markers: true,
                    }
                }
            )
        }
        if (bottomRightLeafRef.current) {
            gsap.to(
                bottomRightLeafRef.current,
                {
                    x: -100,
                    y: -100,
                    scrollTrigger: {
                        trigger: bottomRightLeafRef.current,
                        start: 'top 80%',
                        end: 'top 70%',
                        scrub: 1,
                        // markers: true,
                    }
                }
            )
        }
    }, [])

    return (
        <section className=' relative h-fit w-full px-5 md:px-15 bg-black/95 overflow-hidden'>

            {/* Hero bg noise effect */}
            {/* <div className="h-full page-header noise-effect"></div> */}

            <div className='h-full w-full  '>
                <Image
                    src='/images/noise.png'
                    alt='hero bg'
                    fill
                    objectFit='cover'
                    className='contrast-150 saturate-200 '
                />
            </div>

            {/* Glass vid animation */}
            {/* <div className='hero-vid-anim fixed h-fit w-fit bottom-0 left-50 z-0'>
                <video
                    src="/videos/hero-vid.mp4"
                    // loop
                    muted
                    playsInline
                    className=''
                />
            </div> */}


            {/* Hero top */}
            <div className='pt-40  md:pt-35 flex flex-col gap-2'>
                <div className='flex justify-center'>
                    <h1 className='hero-title text-7xl md:text-[12rem]  font-modern-negra-demo bg-gradient-to-t from-[#FFFFFF] to-[#F1F1F1] bg-clip-text text-transparent'>
                        LEMONADE
                    </h1>
                </div>

                <p className=' text-xl md:hidden'>Every drink on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.</p>
                <a href="#" className='text-xl font-bold mt-2 md:hidden'>View drinks</a>
            </div>

            {/* hero top sub-titles - if screen >= md:*/}
            <div className=' hidden  md:flex md:mt-26  justify-between '>
                <div className=' w-1/4 flex flex-col gap-5 z-10'>
                    <p className='text-lg'>Cool. Crisp. Classic</p>
                    <h3 className='hero-subtitle-1 text-6xl text-yellow-200 font-modern-negra-demo '>
                        <p>Sip the Spirit</p>
                        <p> of Summer</p>
                    </h3>
                </div>
                <div className=' w-1/4 flex flex-col gap-3 z-10'>
                    <div className='text-lg hero-subtitle-2'>
                        <p className=''>Every drink on our menu is a</p>
                        <p>blend of premium ingredients,</p>
                        <p>creative flair, and timeless recipes</p>
                        <p> — designed to delight your senses.</p>
                    </div>
                    <a href="#" className='text-xl font-bold mt-2 '>View drinks</a>
                </div>
            </div>


            {/* hero center spacing */}
            <div className='h-[38rem] md:h-[14rem]' />

            {/* leafs images */}

            {/* top right */}
            <div ref={topRightLeafRef} className='top-right-leaf absolute h-35 w-25 md:h-[25rem] md:w-57 top-[22%] md:top-10 right-0'>
                <Image
                    src='/images/hero-top-right-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'
                />
            </div>

            {/* top left*/}
            <div ref={topLeftLeafRef} className='top-left-leaf absolute h-30 w-30 md:h-66 md:w-66 top-[34%] md:top-60 left-0 md:-left-5'>
                <Image
                    src='/images/hero-top-left-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'

                />
            </div>

            {/* bottom left*/}
            <div ref={bottomLeftLeafRef} className='bottom-left-leaf absolute h-30 w-30 md:h-78 md:w-78 bottom-[53%] md:-bottom-30 left-0 md:-left-30 '>
                <Image
                    src='/images/hero-bottom-left-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'

                />
            </div>

            {/* bottom right*/}
            <div ref={bottomRightLeafRef} className='bottom-right-leaf absolute h-30 w-30  md:h-78 md:w-78 bottom-[27%] md:-bottom-30 right-0 md:-right-30'>
                <Image
                    src='/images/hero-bottom-right-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'
                />
            </div>



            {/* Hero Bottom */}
            <div className='flex flex-col md:flex-row gap-25 md:gap-0 md:justify-between '>

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
    )
}

export default Hero
