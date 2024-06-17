import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3DPin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className='text-purple'>
                    recent projects
                </span>
            </h1>
            <div className='flex flex-wrap items-center justify-center mt-10 gap-16'>
                {projects.map(({ id, title, des, img, iconLists, link }) =>
                    <div
                        key={id}
                        className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
                    >
                        <PinContainer
                            title={link}
                            href={link}
                        >
                            <a
                                href={link}
                                target={"_blank"}
                            >
                                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#001322]'>
                                        <img
                                            src='/bg.png'
                                            alt='bg-img'
                                        />
                                    </div>
                                    <img
                                        src={img}
                                        alt={title}
                                        className='z-10 absolute rotate-6 rounded-3xl -bottom-[10%] size-[80%]'
                                    />
                                </div>

                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                    {title}
                                </h1>

                                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                    {des}
                                </p>

                                <div className='flex items-center justify-between mt-7 mb-3'>
                                    <div className='flex items-center mt-7 mb-3'>
                                        {iconLists.map((icon, index) =>
                                            <div
                                                key={icon}
                                                className='flex items-center justify-center border border-white/[0.2] rounded-full bg-black h-8 w-8 lg:h-10 lg:w-10'
                                                style={{ transform: `translateX(-${5 * index * 2}px)` }}
                                            >
                                                <img
                                                    src={icon}
                                                    alt={icon}
                                                    className='p-2'
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className='flex justify-center items-center'>
                                        <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                            Check GitHub
                                        </p>

                                        <FaLocationArrow
                                            className='ms-3'
                                            color='#CBACF9'
                                        />
                                    </div>
                                </div>
                            </a>
                        </PinContainer>
                    </div>
                )}
            </div >
        </div >
    )
}

export default RecentProjects