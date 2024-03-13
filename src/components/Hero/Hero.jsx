import React from 'react'
import banner from '../assets/meals-6.jpg'

const Hero = () => {
  return (
    <div className='h-[550px] w-full bg-cover bg-center shadow-image-dim' style={{backgroundImage: `url(${banner})`}}>
        <div className='items-center py-[200px] lg:py-[270px] text-center h-40'>
          <h2 className='text-white text-3xl font-extrabold lg:text-[60px]'>DINING ROOM NOW OPEN!</h2>
          <p className='text-white font-semibold w-[350px] lg:w-full container mx-auto py-4'>Join us in our expanded, newly renovated space at our original Adams Morgan location. We've got 50 new indoor seats, beer on draﬅ and a whole lot of BBQ. Text us at 202-335-5418 to become part of the Fed Pig Community and get invites to special events & tastings.</p>
         <div className='py-4'>
         <a className='border-2 border-yellow-600 text-yellow-400 w-[200px] h-[20px] px-4 py-2 hover:bg-black hover:text-yellow-600 font-semibold' href="#">ORDER PICKUP</a>
        </div>
        </div>
        </div>
  )
}

export default Hero