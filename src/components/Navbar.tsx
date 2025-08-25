import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='h-27 md:h-18 w-full bg-black/50 backdrop-blur-lg fixed top-0 z-10 md:flex items-center justify-between'>
            <div className='h-14 pt-4 md:pt-0 md:h-1/2 w-full md:w-1/6 flex justify-center items-center '>
                <div className='flex gap-2'>    
                    <div className='h-8 w-8 relative'>
                        <Image
                            src='/images/logo.png'
                            alt='Logo'
                            fill
                            objectFit='cover'
                        />
                    </div>
                    <h3 className='font-modern-negra-demo text-3xl'>Fresh Drink</h3>
                </div>
            </div>

            <div className='h-13 md:h-1/2 w-full md:w-[40%] md:mr-5 flex justify-center items-center  gap-6 md:gap-12 text-sm md:text-base font-semibold md:font-normal'>
                <a href="#home">Home</a>
                <a href="#drink-menu">Drinks</a>
                <a href="#about-us">About Us</a>
                <a href="#art">The &nbsp;Art</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
