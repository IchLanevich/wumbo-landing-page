import React from 'react'

const BenefitItem = ({ title, description }) => {
    return (
        <div className='flex'>
            <div className="flex gap-[16px]">
                <div className="w-[15px] h-[15px] bg-[#3B82F6] mt-1"></div>
                <p><span className="text-[#3B82F6] font-bold">{title}: </span>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default BenefitItem