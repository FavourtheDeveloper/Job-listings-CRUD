import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const Addjob = () => {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    companyName: "",
    companyDescription: "",
    jobType: "Full-Time",
    location: "",
    salary: "",
  });

  
  const submitData = async(e) => {
    e.preventDefault();

    const newJob = {
      jobTitle : formData.jobTitle,
      jobDescription : formData.jobDescription,
      companyName : formData.companyName,
      companyDescription : formData.companyDescription,
      jobType : formData.jobType,
      location : formData.location,
      salary : formData.salary,
    }

    
    const url = "http://localhost:8000/jobs";


      const res = await fetch(url, {
        method: "POST",
        headers: {  
          'Content-Type': 'application/json'
        },
       body: JSON.stringify(newJob)
  
      })

      alert("Job added Successfully")
      navigate("/jobs")
    
    
  }


  return (
    <div>
      <Navbar />

      <div className="w-2/3 m-auto border-b p-8 border-gray-900/10 pb-12">
        <h1 className="text-center text-3xl font-bold">Add Job</h1>
        <Form submitData={submitData} formData={formData} setFormData={setFormData} />
      </div>

      <Footer />
    </div>
  );
};

export default Addjob;
