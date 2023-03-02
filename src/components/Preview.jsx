import React from 'react'
import { previewSection } from '../data/constant'

const Preview = () => {
    return (
        <div className='flex flex-col'>
            <div className="w-full flex flex-col gap-[15px] items-center mb-[120px]">
                <p className='w-fit px-[20px] py-[10px] text-[#3B82F6] bg-[#3B82F61A] rounded-full'>{previewSection.title}</p>
                <h2 className='leading-[44px] max-w-3xl text-center font-medium text-[32px] text-white'>Social Feeds is a <span className="font-bold underline decoration-[2px] underline-offset-4">Figma design template</span>, and everyone can use Figma!</h2>
            </div>
            <div className="flex flex-col w-full items-center justify-center">
                <p className='text-[#FFFFFFCC] font-medium leading-[30px] -mb-6 max-w-3xl text-center'>{previewSection.subheadline}</p>
                <div className="">
                    <img className='' src={previewSection.img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Preview