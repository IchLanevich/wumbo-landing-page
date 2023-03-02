import React from 'react'

const FeatureItem = ({title, icon, description}) => {
  return (
    <div className='group hover:bg-[#193766] p-[50px] rounded-[10px] h-[365px] w-full'>
        <div className="p-[10px] mb-[20px] bg-[#193766] w-fit rounded-md group-hover:bg-[#FFFFFF14]">
            <img src={icon} alt="" />
        </div>
        <h5 className='mb-[10px] text-[#193766] group-hover:text-[#FFFFFF] font-bold text-[24px] leading-[44px]'>{title}</h5>
        <p className='text-[#697B98] group-hover:text-[#FFFFFFCC]'>{description}</p>
    </div>
  )
}

export default FeatureItem