import React from 'react'
import Job from './Job'

const Jobs = () => {
  return (
    <div className='bg-gray-300 p-3'>
        <h1 className='text-center text-blue-700 m-3 font-bold text-2xl'>Browse Jobs</h1>

        <div className="flex justify-center flex-col md:flex-row md:flex-wrap">
            <Job />
            <Job />
            <Job /> 
            <Job />
            <Job />
            <Job /> 
            <Job />
            <Job />
            <Job /> 
        </div>
    </div>
  )
}

export default Jobs