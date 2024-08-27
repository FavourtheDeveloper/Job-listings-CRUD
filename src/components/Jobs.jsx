import React from 'react'
import { useEffect, useState } from 'react'
import Job from './Job'
import { useLocation } from 'react-router-dom'


const Jobs = ({isHome}) => {
  const [jobs, setJobs] = useState([])
console.log(isHome);

const location = useLocation()

  const url = "http://localhost:8000/jobs";
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const jobs = await result.json();
        
      if (location.pathname === "/"){
        setJobs(jobs.slice(0, 3))
      } else {
        setJobs(jobs) 
      }
    }

    fetchData()
    
  }, [])
  
  return (
    <div className='bg-gray-300 p-5'>
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