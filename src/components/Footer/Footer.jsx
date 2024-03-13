import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center bg-black text-yellow-400 py-20 text-center justify-between space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4'>
    <div className='lg:px-10'>
           <h2 className='font-bold lg:text-2xl'>FEDERALIST PIG</h2>
     </div>
    <div className='lg:px-6 py-4 lg:py-0'>
    <ul className='flex flex-col items-center space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0 font-bold'>
         <li><a className='hover:underline decoration-yellow-400' href="#">AWARDS</a></li>
         <li><a className='hover:underline decoration-yellow-400' href="#">CAREERS</a></li>
         <li><a className='hover:underline decoration-yellow-400' href="https://wa.me/+2349078875406">CONTACT</a></li>
        <li><a className='hover:underline decoration-yellow-400' href="#">ABOUT</a></li>
         <li><a className='hover:underline decoration-yellow-400' href="#">TERMS</a></li>
         <li><a className='hover:underline decoration-yellow-400' href="#">PRIVACY</a></li>
         <li><a className='border-2 border-yellow-400 px-4 py-2 hover:text-black hover:bg-yellow-400' href="#">EMAIL SIGN UP</a></li>    
      </ul>
    </div>   
    </div>

  )
}

export default Footer
