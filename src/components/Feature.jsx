import React from 'react'
import { featureSection } from '../data/constant'
import FeatureItem from './molecule_components/FeatureItem'

const Feature = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex w-full justify-center mb-[87px]">
                <h2 className='flex items-center font-medium text-[32px] max-w-xl text-center text-[#193766]'>{featureSection.headline}</h2>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-[30px]">
                {featureSection && featureSection.featureCards.map(feature => {
                    return <FeatureItem key={feature.title} title={feature.title} icon={feature.icon} description={feature.description} />
                })}
            </div>
        </div>
    )
}

export default Feature