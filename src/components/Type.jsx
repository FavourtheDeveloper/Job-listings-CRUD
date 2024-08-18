import React from 'react'
import Button from './Button'

const Type = () => {
  return (
    <div className='flex p-16 p-46'>
        <div className='text-left mr-auto bg-cyan-500 p-3 pr-40 py-5 rounded-xl'>
            <h2 className='text-2xl font-bold'>For Developers</h2>
            <p className='mb-3'>Browse our React Jobs and start your career today</p>
            <Button btnText={"Browse Jobs"} />
        </div>

        <div className='text-left bg-stone-500 p-3 pr-40 py-5 rounded-xl'>
            <h2 className='text-2xl font-bold'>For Developers</h2>
            <p className='mb-3'>Browse our React Jobs and start your career today</p>
            <Button btnText={"Browse Jobs"} />
        </div>
    </div>
  )
}

export default Type