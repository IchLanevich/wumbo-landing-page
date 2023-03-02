import React from 'react'
import { heroBackground } from '../assets/background-vectors'
import { downloadIcon, playCircleIcon } from '../assets/icons'
import { heroSection } from '../data/constant'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row items-center relative'>
            <div className="w-full md:w-1/2">
                <h1 className='text-5xl md:text-[65px] max-w-lg mb-[20px] text-[#193766] leading-tight md:leading-[71px]'>
                    Beautiful Design For <span className="font-bold underline decoration-[3px] underline-offset-[8px]">Social Media</span> Content
                </h1>
                <p className='md:text-[#697B98] mb-[40px] max-w-lg text-base md:text-[22px] md:leading-[36px]'>{heroSection.subheadline}</p>
                <div className="flex flex-row justify-center md:justify-start md:flex-row gap-[15px]">
                    <button className='heroCtaOne flex gap-[8px] md:gap-[15px] px-[12px] py-[10px] md:px-[30px] md:py-[20px] bg-[#3B82F6] text-[#F4F7FF] rounded-md'>
                        <img src={downloadIcon} alt="" />
                        {heroSection.ctaOne}</button>
                    <button className='heroCtaOne flex gap-[8px] md:gap-[15px] px-[12px] py-[10px] md:px-[30px] md:py-[20px] text-[#3B82F6] bg-[#C6DBFF] rounded-md'>
                        <img src={playCircleIcon} alt="" />
                        {heroSection.ctaTwo}</button>
                </div>
            </div>
            <div className="w-full hidden md:flex md:w-1/2">
                <img className='md:h-[582px]' src={heroSection.img} alt="" />
            </div>
        </div>
    )
}

export default Hero