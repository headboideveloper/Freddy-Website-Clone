import React from 'react'
import meal from '../assets/meals-1.jpg'

const Menu = () => {
  return (
    <div className='flex flex-col items-center text-center justify-between mb-20 space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6'>
        <div className='items-center text-center w-[600px] space-y-4 px-16'>
            <h1 className='text-3xl font-bold'>MENU</h1>
            <p className='px-4 text-center items-center lg:ml-0 lg:w-full w-[300px] ml-20 font-semibold'>We’re craft American BBQ made in-house
(always). Get traditions and favorites from all
over the world — all on one plate. Federalist
Pig is a two-time Michelin Bib Gourmand
winner serving up DC’s best blend of the
classic BBQ traditions you’d find at the most
elite cookout and the elevated flavors you’d
find at a true fine dining spot..</p>

<p className='text-center items-center font-semibold px-4  lg:ml-0 lg:w-full w-[300px] ml-20'>Everything we serve is house-made and
prepared by a staff that cares. You could
spend a lifetime sampling every flavor
combination at Federalist Pig, and we hope
you do.</p>

<div className='py-4'> 
                <a className='border-2 border-black px-4 py-2 font-bold bg-transparent hover:text-yellow-400 hover:bg-black' href="#">PEEP THE MENU</a>
            </div>
        </div>
        <div className='bg-yellow-500 items-center text-center w-full container mx-auto overflow-hidden'>
            <img
            className='w-[300px] ml-10 lg:w-[850px] py-8 lg:h-[500px] lg:ml-24' 
            src={meal} 
            alt="meal" />
        </div>
    </div>
  )
}

export default Menu