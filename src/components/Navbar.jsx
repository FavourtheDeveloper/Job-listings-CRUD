import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between bg-blue-700 p-10'>
        <h3 className='text-5xl font-bold'>Job Listings</h3>

        <div className="links flex flex-row space-x-5 text-2xl pt-2 text-yellow-300">
            <a href="">Home</a>
            <a href="">Jobs</a>
            <a href="">Add Jobs</a>
        </div>
    </nav>
  )
}

export default Navbar