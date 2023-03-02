import React from 'react'
import { checkIcon, closeIcon } from '../../assets/icons'

const LiItem = ({offer}) => {
  return (
      <div className="flex items-center gap-[15px]">
        <div className="icon">
          <img src={offer.listStyle === 'check' ? checkIcon : closeIcon} alt="" />
        </div>
        <p className='text-[#193766] leading-[30px]'>{offer.title}</p>
      </div>
  )
}

export default LiItem