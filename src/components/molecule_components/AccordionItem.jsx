import React from 'react'
import { ArrowRightIcon } from '../../assets/icons'

const AccordionItem = ({ title }) => {
    return (
        <div className='flex group py-[25px] px-[35px] rounded-[10px] max-w-xl hover:shadow-2xl hover:bg-[#3B82F6] hover:text-[#FFFFFF]'>
            <h4 className='flex text-[#193766] group-hover:text-[#FFFFFF] flex-1 font-bold text-[16px] leading-[30px]'>{title}</h4>
            <div className='flex items-center'>
                <ArrowRightIcon classProp='stroke-[#193766] group-hover:stroke-[#FFFFFF]' />
            </div>
        </div>
    )
}

export default AccordionItem