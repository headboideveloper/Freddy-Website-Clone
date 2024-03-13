import React from 'react'
import meal from '../assets/aaa.png'
import one from '../assets/onne.PNG'


const Delicacies = () => {
  return (
    <div className='mt-[-25px]'>
        <h2 className='text-center mb-12 bg-yellow-400 rounded-full pt-16 max-w-xs container mx-auto px-4 font-bold tracking-widest pb-4 text-[20px] lg:text-3xl '>MEALS</h2>
    <div className='text-center items-center mb-16 justify-evenly flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4'>
        <div>
            <img className='w-[300px] ml-10 lg:w-[550px] rounded-lg' src={meal} alt="first meal" />
            <div className='py-4 space-y-4 text-center items-center w-[400px] lg:ml-20'>
            <h1 className='font-extrabold text-2xl'>SPECIALS</h1>
            <p className='text-center items-center w-[300px] ml-10 lg:w-full font-semibold'>Pitmaster Rob is always up to something! Check out our rotating
specialty sandwiches and limited drops. Dino Beef Short Rib Combo
for 2 is available every Monday & Tuesday.</p>
                <div className='py-4'> 
                <a className='border-2 border-black px-4 py-2 font-bold bg-transparent hover:text-yellow-400 hover:bg-black' href="#">SEE THE SPECIALS</a>
            </div>
            </div>
        </div>
        <div>
        <img className='w-[300px] ml-10 lg:w-[550px] rounded-lg' src={one} alt="second meal" />
        <div className='py-4 space-y-4 text-center items-center w-[400px] lg:ml-20'>
            <h1 className='font-extrabold text-2xl'>SUPPER CLUB</h1>
            <p className='text-center items-center w-[300px] ml-10 lg:w-full font-semibold'>Once a month, Chef & Pitmaster Rob Sonderman presents a new 4-
course dine-in experience that goes beyond our regular offerings and
puts a smoky spin on gourmet cuisine.</p>
                <div className='py-4'> 
                <a className='border-2 border-black px-4 py-2 font-bold bg-transparent hover:text-yellow-400 hover:bg-black' href="#">GET YOUR TICKETS</a>
            </div>
            </div>
        </div>
   </div>
    </div>
  )
}

export default Delicacies

{/*     <p className='text-sm font-semibold'>Pitmaster Rob is always up to something! Check out our rotating specialty sandwiches and limited drops. Dino Beef Short Rib Combo for 2 is available every Monday & Tuesday.</p>
            <div className='space-y-3'> 
                <a className='border-2 border-black px-4 py-2 bg-transparent' href="#">SEE THE SPECIALS</a>
            </div>
            </div> */}