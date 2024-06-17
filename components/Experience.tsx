import { companies, workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  return (
    <div className='py-20' id='expirience'>
      <h1 className='heading'>
        My
        <span className='text-purple'> work experience</span>
      </h1>

      <div className='flex flex-col items-center mt-10'>
        {workExperience.map(({ id, title, desc, thumbnail }) => (
          <Button
            key={id}
            duration={Math.floor(Math.random() * 10000) + 5000}
            borderRadius='1.75rem'
            className='flex-1 text-white dark:border-slate-800'
          >
            <div className='flex md:flex-row flex-col items-center justify-center p-3 py6 md:p-5 lg:p-10 gap-2'>
              <img
                src={thumbnail}
                alt={title}
                className='lg:w-32 md:w-20 w-16'
              />
              <div className='lh:ms-5'>
                <h1 className='md:text-start text-center text-xl md:text-2xl font-bold'>
                  {title}
                </h1>
                <p className='md:text-start text-center text-white-100 mt-3 font-semibold'>
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-10 mt-5 pt-5'>
          {companies.map(({ id, name, img, nameImg }) =>
            <div
              key={id}
              className='flex md:max-w-60 max-w-40 gap-3 items-center'
            >
              <img
                src={img}
                alt={nameImg}
                className='md:w-20 w-11'
              />
              <h2 className='font-bold text-xl md:text-3xl text-center'>
                {name}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Experience