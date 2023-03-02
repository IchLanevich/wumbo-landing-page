import { useState } from 'react'
import { benefitBackground, ctaSectionVector, featureBackground, fourthBenefitBg, heroBackground, secondBenefitBackground, thirdBenefitBg } from './assets/background-vectors'
import Benefit from './components/Benefit'
import CTASection from './components/CTASection'
import Feature from './components/Feature'
import Footer from './components/Footer'
import FourthBenefit from './components/FourthBenefit'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Preview from './components/Preview'
import SecondBenefit from './components/SecondBenefit'
import ThirdBenefit from './components/ThirdBenefit'

function App() {

  return (
    <div className="App overflow-hidden md:px-0">

      <div className="container mx-auto px-2 mb-[100px]">
        <img src={heroBackground} className='absolute inset-y-0 -z-10 right-0' alt="" />
        <nav className='mt-[30px] md:mt-[66px] flex items-center justify-between'>
          <Navbar />
        </nav>

        <section className="mt-[65px] max-h-[582px]">
          <Hero />
        </section>
      </div>

      <section className='py-[75px] px-2 md:py-[100px] relative'>
        <div className="absolute inset-y-0 left-0 -z-10">
          <img src={featureBackground} alt="" />
        </div>
        <div className="container mx-auto">
          <Feature />
        </div>
      </section>

      <section className="py-[75px] px-2 md:py-[100px] relative ">
        <div className="absolute top-[50px] bottom-0 -right-[10px] -z-10">
          <img src={benefitBackground} alt="" />
        </div>

        <div className="container mx-auto">
          <Benefit />
        </div>
      </section>

      <section className="py-[75px] px-2 md:py-[100px] relative ">
        <div className="absolute top-[150px] -left-[10px] -z-10">
          <img src={secondBenefitBackground} alt="" />
        </div>

        <div className="container mx-auto">
          <SecondBenefit />
        </div>
      </section>

      <section className="py-[75px] px-2 md:py-[100px] relative">
        <div className="absolute inset-0 -z-10 bg-[#193766] w-screen left-0 -skew-y-3"></div>
        <div className="container mx-auto">
          <Preview />
        </div>
      </section>

      <section className="py-[75px] px-2 md:py-[100px] relative ">
        <div className="absolute top-[168px] -right-[10px] -z-10">
          <img src={thirdBenefitBg} alt="" />
        </div>

        <div className="container mx-auto">
          <ThirdBenefit />
        </div>
      </section>

      <section className="py-[75px] px-2 md:py-[100px] relative ">
        <div className="absolute top-[168px] -left-[10px] -z-10">
          <img src={fourthBenefitBg} alt="" />
        </div>

        <div className="container mx-auto">
          <FourthBenefit />
        </div>
      </section>

      <section className="pt-[100px] px-2 pb-[200px] relative ">
        <div className="container mx-auto">
          <CTASection />
        </div>
      </section>

      <section className="pt-[100px] px-2 bg-[#193766] relative after:absolute after:w-full after:h-full after:bg-[#193766] after:-z-10 after:bottom-0 after:transform after:-skew-y-3 after:origin-bottom-left">
        <div className="container mx-auto">
          <Footer />
        </div>
      </section>
    </div>
  )
}

export default App
