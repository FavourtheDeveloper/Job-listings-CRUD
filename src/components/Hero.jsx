import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='bg-blue-700'>
        <Navbar />

        <div className='text-white text-center p-16'>
            <h1 className='text-5xl font-bold pb-1.5'>Become a React Dev</h1> 
            <p>Find the React job that fits your skills and needs</p>
        </div>
    </div>
  )
}

export default Hero