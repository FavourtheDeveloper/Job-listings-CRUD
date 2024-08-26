import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";

const EditJob = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const url = `http://localhost:8000/jobs/${id}`;

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchSingle = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setFormData(data);
    };

    fetchSingle();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();

    const newJob = {
      id: formData.id,
      jobTitle: formData.jobTitle,
      jobDescription: formData.jobDescription,
      companyName: formData.companyName,
      companyDescription: formData.companyDescription,
      jobType: formData.jobType,
      location: formData.location,
      salary: formData.salary,
    };

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    alert("Job edited Successfully");
    navigate(`/job/${id}`);
  };

  return (
    <div>
      <Navbar />

      <div className="w-2/3 m-auto border-b p-8 border-gray-900/10 pb-12">
        <h1 className="text-center text-3xl font-bold">Add Job</h1>
        <Form
          submitData={submitData}
          formData={formData}
          setFormData={setFormData}
        />
      </div>

      <Footer />
    </div>
  );
};

export default EditJob;
