import React from 'react'
import Image from 'next/image'
import { checkStatements } from '@/constants'

const Art = () => {
    return (
        <section className='h-fit w-full px-6  bg-black '>

            {/*  bg image - round gray*/}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-x-hidden">
                <div className="w-full h-[400px] rounded-full bg-white/40 blur-[80px]" />
            </div>


            <div className='pt-30 pb-30 w-full '>
                {/* title + mask image */}
                <div className='relative flex flex-col items-center mb-15'>
                    <h1 className='absolute text-8xl font-modern-negra-demo'>The ART</h1>
                    <div className='relative h-50 w-50 mt-5'>
                        <Image
                            src='/images/mask-img.png'
                            alt='Mask Image'
                            fill
                        />
                    </div>
                </div>

                {/* check statements */}
                <div className=''>
                    {checkStatements.map((item) => (
                        <div key={item.statement} className='flex  flex-col pb-4'>
                            <div className='flex gap-1.5'>
                                <Image
                                    src='/images/check.png'
                                    alt='Check'
                                    height={5}
                                    width={22}
                                />
                                <p className='text'>{item.statement}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Art
