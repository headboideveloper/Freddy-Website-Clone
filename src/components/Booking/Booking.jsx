import React from 'react'

const Booking = () => {
  return (
    <div className='w-full flex flex-col items-center bg-yellow-400 text-black py-20 text-center justify-between space-y-4'>
        <div className='text-black'>
            <h2 className='font-bold text-3xl md:text-4xl mb-8'>BOOK MEAL</h2>
            <p className='font-semibold italic md:text-xl'>Contact Us...</p>
        </div>
        <div className='w-[500px]'>
            <form action="" className='space-y-10 mt-10'>
                <div>
                    <label htmlFor="name" className='font-semibold'>Full Name</label>
                    <input type="text" id='name' placeholder='Your Name' className='w-full bg-black text-center text-white p-3 rounded-lg border-black' />
                </div>
                <div>
                    <label htmlFor="email" className='font-semibold'>Email</label>
                    <input type="text" id='email' placeholder='Your Email' className='w-full bg-black text-center text-white p-3 rounded-lg border-black' />
                </div>
                <div>
                    <label htmlFor="message" className='font-semibold'>Message</label>
                    <textarea type="text" id='name' placeholder='Your Message' className='w-full bg-black text-center text-white p-3 rounded-lg border-black' />
                </div>
                <button type="submit" class="w-full p-3 text-sm font-bold tracking-widest border-2 border-black rounded-lg w-[200px] uppercase rounded hover:bg-black hover:text-yellow-400">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Booking