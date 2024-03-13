import React from 'react'
import meal from '../assets/this.jpg'

const Catering = () => {
  return (
    <div className='flex flex-col-reverse items-center text-center justify-between mb-20 space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6'>
       
        <div className='bg-yellow-500 items-center text-center w-full container mx-auto'>
            <img
            className='w-[300px] ml-10 md:ml-[420px] lg:ml-10 lg:w-[900px] py-8  lg:h-[500px] lg:mr-40' 
            src={meal} 
            alt="meal" />
        </div>

        <div className='items-center text-center w-[600px] lg:w-[800px] space-y-4 py-6 px-16'>
            <h1 className='text-3xl font-bold'>CATERING</h1>
            <p className='px-4 text-center items-center font-semibold lg:w-full w-[300px] lg:ml-0 ml-20'>We'll bring the 'que to you! From backyard bbq's, holiday celebrations or hundred-person events, our Barbecrew and catering truck can do it all. Serving though􀅁ully crafted sides, vegan and vegetarian options, to the BBQ classics from all the regions of America, and all the corners of the globe — it’s all here.</p>


<div className='py-4'> 
                <a className='border-2 border-black px-4 py-2 font-bold bg-transparent hover:text-yellow-400 hover:bg-black' href="#">EXPLORE OUR CATERING CAPABILITIES</a>
            </div>
        </div>
    </div>
  )
}

export default Catering