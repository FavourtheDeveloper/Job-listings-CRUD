import React from 'react'
import Button from './Button'

const Type = () => {
  return (
    <div className='flex flex-col justify-around p-4 md:p-10 md:flex-row'>
        <div className='bg-cyan-300 p-3 m-2 md:w-1/2 py-5 rounded-xl'>
            <h2 className='text-2xl pb-1 font-bold'>For Developers</h2>
            <p className='mb-3 pb-2'>Browse our React Jobs and start your career today</p>
            <Button btnText={"Browse Jobs"} />
        </div>

        <div className='text-left bg-gray-300 m-2 md:w-1/2 p-3 py-5 rounded-xl'>
            <h2 className='text-2xl pb-1 font-bold'>For Employers</h2>
            <p className='mb-3 pb-2'>List your job to get the perfect developer for you</p>
            <Button btnText={"Browse Jobs"} btnColor={"blue"} />
        </div>
    </div>
  )
}

export default Type