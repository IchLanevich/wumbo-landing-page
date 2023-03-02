import React from 'react'
import { secondBenefitSection } from '../data/constant'
import BenefitItem from './molecule_components/BenefitItem'

const SecondBenefit = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row-reverse gap-[30px] items-center'>
            <div className="flex flex-col justify-start items-center w-full md:w-1/2">
                <div className="max-w-xl flex flex-col gap-[15px]">
                    <h2 className='text-[#193766] font-medium text-[32px] leading-[44px] max-w-xl'>{secondBenefitSection.headline}</h2>
                    <p className='text-[#697B98] leading-[30px]'>{secondBenefitSection.subheadline}</p>
                    <div className="benefits">
                        {secondBenefitSection && secondBenefitSection.benefits.map(benefit => {
                            return <BenefitItem key={benefit.title} title={benefit.title} description={benefit.description} />
                        })}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
                <img src={secondBenefitSection.img} alt="" />
            </div>
        </div>
    )
}

export default SecondBenefit