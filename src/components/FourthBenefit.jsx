import React from 'react'
import { externalLinkIcon, checkIcon, closeIcon } from '../assets/icons'
import { fourthBenefitImg } from '../assets/image'
import { fourthBenefit } from '../data/constant'
import LiItem from './molecule_components/LiItem'

const FourthBenefit = () => {
  return (
    <div className='flex flex-col-reverse md:flex-col-reverse items-center justify-between'>
      <div className="w-full max-w-xl md:w-1/2">
        <h2 className='max-w-xl mb-[15px] font-medium text-[32px] leading-[44px]'>Figma Social Feeds is Free For <span className="underline decoration-[2px] underline-offset-4 text-[#3B82F6]">Personal</span> or <span className="underline decoration-[2px] underline-offset-4 text-[#3B82F6]">Commercial</span> Use</h2>
        <p className="text-[#697B98] mb-[15px] leading-[30px] ">{fourthBenefit.subheadline}</p>
        <div className="flex flex-col gap-[10px] mb-[30px]">
          {fourthBenefit.offers.map(offer => {
            return (
              <LiItem key={offer.title} offer={offer} />
            )
          })}
        </div>
        <button className='px-[25px] mx-auto border-2 border-[#3B82F6] font-bold rounded-md py-[15px] text-[#3B82F6] flex gap-[15px]'>Read License
          <span className=""><img src={externalLinkIcon} alt="" /></span>
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img src={fourthBenefitImg} alt="" />
      </div>
    </div>
  )
}

export default FourthBenefit