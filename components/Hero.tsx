import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {

  return (
    <div className='pt-28'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      <div className='flex justify-center items-center my-20 z-10 '>
        <div className='lg:w-[40%] md:w-[55%] w-[70%]'>
          <TextGenerateEffect
            className='text-[40px] text-white md:text-5xl lg:text-6xl mt-8 mr-[10%] text-left'
            words='"You name it,'
          />
          <TextGenerateEffect
            className='text-[40px] text-purple md:text-5xl lg:text-6xl mb-8 text-right'
            words='I code it"'
          />
        </div>
      </div>

      <div className='flex justify-center relative z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

          <p className='text-center md:tracking-wider md:mb-10 mb-4 text-sm md:text-lgl'>
            Turning your concepts with care about details
          </p>

          <p className='text-center md:tracking-wider md:mb-6 mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Dominik, a Front-end Developer
          </p>

          <a href="#about">
            <MagicButton
              title='Show my work'
              icon={<FaLocationArrow />}
              position={'right'}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero