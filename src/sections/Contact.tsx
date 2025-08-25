import React from 'react'
import Image from 'next/image'
import { drinkImages } from '@/constants'

const Contact = () => {
    return (
        <section className='relative h-fit w-full px-8 bg-black'>


            {/*  bg image - round gray/white - radial gradient*/}
            <div className="mb-20 absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-x-hidden">
                <div className="w-[300px] h-[200px] rounded-full bg-white/40 blur-[80px]" />
            </div>

            {/* Contact Info */}
            <div className='py-16 h-[42rem] flex flex-col justify-between items-center'>
                <h3 className='text-5xl font-modern-negra-demo'>Where to Find Us</h3>
                <div className='text-center space-y-2 '>
                    <h2 className=''>VISIT OUR SHOP</h2>
                    <p className='text-sm'>345, Raq Blvd. #300, Knowhere, BA 90010</p>
                </div>
                <div className='text-center space-y-2'>
                    <h2 className=''>CONTACT US</h2>
                    <div>
                        <p className='text-sm'>(123) 456-7893</p>
                        <p className='text-sm'>hello@freshdrinks.com</p>
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <h2 className=''>OPEN EVERYDAY</h2>
                    <div>
                        <p className='text-sm'>Mon–Thu: 11:00am – 12am</p>
                        <p className='text-sm'>Fri: 11:00am – 2am</p>
                        <p className='text-sm'>Sat: 9:00am – 2am</p>
                        <p className='text-sm'>Sun: 9:00am – 1am</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact
