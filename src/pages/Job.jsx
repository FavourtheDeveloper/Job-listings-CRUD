import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useParams, useNavigate } from 'react-router-dom'

const Job = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const url = `http://localhost:8000/jobs/${id}`

  const [job, setJob] = useState([]);

    const deleteJob = () => {
      fetch(url, {
        method: "DELETE"
      }) .then((response) => {
        if (response.ok) {
          alert("Deleted Successfully");
          navigate("/jobs")
          
        } else {
          console.log("There was an error");
          
        }
      }) .catch((error) => {
        console.log(error);
        
      })
    }

  useEffect(() => {

    const fetchJob = async () => {
      const res = await fetch(url);
      const job = await res.json();
      setJob(job)
    }

    fetchJob();
    
    
  }, [])
  
  return (
    <div>
        <Navbar />
        <div className='bg-gray-50 p-4 flex mb-8 pl-44'>
          <Link to={"/jobs"}><p className='text-sm text-blue-700'>Back to job listings</p></Link>
        </div>

        <section className='flex flex-col justify-around md:flex-row'>
          <div className='m-5'>
            <div className='bg-gray-200 p-4 mb-4'>
            <small>{job.jobType}</small>
            <h1 className="text-2xl font-bold mt-1 mb-3">{job.jobTitle}</h1>
            <h4 className="text-red-600 font-bold text-xs">{job.location}</h4>
            </div>

            <div className='bg-gray-200 p-4'>
            <small className='font-bold text-blue-700'>Job Description</small>
            <p className="text-xs font-bold mt-4 mb-3">{job.jobDescription}</p>
            <h4 className="font-bold text-xs">Salary</h4>
            <h4 className="mt-2 font-bold text-xs">{job.salary}</h4>
            </div>
          </div>




          <div className='md:w-1/3 m-5'>
            <div className='bg-gray-200 p-4 mb-4'>
            <p className='font-bold pb-3'>Company Info</p>
            <h3 className="text-xl font-bold mt-1 mb-3">{job.companyName}</h3>
            <p className="text-xs font-bold mt-4">{job.companyDescription}</p>
            <Link to={`/editjob/${job.id}`}><button className=' bg-blue-700 text-white font-bold text-center m-auto w-full mb-1 mt-6 p-2'>Edit Job</button></Link>
            <button onClick={deleteJob} className=' bg-red-700 text-white font-bold text-center m-auto w-full p-2'>Delete Job</button>
            
            </div>

          </div>
        </section>
    </div>
  )
}

export default Job