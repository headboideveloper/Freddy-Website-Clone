import React from 'react'

const Navbar = () => {
  return (
    <div className='items-center text-center h-10 mb-4'>
        <ul className='hidden items-center text-center w-full lg:flex lg:space-x-5 lg:px-64'>
            <li><a className='font-bold hover:underline decoration-black' href="#">MENUS</a></li>
            <li><a className='font-bold hover:underline decoration-black' href="#">CATERING</a></li>
            <li><a className='font-bold hover:underline decoration-black' href="#">LOCATIONS</a></li>
            <li><a className='font-bold hover:underline decoration-black' href="#">BBQ BOX</a></li>
            <li><a className='font-bold hover:underline decoration-black' href="#">SUPPER CLUB</a></li>
            <li><a className='font-bold hover:underline decoration-black' href="#">GIFT CARDS</a></li>
            <a className='font-bold bg-transparent border-2 border-black w-[150px] h-[30px] text-center hover:text-yellow-400 hover:bg-black' href="#">ORDER ONLINE</a>
        </ul>
    </div>
  )
}

export default Navbar