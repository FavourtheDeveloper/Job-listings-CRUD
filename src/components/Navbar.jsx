import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-around p-5 bg-blue-700 border-white border-b-2'>
        <h3 className='text-4xl font-bold text-white'>Job Listings</h3>

        <div className="links flex flex-row space-x-5 text-l p-2 text-yellow-300">
            <Link to={"/"}>Home</Link>
            <Link to={"/jobs"}>Jobs</Link>
            <Link><Button btnText={"Add Job"} dest={"/addjob"} /></Link>
        </div>
    </nav>
  )
}

export default Navbar