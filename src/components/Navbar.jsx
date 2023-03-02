import React from 'react'
import { wumboLogo } from '../assets/logo'
import { navLinks } from '../data/constant'

const Navbar = () => {
    return (
        <>
            <div className="logo flex items-center gap-[15px]">
                <img src={wumboLogo} className='w-10 h-10 md:w-[50px] md:h-[50px]' alt="" />
                <span className='font-bold text-lg text-[#193766]'>Wumbo</span>
            </div>
            <ul className='md:flex hidden justify-center w-full gap-[50px]'>
                {navLinks && navLinks.links.map(link => {
                    return <li className='' key={link}><a className='hover:font-bold' href={link.toLowerCase()}>{link}</a></li>
                })}
            </ul>
            <button className='text-[#3B82F6] text-lg font-bold py-[10px] px-[25px] hidden md:flex rounded-md bg-white'>{navLinks.ctaOne}</button>
            <button className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </>
    )
}

export default Navbar