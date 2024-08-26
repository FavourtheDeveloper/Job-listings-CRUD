import React from 'react'
import { useEffect, useState } from 'react'
import Job from './Job'

const Jobs = () => {
  const [jobs, setJobs] = useState([])

  const url = "http://localhost:8000/jobs";
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const jobs = await result.json();
      setJobs(jobs)   
    }

    fetchData()
    
  }, [])
  
  return (
    <div className='bg-gray-300 p-3'>
        <h1 className='text-center text-blue-700 m-3 font-bold text-2xl'>Browse Jobs</h1>

        <div className="flex justify-center flex-col md:flex-row md:flex-wrap">
          {jobs.map((job) => (
            <Job key={job.id} jobs={job} />
          ))}
        </div>
    </div>
  )
}

export default Jobs