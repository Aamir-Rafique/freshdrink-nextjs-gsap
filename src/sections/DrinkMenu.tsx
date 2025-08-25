import React from 'react'
import Image from 'next/image'
import { drinkImages } from '@/constants'

const DrinkMenu = () => {
    return (
        <section className='relative h-fit w-full px-5 bg-black'>

            {/* leafs images */}
            <div className='absolute h-35 w-25 top-0 right-0'>
                <Image
                    src='/images/drinkMenu-right-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'
                />
            </div>
            <div className='absolute h-35 w-25 bottom-0 left-0'>
                <Image
                    src='/images/drinkMenu-left-leaf.png'
                    alt='leaf-image'
                    fill
                    objectFit='cover'
                />
            </div>


            <div className='pt-60 pb-30 h-full w-full '>

                {/* Slider  */}
                {/* Drinks options */}
                <div className='grid grid-cols-2 gap-10'>
                    <div className='flex flex-col gap-8'>
                        <button className='text-2xl font-modern-negra-demo border-b'>Classic</button>
                        <button className='text-2xl font-modern-negra-demo border-b'>VIolet</button>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <button className='text-2xl font-modern-negra-demo border-b' >Raspberry</button>
                        <button className='text-2xl font-modern-negra-demo border-b' >Curacao</button>
                    </div>
                </div>

                {/* left and right arrows */}
                <div className='mt-20 flex justify-between'>
                    <div className='relative h-9 w-9'>
                        <Image
                            src='/images/right-arrow.png'
                            alt='leaf-image'
                            fill
                            objectFit='cover'
                        />
                    </div>
                    <div className='relative h-9 w-9'>
                        <Image
                            src='/images/left-arrow.png'
                            alt='leaf-image'
                            fill
                            objectFit='cover'
                        />
                    </div>
                </div>

                {/*  bg image - round gray/white - radial gradient*/}
                <div className="mb-20 absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-x-hidden">
                    <div className="w-full h-[300px] rounded-full bg-white/40 blur-[80px]" />
                </div>

                {/* drinks images */}
                <div className='relative h-90 w-90 mt-5'>
                    <Image
                        src='/images/drink1.png'
                        alt='Mask Image'
                        fill
                    />
                </div>

                {/* Recipe Highlight */}
                <div className='pt-20 pb-10 flex flex-col gap-6'>
                    <h4>Recipe for:</h4>
                    <h3 className='text-4xl font-modern-negra-demo text-yellow-200'>Classic</h3>
                    <h3 className='text-3xl font-dm-serif-text'>Simple Ingredients, Bold Flavor</h3>
                    <p>Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.</p>
                </div>
            </div>
        </section>
    )
}

export default DrinkMenu
