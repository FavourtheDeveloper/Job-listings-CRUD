import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Job = () => {
  return (
    <div>
        <Navbar />
        <div className='bg-gray-50 p-4 flex mb-8 pl-44'>
          <Link to={"/jobs"}><p className='text-sm text-blue-700'>Back to job listings</p></Link>
        </div>

        <section className='flex flex-col justify-around md:flex-row'>
          <div className='m-5'>
            <div className='bg-gray-200 p-4 mb-4'>
            <small>Full Time</small>
            <h1 className="text-2xl font-bold mt-1 mb-3">Senior React Developer</h1>
            <h4 className="text-red-600 font-bold text-xs">Noston, MA</h4>
            </div>

            <div className='bg-gray-200 p-4'>
            <small className='font-bold text-blue-700'>Job Description</small>
            <p className="text-xs font-bold mt-4 mb-3">We are seeking a talented Frontend Developer to join our team in Boston. The ideal candidate will have strong skills in HTML, CSS and Javascript, with experience with Mordern Javascript frameworks such as React or Angular</p>
            <h4 className="font-bold text-xs">Salary</h4>
            <h4 className="mt-2 font-bold text-xs">$70K -$80K/Year</h4>
            </div>
          </div>




          <div className='md:w-1/3 m-5'>
            <div className='bg-gray-200 p-4 mb-4'>
            <p className='font-bold pb-3'>Company Info</p>
            <h3 className="text-xl font-bold mt-1 mb-3">NewTek Solutions</h3>
            <p className="text-xs font-bold mt-4">We are seeking a talented Frontend Developer to join our team in Boston. The ideal candidate will have strong skills in HTML, CSS and Javascript, with experience with Mordern Javascript frameworks such as React or Angular</p>
            <button className=' bg-blue-700 text-white font-bold text-center m-auto w-full mb-1 mt-6 p-2'>Edit Job</button>
            <button className=' bg-red-700 text-white font-bold text-center m-auto w-full p-2'>Delete Job</button>
            
            </div>

          </div>
        </section>
    </div>
  )
}

export default Job