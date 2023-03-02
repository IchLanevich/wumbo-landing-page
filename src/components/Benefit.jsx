import React from 'react'
import { benefitSection } from '../data/constant'
import BenefitItem from './molecule_components/BenefitItem'

const Benefit = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
            <div className="flex flex-col gap-[15px] w-full md:w-1/2">
                <div className="max-w-xl flex flex-col">
                    <h2 className='text-[#193766] font-medium text-[32px] leading-[44px] max-w-xl'>There are <span className="font-bold underline decoration-[3px] underline-offset-4">80+ Pre-Designed</span> Templates Ready to Use</h2>
                    <p className='text-[#697B98] leading-[30px]'>{benefitSection.description}</p>
                    <div className="benefits">
                        {benefitSection && benefitSection.benefits.map(benefit => {
                            return <BenefitItem key={benefit.title} title={benefit.title} description={benefit.description} />
                        })}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
                <img src={benefitSection.img} alt="" />
            </div>
        </div>
    )
}

export default Benefit