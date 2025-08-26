'use client'
import { aboutImages } from '@/constants'
import React from 'react'
import Image from 'next/image'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


const AboutUs = () => {


    useGSAP(() => {

        // About us - title
        gsap.from(".about-title p", {
            opacity: 0,
            y: 40,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.about-title',
                start: 'top 80%',
                end: 'bottom 60%',
                // markers: true,
            }
        });

        // drink images
        gsap.from('.drink-Images', {
            opacity: 0,
            y: 40,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.drink-Images',
                start: 'top 75%',
                end: 'bottom 60%',
                // markers: true,
            }
        });



    }, [])


    return (
        <section id='about-us' className='px-10 bg-black'>

            <div className='pt-30 pb-30 flex flex-col gap-20'>

                <div className='flex flex-col md:flex-row justify-between items-start gap-6'>
                    <div className='flex flex-col gap-8 items-start'>
                        <a href="#" className='px-4 py-2 text-sm font-semibold rounded-3xl bg-white text-black'>Best Drinks</a>
                        <h2 className='about-title text-5xl font-modern-negra-demo' >
                            <p>Where every detail</p>
                            <p>matters — from muddle</p>
                            <p>to garnish</p>
                        </h2>
                    </div>

                    <div className='md:w-1/3 flex flex-col gap-6 md:gap-14 items-start'>
                        <p className='text-xl'>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                        <div className='flex flex-col gap-6 md:gap-1.5 '>
                            <h3 className='text-xl font-bold'><span className='text-5xl text-yellow-200'>4.5</span>/5</h3>
                            <p className='text-sm'>More than 12000+ customers</p>
                        </div>
                    </div>
                </div>

                {/* images */}
                <div className='w-full flex flex-col gap-5 md:flex-none md:grid grid-cols-3     '>
                    {aboutImages.map((item) => (
                        <div key={item.image} className='noisy-about drink-Images h-72 w-full relative '>
                            <Image
                                src={item.image}
                                alt="about-images"
                                fill
                                objectFit='cover'
                                className=' rounded-3xl opacity-70 '
                            />
                        </div>
                    ))}


                </div>

            </div>

        </section>
    )
}

export default AboutUs
