import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'


const Clients = () => {
    return (
        <div className='py-20' id='testimonials'>
            <h1 className='heading'>
                Kind words from {' '}
                <span className='text-purple'>
                    satisfied clients
                </span>
            </h1>
            <div className='flex flex-col items-center lg:my-10'>
                {/* <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />

                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-10 pt-5'>
                    {companies.map(({ id, name, img, nameImg }) =>
                        <div
                            key={id}
                            className='flex md:max-w-60 max-w-40 gap-3 items-center'
                        >
                            <img
                                src={img}
                                alt={name}
                                className='md:w-20 w-11'
                            />
                            <h2 className='font-bold text-xl md:text-3xl text-center'>
                                {name}
                            </h2>
                        </div>
                    )}
                </div> */}
            </div>
        </div>
    )
}

export default Clients