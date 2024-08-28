import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Errorpage = () => {
  return (
    <div>
        <Navbar />
        <div className='text-center md:p-44 bg-red-900'>
            <h1 className='text-3xl p-4 text-white font-bold'>Oops! <br /> You stumbled on a 404 Page</h1>
            <Button dest={"/"} btnColor={'black'} btnText={"Go to the Home Page"}  />
        </div>
        <Footer />
    </div>
  )
}

export default Errorpage