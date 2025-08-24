import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='h-27 w-full bg-black/25 fixed top-0 z-10'>
            <div className='pt-4 h-14 w-full flex justify-center items-center'>
                <div className='flex gap-2'>
                    <div className='h-8 w-8 relative'>
                        <Image
                            src='/images/logo.png'
                            alt='Logo'
                            fill
                        />
                    </div>
                    <h3 className='font-modern-negra-demo text-3xl'>Fresh Drink</h3>
                </div>
            </div>

            <div className='h-13 w-full flex justify-center items-center  gap-6 text-sm font-semibold'>
                <a href="#">Drinks</a>
                <a href="#">About Us</a>
                <a href="#">The Art</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
