import { aboutImages } from '@/constants'
import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
    return (
        <section className='px-10 bg-black'>

            <div className='pt-30 pb-30 flex flex-col gap-20'>
                <div className='bg-red-200 flex flex-col justify-between items-start gap-6'>
                    <a href="#" className='px-4 py-2 mb-2    text-sm font-semibold rounded-3xl bg-white text-black'>Best Drinks</a>
                    <h2 className='text-5xl font-modern-negra-demo' >Where every detail matters — from muddle to garnish</h2>
                    <p className='text-xl'>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                    <h3 className='text-xl font-bold'><span className='text-5xl text-yellow-200'>4.5</span>/5</h3>
                    <p className='text-sm'>More than 12000+ customers</p>
                </div>

                {/* images */}

                <div className='w-full flex flex-col gap-5'>
                    {aboutImages.map((item) => (
                        <div key={item.image} className='h-72 w-full relative'>
                            <Image
                                src={item.image}
                                alt="about-images"
                                fill
                                objectFit='cover'
                                className='rounded-3xl opacity-70 '
                            />
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default AboutUs
