import React from 'react'
import { ctaSectionVector } from '../assets/background-vectors'
import { downloadIcon, twitterIcon } from '../assets/icons'
import { ctaSection } from '../data/constant'

const CTASection = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex flex-col justify-center items-center gap-[15px]">
                <div className="w-full flex justify-center">
                    <p className='w-fit px-[20px] py-[10px] font-bold tracking-[0.1em] text-[#3B82F6] bg-[#3B82F61A] rounded-full'>{ctaSection.title}</p>
                </div>
                <h2 className='leading-[44px] max-w-3xl text-center font-medium text-[32px] text-[#193766]'>Download Figma <span className="font-bold text-[#3B82F6] underline decoration-[2px] underline-offset-4">Social Feeds</span> Now</h2>
                <div className="max-w-xl">
                    <p className='text-[#697B98] leading-[30px] text-center'>{ctaSection.subheadline}</p>
                </div>
            </div>
            <div className="flex w-full justify-center mt-[40px] gap-[15px]  relative">
                <button className="bg-[#3B82F6] text-white flex gap-[15px] items-center justify-center font-bold rounded-md px-[12px] py-[10px] md:px-[30px] md:py-[20px]">
                    <img src={downloadIcon} alt="" />
                    Download Now
                </button>
                <div className="w-fit relative">
                    <button className="bg-[#1DA1F2] relative ctaSectionBtn text-white flex gap-[15px] items-center justify-center font-bold rounded-md px-[12px] py-[10px] md:px-[30px] md:py-[20px]">
                        Say Thanks
                        <img src={twitterIcon} alt="" />
                    </button>
                    <div className="absolute right-0 md:-right-[110px] md:-bottom-[70px]">
                        <img src={ctaSectionVector} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTASection