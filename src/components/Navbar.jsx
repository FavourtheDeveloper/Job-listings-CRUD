import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between p-5 border-white border-b-2'>
        <h3 className='text-4xl font-bold text-white'>Job Listings</h3>

        <div className="links flex flex-row space-x-5 text-l p-2 text-yellow-300">
            <a href="">Home</a>
            <a href="">Jobs</a>
            <Button btnText={"Add Job"} />
        </div>
    </nav>
  )
}

export default Navbar