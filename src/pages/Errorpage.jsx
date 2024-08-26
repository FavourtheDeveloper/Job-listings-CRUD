import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Errorpage = () => {
  return (
    <div>
        <Navbar />
        <div className='text-center p-12 md:p-44 bg-red-900'>
            <h1 className='text-3xl text-white font-bold'>Oops! <br /> You stumbled on a 404 Page</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Errorpage