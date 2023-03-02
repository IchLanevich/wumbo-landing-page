import React from 'react'
import { thirdBenefit } from '../data/constant'
import AccordionItem from './molecule_components/AccordionItem'

const ThirdBenefit = () => {
  return (
    <div className='flex flex-col-reverse items-center justify-evenly md:flex-row'>
      <div className="w-full md:w-1/2 max-w-xl">
        <h2 className='mb-[15px] text-[#193766] text-[32px] font-medium leading-[44px]'>Optimized For Posts on <span className="font-bold underline decoration-[3px] underline-offset-4">All Social Media</span>: Facebook, Instagram & Twitter</h2>
        <p className='mb-[40px] text-[#697B98] leading-[30px]'>{thirdBenefit.subheadline}</p>
        <div className="">
          {thirdBenefit && thirdBenefit.accordions.map(accordion => {
              return <AccordionItem key={accordion.title} title={accordion.title} />
          })}
        </div>
      </div>
      <div className="w-full flex justify-end md:w-1/2">
        <img src={thirdBenefit.img} alt="" />
      </div>
    </div>
  )
}

export default ThirdBenefit