'use client'
import { lovedDrinks, popularDrinks } from '@/constants'
import React from 'react'
import Image from 'next/image'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const HeroBottom = () => {

    useGSAP(() => {
        // Leafs animations (single timeline, single ScrollTrigger)
        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero-bottom",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // markers: true,
            }
        })
            .to(".bottom-left-leaf", { x: 80, y: -80 }, 0)
            .to(".bottom-right-leaf", { x: -100, y: -100 }, 0)

            .to(".bottom-left-leaf-mob", { x: 30, y: -30, scale: 1.2 }, 0)
            .to(".bottom-right-leaf-mob", { x: -30, y: -30, scale: 1.2 }, 0);

    }, []);

    return (
        <section id='hero-bottom' className='relative px-6 md:px-12 min-h-screen overflow-hidden'>
            {/* bottom left*/}
            <div className='bottom-left-leaf-mob md:bottom-left-leaf absolute h-35 w-30 md:h-78 md:w-78 -bottom-10 md:-bottom-30 -left-10 md:-left-30 '>
                <Image
                    src='/images/hero-bottom-left-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'
                />
            </div>

            {/* bottom right*/}
            <div className='bottom-right-leaf-mob md:bottom-right-leaf absolute h-35 w-35  md:h-78 md:w-78 -bottom-10 md:-bottom-30 -right-10 md:-right-30'>
                <Image
                    src='/images/hero-bottom-right-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'
                />
            </div>


            {/* Hero Bottom */}
            <div className='pt-40 flex flex-col md:flex-row gap-20 md:gap-0 md:justify-between '>

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

export default HeroBottom
