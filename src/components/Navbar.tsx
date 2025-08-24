import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='h-5 w-full bg-amber-200 '>
      <div className='h-4 w- bg-red-400'>
        <div className=''>
            {/* <Image
            src='/images/logo.png'

            /> */}
        </div>
        <h3>Fresh Drink</h3>
      </div>

      <div>
        <a href="#">Drinks</a>
        <a href="#">About Us</a>
        <a href="#">The Art</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
