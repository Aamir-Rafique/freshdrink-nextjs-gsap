'use client'
import React from 'react'
import Image from 'next/image'
import { checkStatementMd1, checkStatementMd2, checkStatements } from '@/constants'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Art = () => {

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top 0%';

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })

        maskTimeline
            .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
            .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut ' })
            .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' })
    }, [isMobile])


    return (
        <section id='art' className='relative h-fit w-full px-6 bg-black '>

            {/*  bg image - round gray/white - radial gradient*/}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-x-hidden">
                <div className="w-full h-[400px] md:w-1/3 md:h-[45%]  rounded-full bg-white/30 blur-[80px]" />
            </div>


            <div className='py-30 w-full '>

                <div className='relative flex flex-col items-center  '>
                    <h1 className='will-fade absolute text-8xl md:text-[17rem] md:text-[#505050] font-modern-negra-demo'>The ART</h1>
                    <div className='relative h-50 w-50 md:h-100 md:w-100 mt-5 md:mt-22'>

                    </div>

                    {/* masked image effect*/}
                    <div className="absolute  w-full md:w-[60vw] h-[50vh] md:h-[70vh] rounded-4xl overflow-hidden  top-0 md:top-[60%] md:-translate-y-1/2 left-1/2 -translate-x-1/2">
                        <img
                            src="/images/under-img.jpg"
                            alt="Drink"
                            className="masked-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full object-contain"
                        />
                    </div>

                    {/* check statements - screens > md  */}
                    <div className=' hidden absolute bottom-0 pb-10 md:flex  w-full px-10 justify-between'>
                        <div className='will-fade '>
                            {checkStatementMd1.map((item) => (
                                <div key={item.statement} className='flex  flex-col pb-4'>
                                    <div className='flex gap-1.5'>
                                        <img src="/images/check.png" alt="check"  width={20}/>
                                        <p className=''>{item.statement}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='will-fade '>
                            {checkStatementMd2.map((item) => (
                                <div key={item.statement} className='flex  flex-col pb-4'>
                                    <div className='flex gap-1.5'>
                                        <img src="/images/check.png" alt="check" width={20}/>
                                        <p className=''>{item.statement}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* check statements - screens < md  i.e. mobiles etc.*/}
                <div className='will-fade md:hidden'>
                    {checkStatements.map((item) => (
                        <div key={item.statement} className='flex  flex-col pb-4'>
                            <div className='flex gap-1.5'>
                                <img src="/images/check.png" alt="check" />
                                <p className='text'>{item.statement}</p>
                            </div>
                        </div>
                    ))}
                </div>



                {/* hidden text */}
                <div className='masked-container w-ful flex justify-center mt-10'>
                    <div className='text-center md:flex flex-col md:w-1/2'>
                        <h2 className="will-fade text-5xl font-modern-negra-demo">Sip-Worthy Perfection</h2>
                        <div id="masked-content" className='space-y-5 opacity-0'>
                            <h3 className='text-3xl md:text-5xl font-dm-serif-text'>Made with Craft - Poured with Passion</h3>
                            <p className='px-5 font-semibold md:font-normal md:text-lg'>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Art
