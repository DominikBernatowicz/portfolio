import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className='w-full pt-20 pb-10' id='contact'>
            <div className='w-full absolute left-0 -bottom-72'>
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-30"
                />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Would you like to <span className='text-purple'>start a project</span>  together?
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>
                    Reach out to me today and  let's discuss how I can help your goals.
                </p>
                <a href="mailto:bernatowicz.dom@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position={'right'}
                    />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light md:pb-0 pb-5'>Copyright © 2024 Bercode</p>

                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map(({ id, img, href }) =>
                        <a
                            key={id}
                            href={href}
                            target={"_blank"}
                        >
                            <div key={id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                                <img src={img} alt={img} width={20} height={20} />
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer