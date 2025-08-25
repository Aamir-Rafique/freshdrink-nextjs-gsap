import React from 'react'
import Image from 'next/image'
import { drinkImages, socialImages } from '@/constants'

const Contact = () => {
    return (
        <section className='relative h-fit w-full px-8 bg-black overflow-hidden'>

            {/*  bg image - round gray/white - radial gradient*/}
            <div className="mb-20 absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-x-hidden">
                <div className="w-[300px] h-[200px] md:w-1/3 md:h-[70%] rounded-full bg-white/25 blur-[80px]" />
            </div>

            {/* leafs images */}
            <div className='absolute h-35 w-25 md:h-65 md:w-65 -top-10 -right-10'>
                <Image
                    src='/images/contact-top-right-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'
                />
            </div>

            <div className='hidden md:flex absolute md:h-70 md:w-70 -bottom-10 -left-10'>
                <Image
                    src='/images/contact-bottom-left-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'
                />
            </div>

            {/* Contact Info */}
            <div className='py-16 h-[42rem] md:h-[50rem] flex flex-col justify-between items-center'>
                <h3 className='text-5xl md:text-6xl font-modern-negra-demo'>Where to Find Us</h3>
                <div className='text-center space-y-2 '>
                    <h2 className=''>VISIT OUR SHOP</h2>
                    <p className='text-sm md:text-2xl'>345, Raq Blvd. #300, Knowhere, BA 90010</p>
                </div>
                <div className='text-center space-y-2'>
                    <h2 className=''>CONTACT US</h2>
                    <div>
                        <p className='text-sm md:text-2xl'>(123) 456-7893</p>
                        <p className='text-sm md:text-2xl'>hello@freshdrinks.com</p>
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <h2 className=''>OPEN EVERYDAY</h2>
                    <div>
                        <p className='text-sm md:text-2xl'>Mon–Thu: 11:00am – 12am</p>
                        <p className='text-sm md:text-2xl'>Fri: 11:00am – 2am</p>
                        <p className='text-sm md:text-2xl'>Sat: 9:00am – 2am</p>
                        <p className='text-sm md:text-2xl'>Sun: 9:00am – 1am</p>
                    </div>
                </div>

                <div className='text-center space-y-2'>
                    {/* Social links */}
                    <h2 className=''>SOCIALS</h2>
                    <div className='h-fit w-full flex justify-center gap-2 md:gap-4'>
                        {socialImages.map((item) => (
                            <div key={item.image} className='h-8 w-8 relative cursor-pointer'>
                                <Image
                                    src={item.image}
                                    alt='Social Image'
                                    fill
                                    title={item.alt}
                                    objectFit='cover'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact
