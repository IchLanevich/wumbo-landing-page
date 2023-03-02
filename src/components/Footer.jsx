import React from 'react'
import { wumboLogo } from '../assets/logo'
import { footer } from '../data/constant'

const Footer = () => {
    return (
        <footer className='bg-[#193766] flex flex-col justify-between pb-[138px]'>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col gap-[15px] max-w-xl">
                    <img src={wumboLogo} className='w-[50px] h-[50px]' alt="" />
                    <p className='font-bold text-lg text-[#FFFFFFCC]'>Wumbo</p>
                    <p className='text-[#FFFFFFCC] leading-[28px]'>{footer.headline}</p>
                </div>
                <div className="flex mt-16 md:mt-0 w-full justify-evenly">
                    {footer.links.map(link => {
                        return (
                            <div key={link.title} className='flex flex-col'>
                                <h6 className="mb-[20px] text-[#FFFFFF99] font-bold">{link.title}</h6>
                                <ul className='flex flex-col gap-[8px]'>
                                    {link.links.map(link => {
                                        return (
                                            <li key={link} className="text-[#FFFFFFCC]">{link}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bg-[#FFFFFF0D] w-full h-[1px] mt-[62px] mb-[45px]"></div>
            <p className='text-[#FFFFFF66] text-center md:text-left font-bold text-sm'>{footer.copyright}</p>
        </footer>
    )
}

export default Footer