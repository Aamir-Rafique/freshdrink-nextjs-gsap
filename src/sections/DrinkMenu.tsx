'use client'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
import Image from 'next/image'
import { drinkMenu } from '@/constants'
import { useGSAP } from '@gsap/react'
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const DrinkMenu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {

        // Leafs animations (single timeline, single ScrollTrigger)
        gsap.timeline({
            scrollTrigger: {
                trigger: "#drink-menu",
                start: "top 50%",
                end: "bottom top",
                scrub: 0.3,
                // markers: true,
            }
        })
            .to(".drinkMenu-right-leaf", { x: -100, y: 150 }, 0)
            .to(".drinkMenu-left-leaf", { x: 80, y: -80 }, 0)
    }, [])

    useGSAP(() => {
        // Drink menu animations
        const tl = gsap.timeline();

        tl.from(".drink-image", { opacity: 0, x: -400, duration: 1.2 }, 0)
            .from(".drink-title", { opacity: 0, y: 20, duration: 1.2 }, 0)
            .from(".drink-para", { opacity: 0, y: 100, duration: 0.6, stagger: 0.2 }, 0)
    }, [currentIndex])

    return (
        <section id='drink-menu' className='relative h-fit w-full px-5 bg-black overflow-hidden'>

            {/* leafs images */}
            <div className='drinkMenu-right-leaf absolute h-35 w-25 md:h-75 md:w-75 top-0 md:-top-30 right-0 md:-right-20'>
                <Image
                    src='/images/drinkMenu-right-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'
                />
            </div>
            <div className=' drinkMenu-left-leaf absolute h-35 w-25 md:h-75 md:w-75 -bottom-5 md:-bottom-30  left-5 md:-left-20 '>
                <Image
                    src='/images/drinkMenu-left-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'
                />
            </div>


            <div className='pt-60 md:pt-30 pb-30 h-full w-full '>

                {/* Slider  */}
                {/* Drinks options */}
                <div className='flex justify-center gap-15 md:gap-0 md:justify-between font-modern-negra-demo  md:px-45'>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-20 md:justify-between '>
                        <button className={`text-2xl md:text-4xl md:px-8 md:py-2 cursor-pointer ${currentIndex === 0 ? 'text-white' : 'text-gray-500 hover:text-white'}  border-b`} onClick={() => setCurrentIndex(0)}>Classic</button>
                        <button className={`text-2xl md:text-4xl md:px-8 md:py-2 cursor-pointer ${currentIndex === 1 ? 'text-white' : 'text-gray-500 hover:text-white'}  border-b`} onClick={() => setCurrentIndex(1)}>Violet</button>
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-20 md:justify-between '>
                        <button className={`text-2xl md:text-4xl md:px-8 md:py-2 cursor-pointer ${currentIndex === 2 ? 'text-white' : 'text-gray-500 hover:text-white'}  border-b`} onClick={() => setCurrentIndex(2)}>Raspberry</button>
                        <button className={`text-2xl md:text-4xl md:px-8 md:py-2 cursor-pointer ${currentIndex === 3 ? 'text-white' : 'text-gray-500 hover:text-white'}  border-b`} onClick={() => setCurrentIndex(3)}>Curacao</button>
                    </div>
                </div>

                {/* right  and left arrows */}
                <div className='mt-20 md:mt-10 md:px-10 flex justify-between'>
                    <div className='relative h-9 w-9  md:h-10 md:w-10 cursor-pointer'>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" className='hover:bg-gray-800 rounded-2xl duration-300'
                            onClick={() => {
                                if (currentIndex > 0) {
                                    setCurrentIndex(currentIndex - 1)
                                }
                            }}
                            title="Previous"
                        />
                    </div>
                    <div className='relative h-9 w-9 md:h-10 md:w-10 cursor-pointer'>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" className='hover:bg-gray-800 rounded-2xl duration-300'
                            onClick={() => {
                                if (currentIndex < 3) {
                                    setCurrentIndex(currentIndex + 1)
                                }
                            }}
                            title="Next"
                        />
                    </div>
                </div>

                {/*  bg image - round gray/white - radial gradient*/}
                <div className="mb-20 md:mb-0 md:mt-20 absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-x-hidden">
                    <div className="w-full h-[300px] md:w-1/3 md:h-[50%] rounded-full bg-white/30 blur-[80px]" />
                </div>


                {/* Recipe Highlight + slider drink images */}

                {drinkMenu.map((drink, index) => (
                    currentIndex === index
                    &&
                    <div key={index} className='hidden md:flex pl-5 md:justify-between  '>
                        <div className='z-10 md:flex flex-col md:gap-3 md:justify-end md:pb-10 md:pl-10 '>
                            <h4 className='md:text-lg '>Recipe for:</h4>
                            <h3 className='drink-title text-6xl font-modern-negra-demo text-yellow-200'>{drink.title}</h3>
                        </div>
                        <div className='md:flex w-[70%] justify-end '>
                            <div className='drink-image relative  md:h-115 md:w-115 mt-5 md:mt-0' >
                                <Image
                                    src={drink.image}
                                    alt='Mask Image'
                                    fill
                                />
                            </div>
                            <div className=' w-[50%] flex flex-col md:gap-4 md:justify-end'>
                                <h3 className='drink-para text-5xl font-dm-serif-text'>{drink.tagline}</h3>
                                <p className='drink-para md:text-lg w-[95%]'>{drink.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* slider drinks images fot mobile */}
                <div className=' md:hidden'>
                    <div className='relative h-90 w-90 md:h-105 md:w-105 mt-5 md:mt-0 ' >
                        <Image
                            src='/images/drink1.png'
                            alt='Mask Image'
                            fill
                        />
                    </div>
                </div>


                {/* Recipe Highlight for screen < md i.e. mobile*/}
                <div className='md:hidden pt-20 pb-10 flex flex-col gap-6'>
                    <h4>Recipe for:</h4>
                    <h3 className='text-4xl font-modern-negra-demo text-yellow-200'>Classic</h3>
                    <h3 className='text-3xl font-dm-serif-text'>Simple Ingredients, Bold Flavor</h3>
                    <p>Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.</p>
                </div>
            </div>
        </section>
    )
}

export default DrinkMenu
