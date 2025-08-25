import React from 'react'
import Image from 'next/image'
import { checkStatementMd1, checkStatementMd2, checkStatements } from '@/constants'

const Art = () => {
    return (
        <section className='relative h-fit w-full px-6  bg-black '>

            {/*  bg image - round gray/white - radial gradient*/}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-x-hidden">
                <div className="w-full h-[400px] md:w-1/3 md:h-[25rem] rounded-full bg-white/40 blur-[80px]" />
            </div>


            <div className='py-30 w-full '>
                {/* title + mask image */}
                <div className='relative flex flex-col items-center mb-15 '>
                    <h1 className='absolute text-8xl md:text-[17rem] md:text-[#505050] font-modern-negra-demo'>The ART</h1>
                    <div className='relative h-50 w-50 md:h-100 md:w-100 mt-5 md:mt-22'>
                        <Image
                            src='/images/mask-img.png'
                            alt='Mask Image'
                            fill
                        />
                    </div>

                    {/* check statements - screens > md  */}
                    <div className='hidden absolute bottom-0 pb-10 md:flex  w-full px-6 justify-between'>
                        <div className=' '>
                            {checkStatementMd1.map((item) => (
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
                        <div className=' '>
                            {checkStatementMd2.map((item) => (
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

                </div>

                {/* check statements - screens < md  i.e. mobiles etc.*/}
                <div className='md:hidden'>
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


                {/* masked-hidden image */}

                {/* hidden text */}
                <div className='w-ful flex justify-center'>
                    <div className='text-center md:flex flex-col md:gap-4.5 md:w-1/2'>
                        <h3 className='text-3xl md:text-5xl font-dm-serif-text'>Made with Craft - Poured with Passion</h3>
                        <p className='px-5 font-semibold md:font-normal md:text-lg'>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Art
