import React from 'react'
import Image from 'next/image'
import { socialImages } from '@/constants'

const Footer = () => {
    return (
        <footer className=' py-10 h-fit w-full bg-black    '>

            <div className='relative w-full flex flex-col justify-between items-center gap-2'>
                {/* leafs images */}
                <div className='absolute h-35 w-25 bottom-0 left-0'>
                    <Image
                        src='/images/contact-bottom-left-leaf.png'
                        alt='leaf-image'
                        fill
                        objectFit='cover'
                    />
                </div>

                {/* Social links */}
                <h2 className=''>SOCIALS</h2>
                <div className='h-fit w-1/2 flex justify-center gap-2'>
                    {socialImages.map((item) => (
                        <div key={item.image} className='h-8 w-8 relative'>
                            <Image
                                src={item.image}
                                alt='Social Image'
                                fill
                                objectFit='cover'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
