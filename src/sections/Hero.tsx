'use client'
import { lovedDrinks, popularDrinks } from '@/constants'
import React from 'react'
import Image from 'next/image'
// import { gsap } from "gsap";
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/all';
// gsap.registerPlugin(ScrollTrigger)


const Hero = () => {

//     useGSAP(() => {
//         gsap.fromTo(
//             ".",
//             { x: -500 }, // from
//             {
//                 x: 400, // to
//                 scrollTrigger: {
//                     trigger: ".box",
//                     scrub: 0.5,
//                     markers: true,
//                 }
//             }
//         )

//     }, [])
// }, [])

return (
    <section className=' relative h-fit w-full px-5 bg-black/95'>

        {/* Hero bg noise effect */}
        {/* <div className="h-full page-header noise-effect"></div> */}

        <div className='h-full w-full '>
            <Image
                src='/images/hero-bg.png'
                alt='hero-bg'
                fill
                objectFit='cover'
                className='contrast-150 saturate-200'
            />
        </div>

        {/* Glass vid animation */}
        {/* <div className='h-[60rem]  w-xl -left-[25%] overflow-hidden'>
            <video
                src="/videos/hero-vid.mp4"
                // loop
                muted
                playsInline
            />
        </div> */}


        {/* Hero top */}
        <div className='pt-40  flex flex-col gap-2'>
            <div className='flex justify-center'>
                <h1 className='text-7xl  font-modern-negra-demo bg-gradient-to-t from-[#FFFFFF] to-[#F1F1F1] bg-clip-text text-transparent'>LEMONADE</h1>
            </div>
            <p className='text-xl'>Every drink on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.</p>
            <a href="#" className='text-xl font-bold mt-2'>View drinks</a>
        </div>




        {/* hero center spacing */}
        <div className='h-[38rem]' />

        {/* leafs images */}
        <div className='absolute h-35 w-25 top-[22%] right-0'>
            <Image
                src='/images/hero-top-right-leaf.png'
                alt='leaf-image'
                fill
                objectFit='cover'
            />
        </div>
        <div className='absolute h-30 w-30 top-[34%] left-0'>
            <Image
                src='/images/hero-top-left-leaf.png'
                alt='leaf-image'
                fill
                objectFit='cover'

            />
        </div>
        <div className='absolute h-30 w-30 top-[47%] left-0'>
            <Image
                src='/images/hero-bottom-left-leaf.png'
                alt='leaf-image'
                fill
                objectFit='cover'

            />
        </div>
        <div className='absolute h-30 w-30 top-[73%] right-0'>
            <Image
                src='/images/hero-bottom-right-leaf.png'
                alt='leaf-image'
                fill
                objectFit='cover'

            />
        </div>



        {/* Hero Bottom */}
        <div className='flex flex-col gap-25'>
            {/* Popular Drinks */}
            <div className='flex flex-col gap-8'>
                <h2 className='text-xl font-bold'>Most popular drinks:</h2>
                <div className='flex flex-col gap-7 '>
                    {popularDrinks.map((item) => (
                        <div key={item.title} className='flex justify-between'>
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
            <div className='flex flex-col gap-8 mb-20'>
                <h2 className='text-xl font-bold'>Most loved drinks:</h2>
                <div className='flex flex-col gap-7 '>
                    {lovedDrinks.map((item) => (
                        <div key={item.title} className='flex justify-between'>
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
